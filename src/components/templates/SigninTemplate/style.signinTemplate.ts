import styled from 'styled-components'
import { Button } from '../../atoms/Button'

export const SigninTemplateContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100vw;
    height: 100vh;
`

export const AuthWapper = styled.div`
    position: relative;
    width: 440px;
    height: 620px;
    overflow: hidden;
    border-radius: 8px;
    background-color: #111111e6;
`

export const LoginWapper = styled.section<{ isStep: number }>`
    display: ${({ isStep }) => (isStep === 1 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
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

export const SignupSelectWapper = styled.section<{ isStep: number }>`
    display: ${({ isStep }) => (isStep === 2 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const SignupSelectHeader = styled.div`
    display: flex;
    align-items: center;
    margin-bottom: 40px;
    width: 100%;
    max-width: 320px;
`

export const SignupSelectTitle = styled.h1`
    font-size: 2rem;
    color: #fff;
`

export const SignupSelectRecommend = styled.span`
    color: #aaa;
    font-size: 0.8rem;
    margin-left: auto;
`

export const PrevIcon = styled.div`
    width: 28px;
    height: 100%;
    margin-right: 10px;
    background-size: 28px 28px;
    background-image: url('https://ttv.waynehills.co/assets/i_back_w.png');
    cursor: pointer;
`

export const PersonalSignupWapper = styled.section<{ isStep: number }>`
    display: ${({ isStep }) => (isStep === 3 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const PersonalRecommend = styled.span`
    color: #fff;
    font-size: 1rem;
    margin-left: auto;
`

export const PersonalDetailWapper = styled.section<{ isStep: number }>`
    display: ${({ isStep }) => (isStep === 4 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const completedSignupWapper = styled.section<{ isStep: number }>`
    display: ${({ isStep }) => (isStep === 5 ? 'flex' : 'none')};
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 100%;
`

export const SigninLogo = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_logo_w_nomal.png',
})`
    position: absolute;
    top: 0;
    left: 0;
    margin: 50px;
    width: 220px;
    height: 100px;
`
