import React from 'react'

import * as S from './style.personalSignupDetail'
import { CheckCips } from '../../molecules/CheckCips'
import { CheckBox } from '../../atoms/CheckBox'
import { useAuthStep } from '../../../hook/useAuthStep'

export const PersonalSignupDetail: React.FC = () => {
    const [userPassword, setPassword] = React.useState({
        password: '',
        checkPassword: '',
    })
    const [error, setError] = React.useState({
        password: false,
        checkPassword: false,
    })
    const [isChkecked, setIsChecked] = React.useState(false)
    const [completed, setCompleted] = React.useState(false)
    const { step, setStep } = useAuthStep()

    function handleNextClick() {
        setStep(step + 1)
    }

    function handlePasswordChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target
        setPassword({ ...userPassword, [id]: value })
    }

    React.useEffect(() => {
        const { password, checkPassword } = userPassword

        if (!password && !checkPassword) {
            setError({ password: false, checkPassword: false })
            return
        }

        const validation = !/^(?=.*[a-zA-Z])(?=.*[^a-zA-Z0-9]|.*[0-9]).{8,16}$/.test(password)
        setError({
            password: validation,
            checkPassword: checkPassword ? password !== checkPassword : false,
        })
    }, [userPassword])

    React.useEffect(() => {
        if (
            !userPassword.checkPassword ||
            !userPassword.password ||
            !isChkecked ||
            error.password ||
            error.checkPassword
        ) {
            setCompleted(false)
            return
        }
        setCompleted(true)
    }, [error, isChkecked, completed])

    return (
        <S.PersonalSignupDetailContainer>
            <S.PasswordWapper>
                <S.InputViewPassword
                    id="password"
                    value={userPassword.password}
                    onChange={handlePasswordChange}
                    error={error.password}
                />
                <S.PasswordRecomment error={error.password}>
                    * 8~16??? ??????(???,?????????), ??????, ???????????? ??????
                </S.PasswordRecomment>
                <S.InputCheckPassword
                    id="checkPassword"
                    type="password"
                    value={userPassword.checkPassword}
                    onChange={handlePasswordChange}
                    error={error.checkPassword}
                />
                <S.PasswordRecomment error={error.checkPassword}>
                    * ????????? ???????????? ??????
                </S.PasswordRecomment>
            </S.PasswordWapper>
            <S.MoviePurposeWapper>
                <S.WapperHeader>
                    <S.WapperTitle>?????? ?????? ??????</S.WapperTitle>
                    <S.WapperRecommened>*??????????????????</S.WapperRecommened>
                </S.WapperHeader>
                <CheckCips />
            </S.MoviePurposeWapper>
            <S.AgreementWapper>
                <S.WapperHeader>
                    <S.WapperTitle>????????????</S.WapperTitle>
                    <S.WapperRecommened>???????????? </S.WapperRecommened>
                </S.WapperHeader>
                <CheckBox id="agree" value={isChkecked} onChange={arg => setIsChecked(arg.value)}>
                    TTV A.I ??????????????? ?????? ???????????????.
                </CheckBox>
            </S.AgreementWapper>
            <S.SignupButton disabled={!completed} background="#650aa8" onClick={handleNextClick}>
                ????????????
            </S.SignupButton>
        </S.PersonalSignupDetailContainer>
    )
}
