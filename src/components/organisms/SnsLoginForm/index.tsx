import React from 'react'

import * as S from './style.snsLogin'
import { SnsLogin } from '../../molecules/SnsLogin'

export const SnsLoginForm: React.FC = () => {
    return (
        <S.SnsLoginCointainer>
            <SnsLogin
                url="https://ttv.waynehills.co/assets/i_google_b.png"
                value="구글로 로그인하기"
            />
            <SnsLogin
                url="https://ttv.waynehills.co/assets/i_facebook_b.png"
                value="페이스북으로 로그인하기"
            />
        </S.SnsLoginCointainer>
    )
}
