export interface TTVSate {
    step: number
    inputText: string
}

export const updateTTVstep = (step: number) => ({ type: 'UPDATE_TTV_STEP', step } as const)

export const updateInputText = (text: string) => ({ type: 'UPDATE_INPUT_TEXT', text } as const)

export type TTVAction = ReturnType<typeof updateTTVstep> | ReturnType<typeof updateInputText>
