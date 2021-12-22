import React from 'react'

import * as S from './styled.checkCips'
import { Chip } from '../../atoms/Chip'

const DEFAULT_DATA = ['홍보', '흥미', '브이로그', '기타']

export const CheckCips: React.FC = () => {
    const [isChecked, setChecked] = React.useState<string[]>([])

    function handleChipClick(label: string) {
        if (isChecked.some(value => value === label)) {
            setChecked(isChecked.filter(value => value !== label))
            return
        }
        setChecked([...isChecked, label])
    }

    return (
        <S.CheckCipsContainer>
            {DEFAULT_DATA.map(value => (
                <Chip
                    label={value}
                    key={value}
                    onClick={handleChipClick}
                    checked={isChecked.some(label => value === label)}
                />
            ))}
        </S.CheckCipsContainer>
    )
}
