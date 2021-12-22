import React from 'react'

import * as S from './style.inputUserCheck'

interface InputUserCheckProps {
    value: string
    onChange: (arg: string) => void
    onDuplicate: (arg: boolean) => void
}

export const InputUserCheck: React.FC<InputUserCheckProps> = props => {
    const { value, onChange, onDuplicate } = props
    const [emailvalidation, setEmailvalidation] = React.useState(false)

    function handleUserIdChange(e: React.ChangeEvent<HTMLInputElement>) {
        const { value } = e.target
        onChange(value)
    }

    function handleCheckUserId() {
        onDuplicate(false)
    }

    React.useEffect(() => {
        const emailValidationCheck =
            /^[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_.]?[0-9a-zA-Z])*.[a-zA-Z]{2,3}$/i

        const checked = value.match(emailValidationCheck)
        console.log(checked)
        if (!checked) {
            setEmailvalidation(true)
        } else {
            setEmailvalidation(false)
        }
    }, [value])

    return (
        <S.InputUserCheckContainer>
            <S.InputUserId
                type="text"
                value={value}
                placeholder="이메일(아이디) 입력"
                onChange={handleUserIdChange}
            />
            <S.CheckUserId
                background={'#650aa8'}
                disabled={emailvalidation}
                onClick={handleCheckUserId}
            >
                중복체크
            </S.CheckUserId>
        </S.InputUserCheckContainer>
    )
}
