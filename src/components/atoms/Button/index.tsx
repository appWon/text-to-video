import React from 'react'

import * as S from './style.button'

interface ButtonProps {
    color?: string
    background?: string
    disabled?: boolean
    className?: string
    onClick?: () => void
}

export const Button: React.FC<ButtonProps> = props => {
    const { disabled, color, background, children, className, onClick } = props

    return (
        <S.ButtonContainer
            className={className}
            disabled={disabled}
            color={color}
            background={background}
            onClick={onClick}
        >
            {children}
        </S.ButtonContainer>
    )
}
