import React from 'react'

import * as S from './style.homeTemplate'
import { HomeHeader } from '../../organisms/HomeHeader'
import { HomeFooter } from '../../organisms/HomeFooter'
import { MakeVideoButton } from '../../organisms/MakeVideoButton'
import { VideoBackground } from '../../molecules/VideoBackground/style.videoBackground'

export const HomeTemplate: React.FC = () => {
    return (
        <S.HomeTemplateContainer>
            <VideoBackground />
            <HomeHeader />
            <HomeFooter />
            <S.MainLogoWapper>
                <S.MainLogo />
                <S.MainRecommented>
                    너무나도 빠르고 편리한 영상제작 A.I <S.MainRecommentedIcon />
                </S.MainRecommented>
            </S.MainLogoWapper>
            <MakeVideoButton />
        </S.HomeTemplateContainer>
    )
}
