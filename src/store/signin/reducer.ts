import { SigninState, signinAction } from './types'

const initalSigninState: SigninState = {
    loginData: {
        id: '',
        password: '',
    },
    step: 1,
}

export const signinReducer = (state = initalSigninState, action: signinAction): SigninState => {
    switch (action.type) {
        case 'UPDATE_SIGN_DATA':
            return {
                ...state,
                loginData: action.signinData,
            }
        case 'UPDATE_STEP':
            return {
                ...state,
                step: action.step,
            }
        default:
            return state
    }
}
