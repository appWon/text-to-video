import styled from 'styled-components'
import { Button } from '../../atoms/Button'

export const SigninTemplateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const SigninForm = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 440px;
    height: 620px;
    border-radius: 8px;
    background-color: #111111e6;
`

export const SigninHeader = styled.h1`
    margin-bottom: 40px;
    width: 100%;
    max-width: 320px;
    font-size: 2rem;
    color: #fff;
`
export const SignupWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 0;
    width: 100%;
    height: 85px;
    max-width: 320px;
`

export const SignupRecommend = styled.div`
    display: flex;
    justify: center;
    padding: 10px 0;
    color: #aaa;
    font-size: 0.8rem;
`
export const SignupButton = styled(Button)`
    border-radius: 8px;
`
