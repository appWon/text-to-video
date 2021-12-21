import React from 'react'

import * as S from './style.button'

interface ButtonProps {
    color?: string
    background?: string
    disabled?: boolean
}

export const Button: React.FC<ButtonProps> = props => {
    const { disabled, color, background, children } = props

    return (
        <S.ButtonContainer disabled={disabled} color={color} background={background}>
            {children}
        </S.ButtonContainer>
    )
}
