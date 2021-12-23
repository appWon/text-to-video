import React from 'react'

import * as S from './style.ttvNav'
import { useTTVtextData } from '../../../hook/useTTVtextData'

interface TTVNavProps {
    step: number
    onChange: (arg: number) => void
}

export const TTVNav: React.FC<TTVNavProps> = props => {
    const { step, onChange } = props
    const { inputText } = useTTVtextData()

    function handleIconClick(num: number) {
        if (inputText.length < 500) {
            alert('500자 이상의 텍스트를 입력해주세요.')
            return
        }
        onChange(num)
    }

    return (
        <S.TTVNavContainer>
            <S.NavLogoIcon />
            <S.ServiceIconWapper>
                <S.NavInputTextTabIcon step={step} onClick={() => handleIconClick(1)} />
                <S.NavEditTabIcon step={step} onClick={() => handleIconClick(2)} />
                <S.NavDownloadTabIcon step={step} onClick={() => handleIconClick(3)} />
            </S.ServiceIconWapper>
        </S.TTVNavContainer>
    )
}
