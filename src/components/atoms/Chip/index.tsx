import React from 'react'

import * as S from './style.chip'

interface ChipProps {
    label: string
    checked: boolean
    onClick: (arg: string) => void
}

export const Chip: React.FC<ChipProps> = props => {
    const { label, checked, onClick } = props

    function handleClick() {
        onClick(label)
    }

    return (
        <S.ChipContainer checked={checked} onClick={handleClick}>
            {label}
        </S.ChipContainer>
    )
}
