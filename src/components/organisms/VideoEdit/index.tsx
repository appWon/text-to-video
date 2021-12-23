import React from 'react'

import * as S from './style.videoEdit'
import { useTTVtextData } from '../../../hook/useTTVtextData'

export const VideoEdit: React.FC = () => {
    const { inputText } = useTTVtextData()

    return (
        <S.VideoEditContainer>
            <S.AiVideoTimelineWrapper>
                <S.VideoEditHeader>
                    <S.VideoEditTitle>A.I 영상 타임라인</S.VideoEditTitle>
                    <S.VideoEditTitle>
                        *업로드 아이콘을 클릭하여 내 영상을 업로드 할 수 있습니다.
                    </S.VideoEditTitle>
                </S.VideoEditHeader>
                <S.AiVideoTimelinDataWrapper></S.AiVideoTimelinDataWrapper>
            </S.AiVideoTimelineWrapper>
            <S.VideoEditHeader>
                <S.VideoEditTitle>A.I 영상 편집</S.VideoEditTitle>
            </S.VideoEditHeader>
            <S.VideoEditTextWrapper>
                <S.VideoEditTextArea value={inputText} />
            </S.VideoEditTextWrapper>
            <S.KeywordSelectWrapper>
                <S.VideoEditTitle>키워드 선택</S.VideoEditTitle>
            </S.KeywordSelectWrapper>
            <S.VideoSelectWrapper></S.VideoSelectWrapper>
        </S.VideoEditContainer>
    )
}
