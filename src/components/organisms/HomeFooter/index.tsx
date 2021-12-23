import React from 'react'

import * as S from './style.homeFooter'
import { Logo } from '../../atoms/Logo/style.logo'

export const HomeFooter: React.FC = () => {
    return (
        <S.HomeFooterContainer>
            <S.FooterText>본 프로젝트는 기업면접 제출용으로 제작되었습니다. By 장재원</S.FooterText>
            <S.LogoWapper>
                <Logo />
            </S.LogoWapper>
            <S.FooterText>
                웨인힐스벤처스, 서울특별시 강서구 마곡중앙8로 5길 11 파인스퀘어3차 2층(204~207호) |
                사업자등록번호 : 547-87-01358 | 설립자 : 이수민
            </S.FooterText>
            <S.FooterText>
                <img
                    src="https://ttv.waynehills.co/assets/image/footer/i-copyright.png"
                    alt="copyright"
                />
                Copyright 2021 waynehills ventures all rights reserved | 이용약관 |
                e-mail:waynehills.ventures@gmail.com | Powered by Shutterstock
            </S.FooterText>
        </S.HomeFooterContainer>
    )
}
