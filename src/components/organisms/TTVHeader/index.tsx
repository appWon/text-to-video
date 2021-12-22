import React from 'react'

import * as S from './style.ttvHeader'
import { UserInfo } from '../../molecules/UserInfo'
import { useTTVtextData } from '../../../hook/useTTVtextData'
import { useTTVstepData } from '../../../hook/useTTVstepData'

interface TTVHeaderProps {
    title: string
}

export const TTVHeader: React.FC<TTVHeaderProps> = props => {
    const { inputText } = useTTVtextData()
    const { step, setStep } = useTTVstepData()

    function handleNextButton() {
        if (step !== 1 && inputText.length < 500) {
            alert('500자 이상의 텍스트를 입력해주세요.')
            return
        }
        setStep(2)
    }

    return (
        <S.TTVHeaderContainer>
            <S.TTVtitle>{props.title}</S.TTVtitle>
            <S.EventWapper>
                <UserInfo />
                <S.NextButton onClick={handleNextButton}>다음</S.NextButton>
            </S.EventWapper>
        </S.TTVHeaderContainer>
    )
}
