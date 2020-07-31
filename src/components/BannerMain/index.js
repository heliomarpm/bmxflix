import React from 'react';
import VideoIframeResponsive from './components/VideoIframeResponsive';
import { BannerMainContainer, ContentAreaContainer, WatchButton } from './styles';

function getYouTubeId(youtubeURL) {
  return youtubeURL
    .replace(
      /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/,
      '$7',
    );
}

export default function BannerMain({
  videoTitle,
  videoDescription,
  url, heroImg = null, alignVideo:string = 'left'|'right'
}) {
  const youTubeID = getYouTubeId(url);
  const bgUrl =  heroImg  ? heroImg : `https://img.youtube.com/vi/${youTubeID}/maxresdefault.jpg`;

    return (     
        <BannerMainContainer backgroundImage={bgUrl}>
            <ContentAreaContainer>

                <ContentAreaContainer.Item>
                    <VideoIframeResponsive youtubeID={youTubeID} />
                    <WatchButton>
                        Assistir
                    </WatchButton>
                </ContentAreaContainer.Item>
        
                <ContentAreaContainer.Item>
                    <ContentAreaContainer.Title>
                        {videoTitle}
                    </ContentAreaContainer.Title>
        
                    <ContentAreaContainer.Description>
                        {videoDescription}
                    </ContentAreaContainer.Description>
                </ContentAreaContainer.Item>
               
            </ContentAreaContainer>
        </BannerMainContainer>
    );
}
