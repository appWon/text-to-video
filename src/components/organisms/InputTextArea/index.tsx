import React from 'react'

import * as S from './style.inputTextArea'
import { useTTVtextData } from '../../../hook/useTTVtextData'

export const InputTextArea: React.FC = () => {
    const { inputText, setInputText } = useTTVtextData()

    function handleChangeTextArea(e: React.ChangeEvent<HTMLTextAreaElement>) {
        const { value } = e.target
        setInputText(value)
    }

    return (
        <S.InputTextAreaContainer>
            <S.TextArea
                onChange={handleChangeTextArea}
                placeholder="500 ~ 5000자 텍스트를 입력해 주세요"
                maxLength={5000}
                minLength={500}
            />
            <S.TextInfoWrapper>
                <S.TextAdvice>*텍스트를 입력하고 설정한 뒤 다음단계 버튼을 누르세요</S.TextAdvice>
                <S.TextAdvice>현재 글자 수 : {inputText.length}</S.TextAdvice>
            </S.TextInfoWrapper>
        </S.InputTextAreaContainer>
    )
}
