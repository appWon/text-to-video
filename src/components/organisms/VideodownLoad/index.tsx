import React from 'react'

import * as S from './style.videoDownLoad'

export const VideodownLoad: React.FC = () => {
    return (
        <S.VideodownLoadContainer>
            <S.PreviewWrapper>
                <S.VideoHeader>
                    <S.VideoTitle>A.I 영상 미리보기</S.VideoTitle>
                </S.VideoHeader>
                <S.VideoWrapper>
                    <S.Video
                        loop
                        muted
                        autoPlay
                        src="https://ak.picdn.net/shutterstock/videos/1056029879/preview/stock-footage-smart-city-aerial-drone-footage-hologram-information-arches-forming-during-network-communication.webm"
                    />
                </S.VideoWrapper>
            </S.PreviewWrapper>
            <S.VideoInfoWrapper>
                <S.VideoHeader>
                    <S.VideoTitle>영상 정보</S.VideoTitle>
                </S.VideoHeader>
                <S.VideoContent>
                    <S.InfoWrapper>
                        <S.InfoTitle>영상 길이</S.InfoTitle>
                        <S.InfoValue>00:32</S.InfoValue>
                    </S.InfoWrapper>
                    <S.InfoWrapper>
                        <S.InfoTitle>사운드(무드)</S.InfoTitle>
                        <S.InfoValue>신나는</S.InfoValue>
                    </S.InfoWrapper>
                </S.VideoContent>
            </S.VideoInfoWrapper>
            <S.SelectResolutionWrapper>
                <S.VideoHeader>
                    <S.VideoTitle>영상 해상도 선택</S.VideoTitle>
                </S.VideoHeader>
                <S.VideoContent>
                    <S.SD>SD 720p</S.SD>
                    <S.HD>HD 1080p</S.HD>
                </S.VideoContent>
            </S.SelectResolutionWrapper>
        </S.VideodownLoadContainer>
    )
}
