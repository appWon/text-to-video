import React from 'react'

import * as S from './style.personalSignup'
import { SnsSignupButton } from '../../molecules/SnsSignupButton'
import { InputUserCheck } from '../../molecules/InputUserCheck'
import { useAuthStep } from '../../../hook/useAuthStep'

export const PersonalSignup: React.FC = () => {
    const [userId, setUserId] = React.useState('')
    const [duplicate, setDuplicate] = React.useState(true)
    const { step, setStep } = useAuthStep()

    function handleNextClick() {
        setStep(step + 1)
    }

    return (
        <S.PersonalSignupContainer>
            <S.SnsSignUpWapper>
                <S.SignTitle>소셜 회원가입</S.SignTitle>
                <SnsSignupButton src="https://ttv.waynehills.co/assets/i_google_c.png">
                    구글 회원가입
                </SnsSignupButton>
                <SnsSignupButton src="https://ttv.waynehills.co/assets/i_facebook_c.png">
                    페이스북으로 회원가입
                </SnsSignupButton>
            </S.SnsSignUpWapper>
            <S.NomalSignupWapper>
                <S.SignTitle>일반 회원가입</S.SignTitle>
                <InputUserCheck value={userId} onChange={setUserId} onDuplicate={setDuplicate} />
                <S.SignupRecommend>
                    *가입완료 후 이메일에서 본인인증을 완료해야 서비스를 이용하실 수 있습니다.
                </S.SignupRecommend>
            </S.NomalSignupWapper>
            <S.SignupNextButton
                disabled={duplicate}
                background={'#650aa8'}
                onClick={handleNextClick}
            >
                다음
            </S.SignupNextButton>
        </S.PersonalSignupContainer>
    )
}
