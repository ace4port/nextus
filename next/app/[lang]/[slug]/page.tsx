import React from 'react'
import directusApi from '@/app/[lang]/utils/directus-api'
import { readItems } from '@directus/sdk'
import { Page } from '@/types/schemas'
import PageBuilder from '@/app/[lang]/components/PageBuilder'

type Props = {
  params: { slug: string; lang: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default async function PageRoute({ params }: Props) {
  const pages = (await directusApi.request(
    readItems('pages', {
      filter: {
        slug: { _eq: params.slug },
      },
      fields: [
        '*',
        'seo.*',
        'blocks.collection',
        'blocks.item.*',
        'blocks.item.testimonials.testimonial.*',
        'blocks.item.logos.file.*',
        'blocks.item.form.*',
        'blocks.item.steps.*',
        'blocks.item.gallery_items.directus_files_id.*',
        'blocks.item.*',
        'blocks.item.rows.*',
        'blocks.item.posts.posts_id.*',
      ],
      limit: 1,
    })
  )) as Array<Page>

  if (pages.length === 0) return null

  return (
    <>
      <PageBuilder page={pages[0]} />
    </>
  )
}
