import React from 'react'

import * as S from './style.personalSignupDetail'
import { CheckCips } from '../../molecules/CheckCips'
import { CheckBox } from '../../atoms/CheckBox'

interface PersonalSignupDetailProps {
    onClick?: () => void
}

export const PersonalSignupDetail: React.FC<PersonalSignupDetailProps> = props => {
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
                    * 8~16자 영문(대,소문자), 숫자, 특수기호 혼합
                </S.PasswordRecomment>
                <S.InputCheckPassword
                    id="checkPassword"
                    type="password"
                    value={userPassword.checkPassword}
                    onChange={handlePasswordChange}
                    error={error.checkPassword}
                />
                <S.PasswordRecomment error={error.checkPassword}>
                    * 동일한 비밀번호 입력
                </S.PasswordRecomment>
            </S.PasswordWapper>
            <S.MoviePurposeWapper>
                <S.WapperHeader>
                    <S.WapperTitle>영상 제작 목적</S.WapperTitle>
                    <S.WapperRecommened>*중복선택가능</S.WapperRecommened>
                </S.WapperHeader>
                <CheckCips />
            </S.MoviePurposeWapper>
            <S.AgreementWapper>
                <S.WapperHeader>
                    <S.WapperTitle>이용약관</S.WapperTitle>
                    <S.WapperRecommened>약관보기 </S.WapperRecommened>
                </S.WapperHeader>
                <CheckBox id="agree" value={isChkecked} onChange={arg => setIsChecked(arg.value)}>
                    TTV A.I 이용약관에 모두 동의합니다.
                </CheckBox>
            </S.AgreementWapper>
            <S.SignupButton disabled={!completed} background="#650aa8" onClick={props.onClick}>
                가입완료
            </S.SignupButton>
        </S.PersonalSignupDetailContainer>
    )
}
