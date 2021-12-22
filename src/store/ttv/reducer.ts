import { TTVSate, TTVAction } from './types'

const initalTTVState: TTVSate = {
    inputText: '',
    step: 1,
}

export const ttvReducer = (state = initalTTVState, action: TTVAction): TTVSate => {
    switch (action.type) {
        case 'UPDATE_TTV_STEP':
            return {
                ...state,
                step: action.step,
            }
        case 'UPDATE_INPUT_TEXT':
            return {
                ...state,
                inputText: action.text,
            }
        default:
            return state
    }
}
