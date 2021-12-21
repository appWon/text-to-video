import React from 'react'

import * as S from './style.input'

interface InputProps {
    type: 'text' | 'password'
    value: string
    placeholder?: string
    onChange?: (arg: string) => void
}

export const Input: React.FC<InputProps> = props => {
    const { type, placeholder, value, onChange } = props

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange && onChange(e.target.value)
    }

    return (
        <S.InputContainer>
            <S.Input
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={handleChange}
            ></S.Input>
        </S.InputContainer>
    )
}

Input.defaultProps = {
    type: 'text',
}
