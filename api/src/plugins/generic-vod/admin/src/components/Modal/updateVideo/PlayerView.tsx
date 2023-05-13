import React, {FC} from 'react'
import styled from 'styled-components'
import {EnhancedCustomVideo} from '../../../pages/HomePage'
import AliPlayer from "./AliPlayer";

interface IPlayerViewProps {
  video: EnhancedCustomVideo
}

const PlayerView: FC<IPlayerViewProps> = ({video}) => {


  return (
    <Wrapper>
      <AliPlayer vid={video.videoId} playauth={video.playAuth}></AliPlayer>
    </Wrapper>
  )
}

export default PlayerView

const Wrapper = styled.div`
  border-radius: 4px;
  padding-bottom: 10px;
`
