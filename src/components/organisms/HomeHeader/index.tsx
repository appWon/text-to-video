import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style.homeHeader'
import { useAuthStep } from '../../../hook/useAuthStep'
import { Logo } from '../../atoms/Logo/style.logo'

export const HomeHeader: React.FC = () => {
    const navigate = useNavigate()
    const { setStep } = useAuthStep()

    function handleSignupClick() {
        setStep(2)
        navigate('/signin')
    }

    function handleLoginClick() {
        setStep(1)
        navigate('/signin')
    }

    return (
        <S.HomeHeaderContainer>
            <S.LogoWapper>
                <Logo />
            </S.LogoWapper>
            <S.AuthButtonWapper>
                <S.SignupButton onClick={handleSignupClick}>회원가입</S.SignupButton>
                <S.LoginButton onClick={handleLoginClick}>
                    <S.LoginIconTitle>로그인</S.LoginIconTitle>
                    <S.LoginIcon />
                </S.LoginButton>
            </S.AuthButtonWapper>
        </S.HomeHeaderContainer>
    )
}
