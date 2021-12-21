import React from 'react'

import * as S from './style.input'

interface InputProps {
    type: 'text' | 'password'
    placeholder?: string
}

export const Input: React.FC<InputProps> = props => {
    const { type, placeholder } = props

    return (
        <S.InputContainer>
            <S.Input type={type} placeholder={placeholder}></S.Input>
        </S.InputContainer>
    )
}

Input.defaultProps = {
    type: 'text',
}
