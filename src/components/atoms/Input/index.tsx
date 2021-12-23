import React from 'react'

import * as S from './style.input'

interface InputProps {
    id?: string
    type: 'text' | 'password'
    value: string
    placeholder?: string
    className?: string
    onChange?: (arg: React.ChangeEvent<HTMLInputElement>) => void
}

export const Input: React.FC<InputProps> = props => {
    const { id, type, placeholder, value, className, onChange } = props

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        onChange && onChange(e)
    }

    return (
        <S.InputContainer className={className}>
            <S.Input
                id={id}
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
