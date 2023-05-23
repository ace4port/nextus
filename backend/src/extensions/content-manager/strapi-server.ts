"use strict";

const { prop, isEmpty } = require('lodash/fp');
const { hasDraftAndPublish } = require('@strapi/utils').contentTypes;
const { PUBLISHED_AT_ATTRIBUTE } = require('@strapi/utils').contentTypes.constants;

const { getService } = require('@strapi/plugin-content-manager/server/utils');
const { validateFindAvailable } = require('@strapi/plugin-content-manager/server/controllers/validation/relations');

const addFiltersClause = (params, filtersClause) => {
    params.filters = params.filters || {};
    if (params.filters.$and) {
        params.filters.$and.push(filtersClause);
    } else {
        params.filters.$and = [filtersClause];
    }
};

module.exports = (plugin) => {
    //覆盖content-manager中的relations.js controller中的findAvailable函数.
    plugin.controllers.relations.findAvailable = async (ctx) => {
        const { userAbility } = ctx.state;
        const { model, targetField } = ctx.params;

        await validateFindAvailable(ctx.request.query);

        // idsToOmit: used to exclude relations that the front already added but that were not saved yet
        // idsToInclude: used to include relations that the front removed but not saved yes
        const { entityId, idsToOmit, idsToInclude, _q, ...query } = ctx.request.query;

        const modelSchema = strapi.getModel(model);
        if (!modelSchema) {
            return ctx.badRequest("The model doesn't exist");
        }

        const attribute = modelSchema.attributes[targetField];
        if (!attribute || attribute.type !== 'relation') {
            return ctx.badRequest("This relational field doesn't exist");
        }

        const isComponent = modelSchema.modelType === 'component';

        // RBAC checks when it's a content-type
        // TODO: do RBAC check for components too
        if (!isComponent) {
            const permissionChecker = getService('permission-checker').create({
                userAbility,
                model,
            });

            if (permissionChecker.cannot.read(null, targetField)) {
                return ctx.forbidden();
            }

            if (entityId) {
                const entityManager = getService('entity-manager');

                const entity = await entityManager.findOneWithCreatorRoles(entityId, model);

                if (!entity) {
                    return ctx.notFound();
                }

                if (permissionChecker.cannot.read(entity, targetField)) {
                    return ctx.forbidden();
                }
            }
        } else {
            // eslint-disable-next-line no-lonely-if
            if (entityId) {
                const entity = await strapi.entityService.findOne(model, entityId);

                if (!entity) {
                    return ctx.notFound();
                }
            }
        }

        const targetedModel = strapi.getModel(attribute.target);

        const modelConfig = isComponent
            ? await getService('components').findConfiguration(modelSchema)
            : await getService('content-types').findConfiguration(modelSchema);
        const mainField = prop(`metadatas.${targetField}.edit.mainField`, modelConfig) || 'id';

        const fieldsToSelect = ['id', mainField];
        if (hasDraftAndPublish(targetedModel)) {
            fieldsToSelect.push(PUBLISHED_AT_ATTRIBUTE);
        }

        const queryParams = {
            sort: mainField,
            ...query,
            fields: fieldsToSelect, // cannot select other fields as the user may not have the permissions
            filters: {}, // cannot filter for RBAC reasons
        };

        if (!isEmpty(idsToOmit)) {
            addFiltersClause(queryParams, { id: { $notIn: idsToOmit } });
        }

        // searching should be allowed only on mainField for permission reasons
        if (_q) {
            addFiltersClause(queryParams, { [mainField]: { $containsi: _q } });
        }

        const { user } = ctx.state;
        if (user.roles[0].code !== 'strapi-super-admin') {
            addFiltersClause(queryParams, { createdBy: user.id }); // filter created by user id or change it to anything you want to filter by. 自定义Relation过滤。
        }

        if (entityId) {
            const subQuery = strapi.db.queryBuilder(modelSchema.uid);

            const alias = subQuery.getAlias();

            const where = {
                id: entityId,
                [`${alias}.id`]: { $notNull: true },
            };

            if (!isEmpty(idsToInclude)) {
                where[`${alias}.id`].$notIn = idsToInclude;
            }

            const knexSubQuery = subQuery
                .where(where)
                .join({ alias, targetField })
                .select(`${alias}.id`)
                .getKnexQuery();

            addFiltersClause(queryParams, { id: { $notIn: knexSubQuery } });
        }

        ctx.body = await strapi.entityService.findPage(targetedModel.uid, queryParams);
    }

    return plugin
};