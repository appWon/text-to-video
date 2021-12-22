import styled from 'styled-components'

import { Button } from '../../atoms/Button'

export const CompletedFormContainer = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 320px;
    height: 460px;
`

export const CompletedText = styled.div`
    color: #fff;
    font-size: 1.2rem;
    text-align: center;
    margin-bottom: 30px;
`

export const CompletedMessage = styled.div`
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
    padding: 3px;
    line-height: 1.3rem;
`

export const CompletedUserId = styled.div`
    color: #fff;
    font-size: 0.9rem;
    text-align: center;
    padding: 3px;
    text-decoration: underline;
`

export const CompletedImage = styled.div`
    position: relative;
    width: 165px;
    height: 165px;
    left: 50%;
    transform: translateX(-50%);
    background-size: 165px 165px;
    background-image: url('https://ttv.waynehills.co/assets/authentication_personal.png');
`

export const CompletedButtonWapper = styled.div`
    display: flex;
    flex-direction: column;
`

export const ResendMail = styled(Button)`
    border-radius: 8px;
    margin-bottom: 20px;
`

export const LoginButton = styled(Button)`
    border-radius: 8px;
`
