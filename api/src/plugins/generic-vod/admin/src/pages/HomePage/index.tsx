

/*
 *
 * HomePage
 *
 */

import { BaseHeaderLayout, ContentLayout, Layout } from '@strapi/design-system'
import { CheckPagePermissions, LoadingIndicatorPage, useRBAC } from '@strapi/helper-plugin'
import React, { useEffect, useMemo, useState } from 'react'
import { useIntl } from 'react-intl';

import assetsRequests from '../../api/assets'
import settingsRequests from '../../api/settings'
import AddButton from '../../components/Button/AddButton'
import EmptyState from '../../components/EmptyState'
import SearchBar from '../../components/SearchBar'
import SetupNeeded from '../../components/SetupNeeded'
import VideoView from '../../components/Videos'
import { GridBroadcast } from '../../components/Videos/styles'
import pluginPermissions from '../../permissions'
import { CustomVideo } from '../../../../types'
import getTrad from "../../utils/getTrad";
import { GetVideoPlayAuthResponseBodyVideoMeta } from "@alicloud/vod20170321/src/client";

export type EnhancedCustomVideo = CustomVideo & {
  token?: string;
  privateSession?: string;
  playAuth: string,
  videoMeta: GetVideoPlayAuthResponseBodyVideoMeta
}

const HomePage = () => {

  const { formatMessage } = useIntl();

  const [isLoadingData, setIsLoadingData] = useState(true)
  const [isLoadingConfiguration, setIsLoadingConfiguration] = useState(false)
  const [isConfigurated, setIsConfigurated] = useState(false)
  const [assets, setAssets] = useState<CustomVideo[]>([])
  const [search, setSearch] = useState('')

  const permissions = useMemo(() => {
    return {
      read: pluginPermissions.mainRead,
      create: pluginPermissions.mainCreate,
      delete: pluginPermissions.mainDelete,
      update: pluginPermissions.mainUpdate,
      updateSettings: pluginPermissions.settingsUpdate,
    }
  }, [])

  const {
    isLoading: isLoadingPermissions,
    allowedActions: { canRead, canCreate, canDelete, canUpdate, canUpdateSettings },
  } = useRBAC(permissions)

  const fetchData = async () => {
    if (!isLoadingData) setIsLoadingData(true)

    // 针对每一个视频，把凭证和meta数据写进去
    const data = await Promise.all((await assetsRequests.getAllvideos()).map(async (video: CustomVideo): Promise<EnhancedCustomVideo> => {
      const { playAuth, videoMeta } = (await assetsRequests.getToken(video.videoId));

      return {
        ...video,
        thumbnail: videoMeta.coverURL,
        playAuth,
        videoMeta
      }
    }));

    // const data = await await assetsRequests.getAllvideos();


    setIsLoadingData(false)
    setAssets(data)
  }

  const getApiKey = async () => {
    setIsLoadingConfiguration(true)
    const settings = await settingsRequests.get()
    setIsConfigurated(settings?.accessKeyId?.length > 0)
    setIsLoadingConfiguration(false)
  }

  useEffect(() => {
    let c = document.querySelector("#AliPlayerStyle")
    c && c.parentNode?.removeChild(c)


    let s = document.querySelector("#AliPlayer");
    s && s.parentNode?.removeChild(s);

    let style = document.createElement("link")
    style.id = "AliPlayerStyle"
    style.rel = "stylesheet"
    style.href = "https://g.alicdn.com/de/prismplayer/2.15.2/skins/default/aliplayer-min.css"
    document.head.appendChild(style)

    let script = document.createElement("script");
    script.id = "AliPlayer";
    script.type = "text/javascript"
    script.src = 'https://g.alicdn.com/de/prismplayer/2.15.2/aliplayer-min.js';
    document.head.appendChild(script)
    fetchData()
  }, [])
  useEffect(() => {
    getApiKey()
  }, [])

  const handleSearch = (value: string) => {
    setSearch(value)
  }
  if (isLoadingConfiguration || isLoadingPermissions) return <LoadingIndicatorPage />

  return (
    <Layout>
      <BaseHeaderLayout
        title={formatMessage({
          id: getTrad('homepage.title')
        })}
        subtitle={formatMessage({
          id: getTrad('homepage.subTitle')
        })}
        as="h2"
        primaryAction={isConfigurated && canCreate && <AddButton update={fetchData} />}
      />
      <ContentLayout>
        {isConfigurated ? (
          !isLoadingData && assets?.length > 0 ? (
            <>
              <SearchBar
                search={search}
                handleSearch={(query) => handleSearch(query)}
                clearSearch={() => setSearch('')}
              />
              <GridBroadcast>
                {assets
                  .filter((item) => item.title.includes(search))
                  .map((video) => {
                    const { videoId } = video
                    return (
                      <VideoView
                        video={video}
                        key={videoId}
                        updateData={fetchData}
                        editable={canUpdate}
                        deletable={canDelete}
                      />
                    )
                  })}
              </GridBroadcast>
            </>
          ) : (
            <EmptyState update={fetchData} />
          )
        ) : (
          <SetupNeeded />
        )}
      </ContentLayout>
    </Layout>
  )
}

export default () => (
  <CheckPagePermissions permissions={pluginPermissions.mainRead}>
    <HomePage />
  </CheckPagePermissions>
)
