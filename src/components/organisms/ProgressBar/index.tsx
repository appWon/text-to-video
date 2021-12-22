import React from 'react'
import { ProgressBar as Progress } from 'react-step-progress-bar'
import 'react-step-progress-bar/styles.css'

import * as S from './style.progressBar'

interface ProgressBarProps {
    currentStep: number
}

export const ProgressBar: React.FC<ProgressBarProps> = props => {
    const { currentStep } = props
    const stepPercentage = (currentStep - 1) * 25

    return (
        <S.ProgressBarCotainer step={currentStep}>
            <Progress percent={stepPercentage} />
        </S.ProgressBarCotainer>
    )
}
