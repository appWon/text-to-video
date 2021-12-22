import React from 'react'

import * as S from './style.completedForm'
import { useAuthStep } from '../../../hook/useAuthStep'

export const CompletedForm: React.FC = () => {
    const { setStep } = useAuthStep()

    function handleNextClick() {
        setStep(1)
    }

    return (
        <S.CompletedFormContainer>
            <S.CompletedText>가입을 축하합니다!</S.CompletedText>
            <S.CompletedMessage>가입하신</S.CompletedMessage>
            <S.CompletedUserId>app641@naver.com</S.CompletedUserId>
            <S.CompletedMessage>로</S.CompletedMessage>
            <S.CompletedMessage>인증메일을 전송했습니다. 본인인증을 해주세요.</S.CompletedMessage>
            <S.CompletedMessage>*본인인증을 완료해야 서비스 이용이 가능합니다.</S.CompletedMessage>
            <S.CompletedImage />
            <S.CompletedButtonWapper>
                <S.ResendMail>이메일 재발송</S.ResendMail>
                <S.LoginButton background="#650aa8" onClick={handleNextClick}>
                    로그인
                </S.LoginButton>
            </S.CompletedButtonWapper>
        </S.CompletedFormContainer>
    )
}
