import styled from 'styled-components'

import { Button } from '../../atoms/Button'
import { Input } from '../../atoms/Input'
import { InputPassword } from '../../molecules/InputPassword'

export const PersonalSignupDetailContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 460px;
`

export const PasswordWapper = styled.div``

export const InputViewPassword = styled(InputPassword)<{ error: boolean }>`
    box-shadow: ${({ error }) => error && `0 0 0 1px #ff5f0a`};
`

export const InputCheckPassword = styled(Input)<{ error: boolean }>`
    border-radius: 8px;
    box-shadow: ${({ error }) => error && `0 0 0 1px #ff5f0a`};
`

export const PasswordRecomment = styled.div<{ error: boolean }>`
    color: #aaa;
    font-size: 0.8rem;
    margin: 10px 0 15px 0;
    color: ${({ error }) => error && `#ff5f0a`};
`

export const MoviePurposeWapper = styled.div`
    padding: 25px 0;
    border-top: 1px solid rgba(170, 170, 170, 0.2);
    border-bottom: 1px solid rgba(170, 170, 170, 0.2);
`

export const WapperHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-bottom: 10px;
`

export const WapperTitle = styled.h2`
    color: #fff;
    font-size: 0.9rem;
`

export const WapperRecommened = styled.span`
    color: #aaa;
    font-size: 0.8rem;
`

export const AgreementWapper = styled.div`
    padding: 25px 0;
`

export const SignupButton = styled(Button)`
    margin-top: auto;
    border-radius: 8px;
`
