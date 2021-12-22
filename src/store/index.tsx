import { combineReducers, createStore } from 'redux'

import { SigninState, signinReducer } from './signin'

export interface reducerType {
    signin: SigninState
}

const reducer = combineReducers({
    signin: signinReducer,
})

export const store = createStore(reducer)
