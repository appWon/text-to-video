import React from 'react'

import * as S from './style.checkBox'

interface CheckBoxProps {
    id: string
    value: boolean
    className?: string
    onChange: (arg: { id: string; value: boolean }) => void
}

export const CheckBox: React.FC<CheckBoxProps> = props => {
    const { id, value, className, onChange } = props

    function handleToogleClick() {
        id && onChange({ id: id, value: !value })
    }

    return (
        <S.CheckBoxContainer className={className} id={id} onClick={handleToogleClick}>
            <S.CheckBoxIcon isChecked={value} />
            <S.CheckBoxValue>{props.children}</S.CheckBoxValue>
        </S.CheckBoxContainer>
    )
}
