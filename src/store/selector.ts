import { reducerType } from './index'
import { SigninState } from './signin'

export const signinSelector = (state: reducerType): SigninState => state.signin
