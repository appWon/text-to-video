import { combineReducers, createStore } from 'redux'

import { SigninState, signinReducer } from './signin'
import { TTVSate, ttvReducer } from './ttv'

export interface reducerType {
    signin: SigninState
    ttv: TTVSate
}

const reducer = combineReducers({
    signin: signinReducer,
    ttv: ttvReducer,
})

export const store = createStore(reducer)
