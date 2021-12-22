import styled from 'styled-components'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

export const SigninFormContainer = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    width: 320px;
    height: 220px;
`

export const InputText = styled(Input)`
    border-radius: 8px !important;
`

export const FindPasswordWapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: #767676;
    font-size: 0.8rem;
`
export const FindPasswordLabel = styled.label``
export const FindPasswordButton = styled.span`
    border-bottom: 1px solid #aaa;
`
export const LoginButton = styled(Button)`
    border-radius: 8px;
`
