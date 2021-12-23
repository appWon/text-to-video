import React from 'react'

import * as S from './styled.ttvTemplate'
import { TTVNav } from '../../organisms/TTVNav'
import { TTVHeader } from '../../organisms/TTVHeader'
import { InputTextArea } from '../../organisms/InputTextArea'
import { useTTVstepData } from '../../../hook/useTTVstepData'
import { SoundSelect } from '../../organisms/SoundSelect'
import { VideoEdit } from '../../organisms/VideoEdit'
import { VideodownLoad } from '../../organisms/VideodownLoad'

export const TTVtemplate: React.FC = () => {
    const { step, setStep } = useTTVstepData()

    return (
        <S.TTVtemplateContainer>
            <TTVNav step={step} onChange={setStep} />
            <S.TTVContent>
                {step === 1 && (
                    <>
                        <TTVHeader title="단계 1. 텍스트 입력" />
                        <InputTextArea />
                    </>
                )}
                {step === 2 && (
                    <>
                        <TTVHeader title="단계 2. 영상 편집" />
                        <>
                            <VideoEdit />
                            <SoundSelect />
                        </>
                    </>
                )}
                {step === 3 && (
                    <>
                        <TTVHeader title="단계 3. 영상 다운로드" />
                        <VideodownLoad />
                    </>
                )}
            </S.TTVContent>
        </S.TTVtemplateContainer>
    )
}
