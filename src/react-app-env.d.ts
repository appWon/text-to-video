/// <reference types="react-scripts" />

declare module 'react-step-progress-bar' {
    interface ProgressBarProps {
        percent: number
        height?: string | number
        stepPositions?: number
        filledBackground?: string
    }

    export const ProgressBar: React.ComponentType<ProgressBarProps>
}
