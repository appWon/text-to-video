import React from 'react'

import * as S from './style.button'

interface ButtonProps {
    color?: string
    background?: string
    disabled?: boolean
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = props => {
    const { disabled, color, background, children, onClick } = props

    return (
        <S.ButtonContainer
            disabled={disabled}
            color={color}
            background={background}
            onClick={onClick}
        >
            {children}
        </S.ButtonContainer>
    )
}
