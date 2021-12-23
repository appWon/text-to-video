import React from 'react'

import * as S from './style.signinForm'
import { useSignData } from '../../../hook/useSignData'
import { InputPassword } from '../../molecules/InputPassword'
import { CheckBox } from '../../atoms/CheckBox'

export const SigninForm: React.FC = () => {
    const { loginData, setLoginData } = useSignData()
    const [isRemember, setIsRemember] = React.useState(false)

    function handleChnageInputData(e: React.ChangeEvent<HTMLInputElement>) {
        const { id, value } = e.target

        setLoginData({ ...loginData, [id]: value })
    }

    function handleLoginClick() {
        localStorage.setItem('auth', loginData.id)
    }

    function handleToogleRemember(items: { id: string; value: boolean }) {
        setIsRemember(items.value)
    }

    React.useEffect(() => {
        const userId = localStorage.getItem('auth')
        if (!userId) return

        setIsRemember(Boolean(userId))
        setLoginData({ ...loginData, id: userId })
    }, [])

    return (
        <S.SigninFormContainer>
            <S.InputText
                id="id"
                type="text"
                value={loginData.id}
                placeholder="이메일 입력"
                onChange={handleChnageInputData}
            />
            <InputPassword
                id="password"
                value={loginData.password}
                onChange={handleChnageInputData}
            />
            <S.FindPasswordWapper>
                <S.FindPasswordLabel>비밀번호를 잊으셨나요?</S.FindPasswordLabel>
                <S.FindPasswordButton>비밀번호 찾기</S.FindPasswordButton>
            </S.FindPasswordWapper>
            <S.LoginButton background="#650aa8" onClick={handleLoginClick}>
                로그인
            </S.LoginButton>
            <CheckBox id="rememberId" value={isRemember} onChange={handleToogleRemember}>
                로그인 정보 저장
            </CheckBox>
        </S.SigninFormContainer>
    )
}
