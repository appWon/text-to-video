import { reducerType } from './index'
import { SigninState } from './signin'
import { TTVSate } from './ttv'

export const signinSelector = (state: reducerType): SigninState => state.signin
export const ttvSelector = (state: reducerType): TTVSate => state.ttv
