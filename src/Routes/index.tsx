import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { Provider } from 'react-redux'

import { GlobalStyle } from '../styles'
import { Signin } from '../pages/Signin'
import { Home } from '../pages/Home'
import { store } from '../store'

export const Routers = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <GlobalStyle />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="signin" element={<Signin />} />
                </Routes>
            </BrowserRouter>
        </Provider>
    )
}
