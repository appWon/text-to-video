import React from 'react'

import * as S from './style.ttvSoundSelect'

export const SoundSelect: React.FC = () => {
    return (
        <S.SoundSelectContainer>
            <S.SoundSelectInfoWrapper>
                <S.SoundSelectTitle>사운드(무드) 선택</S.SoundSelectTitle>
                <S.SoundSelectInfoContent>
                    *버튼을 클릭하여 사운드를 들어볼 수 있습니다.
                </S.SoundSelectInfoContent>
            </S.SoundSelectInfoWrapper>
            <S.SoundSelectDataWrapper></S.SoundSelectDataWrapper>
        </S.SoundSelectContainer>
    )
}
