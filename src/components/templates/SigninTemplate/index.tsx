import React from 'react'

import * as S from './style.signinTemplate'
import { SigninForm } from '../../organisms/SigninForm'
import { CloseIcon } from '../../molecules/CloseIcon'
import { SnsLoginForm } from '../../organisms/SnsLoginForm'

export const SigninTemplate: React.FC = () => {
    return (
        <S.SigninTemplateContainer>
            <S.SigninForm>
                <S.SigninHeader>로그인</S.SigninHeader>
                <CloseIcon />
                <SigninForm />
                <SnsLoginForm />
                <S.SignupWapper>
                    <S.SignupRecommend>회원가입하고 영상을 제작해보세요!</S.SignupRecommend>
                    <S.SignupButton>회원가입</S.SignupButton>
                </S.SignupWapper>
            </S.SigninForm>
        </S.SigninTemplateContainer>
    )
}
