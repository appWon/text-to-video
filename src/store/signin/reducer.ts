import { SigninState, signinAction } from './types'

const initalSigninState: SigninState = {
    loginData: {
        id: '',
        password: '',
    },
}

export const signinReducer = (state = initalSigninState, action: signinAction): SigninState => {
    switch (action.type) {
        case 'UPDATE_SIGN_DATA':
            return {
                ...state,
                loginData: action.signinData,
            }
        default:
            return state
    }
}
