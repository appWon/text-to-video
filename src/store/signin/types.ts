export interface SigninState {
    loginData: LoginData
    step: number
}

export interface LoginData {
    id: string
    password: string
}

export const updateSigninData = (signinData: LoginData) =>
    ({ type: 'UPDATE_SIGN_DATA', signinData } as const)

export const updateStep = (step: number) => ({ type: 'UPDATE_STEP', step } as const)

export type signinAction = ReturnType<typeof updateSigninData> | ReturnType<typeof updateStep>
