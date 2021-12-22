export interface SigninState {
    loginData: LoginData
}

export interface LoginData {
    id: string
    password: string
}

export const updateSigninData = (signinData: LoginData) =>
    ({ type: 'UPDATE_SIGN_DATA', signinData } as const)

export type signinAction = ReturnType<typeof updateSigninData>
