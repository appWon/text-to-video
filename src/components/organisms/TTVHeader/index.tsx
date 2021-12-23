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
                {step < 3 ? (
                    <S.NextButton onClick={handleNextButton}>다음</S.NextButton>
                ) : (
                    <S.NextButton onClick={handleNextButton}>
                        <img
                            src="https://ttv.waynehills.co/assets/image/ttv-encoding/i-download-w.png"
                            alt="다운로드 이미지"
                        />
                    </S.NextButton>
                )}
            </S.EventWapper>
        </S.TTVHeaderContainer>
    )
}
