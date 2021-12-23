import React from 'react'

import * as S from './style.signinTemplate'
import { SigninForm } from '../../organisms/SigninForm'
import { CloseIcon } from '../../molecules/CloseIcon'
import { SnsLoginForm } from '../../organisms/SnsLoginForm'
import { ProgressBar } from '../../organisms/ProgressBar'
import { SignupSelectUser } from '../../organisms/SignupSelectUser'
import { PersonalSignup } from '../../organisms/PersonalSignup'
import { PersonalSignupDetail } from '../../organisms/PersonalSignupDetail'
import { CompletedForm } from '../../organisms/CompletedForm'
import { useAuthStep } from '../../../hook/useAuthStep'
import { VideoBackground } from '../../molecules/VideoBackground'
import { HomeFooter } from '../../organisms/HomeFooter'

export const SigninTemplate: React.FC = () => {
    const { step, setStep } = useAuthStep()

    function handlePrevClick() {
        setStep(step - 1)
    }

    function handleSignupClick() {
        setStep(step + 1)
    }

    return (
        <S.SigninTemplateContainer>
            <VideoBackground />
            <HomeFooter />
            <S.SigninLogo />
            <S.AuthWapper>
                <ProgressBar currentStep={step} />
                <CloseIcon />
                <S.LoginWapper isStep={step}>
                    <S.SigninHeader>로그인</S.SigninHeader>
                    <SigninForm />
                    <SnsLoginForm />
                    <S.SignupWapper>
                        <S.SignupRecommend>회원가입하고 영상을 제작해보세요!</S.SignupRecommend>
                        <S.SignupButton onClick={handleSignupClick}>회원가입</S.SignupButton>
                    </S.SignupWapper>
                </S.LoginWapper>
                <S.SignupSelectWapper isStep={step}>
                    <S.SignupSelectHeader>
                        <S.PrevIcon onClick={handlePrevClick} />
                        <S.SignupSelectTitle>회원가입</S.SignupSelectTitle>
                        <S.SignupSelectRecommend>회원분류를 선택해주세요</S.SignupSelectRecommend>
                    </S.SignupSelectHeader>
                    <SignupSelectUser />
                </S.SignupSelectWapper>
                <S.PersonalSignupWapper isStep={step}>
                    <S.SignupSelectHeader>
                        <S.PrevIcon onClick={handlePrevClick} />
                        <S.SignupSelectTitle>회원가입</S.SignupSelectTitle>
                        <S.PersonalRecommend>개인회원</S.PersonalRecommend>
                    </S.SignupSelectHeader>
                    <PersonalSignup />
                </S.PersonalSignupWapper>
                <S.PersonalDetailWapper isStep={step}>
                    <S.SignupSelectHeader>
                        <S.PrevIcon onClick={handlePrevClick} />
                        <S.SignupSelectTitle>회원가입</S.SignupSelectTitle>
                        <S.PersonalRecommend>개인회원</S.PersonalRecommend>
                    </S.SignupSelectHeader>
                    <PersonalSignupDetail />
                </S.PersonalDetailWapper>
                <S.completedSignupWapper isStep={step}>
                    <S.SignupSelectHeader>
                        <S.SignupSelectTitle>이메일 인증</S.SignupSelectTitle>
                        <S.PersonalRecommend>개인회원</S.PersonalRecommend>
                    </S.SignupSelectHeader>
                    <CompletedForm />
                </S.completedSignupWapper>
            </S.AuthWapper>
        </S.SigninTemplateContainer>
    )
}
