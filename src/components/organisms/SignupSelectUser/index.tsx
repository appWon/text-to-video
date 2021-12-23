import React from 'react'

import * as S from './style.signupUser'
import { SignupButton } from '../../molecules/SignupButton'
import { useAuthStep } from '../../../hook/useAuthStep'

export const SignupSelectUser: React.FC = () => {
    const { step, setStep } = useAuthStep()

    function handleNextClick() {
        setStep(step + 1)
    }

    return (
        <S.SignupSelectUserContainer>
            <SignupButton
                onClick={handleNextClick}
                url={'https://ttv.waynehills.co/assets/i_signup_personal.png'}
            >
                <S.ButtonTextWapper>
                    <S.ButtonTitle>개인회원</S.ButtonTitle>
                    <S.ButtonNotice>자신만의 영상을 만들고 싶은 개인회원</S.ButtonNotice>
                </S.ButtonTextWapper>
            </SignupButton>
            <SignupButton url={'https://ttv.waynehills.co/assets/i_signup_company.png'}>
                <S.ButtonTextWapper>
                    <S.ButtonTitle>기업회원</S.ButtonTitle>
                    <S.ButtonNotice>다함께 영상을 만들고 싶은 기업회원</S.ButtonNotice>
                </S.ButtonTextWapper>
            </SignupButton>
        </S.SignupSelectUserContainer>
    )
}
