import styled from 'styled-components'

import { Button } from '../../atoms/Button'

export const PersonalSignupContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 460px;
`

export const SnsSignUpWapper = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin: 5px 0;
    }
`

export const SignTitle = styled.span`
    color: #aaa;
    font-size: 0.8rem;
`

export const NomalSignupWapper = styled.div`
    display: flex;
    flex-direction: column;

    & > * {
        margin: 5px 0;
    }
`

export const SignupRecommend = styled.span`
    color: #aaa;
    font-size: 0.8rem;
    line-height: 1rem;
`

export const SignupNextButton = styled(Button)`
    margin-top: auto;
    border-radius: 8px;
    cursor: pointer;
`
