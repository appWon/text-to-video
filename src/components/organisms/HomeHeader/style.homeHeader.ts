import styled from 'styled-components'

export const HomeHeaderContainer = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    top: 0;
    width: 100%;
    height: 100px;
    padding: 0 60px;
`

export const AuthButtonWapper = styled.div`
    display: flex;
    justify-content: center;

    & > * {
        padding: 0 30px;
    }
`

export const LogoWapper = styled.div`
    height: 30px;
`

export const SignupButton = styled.button`
    color: #fff;
    font-size: 1.2rem;
    border: none;
    background-color: unset;
    cursor: pointer;
`

export const LoginButton = styled.button`
    display: flex;
    align-items: center;
    color: #fff;
    padding: 10px 30px;
    font-size: 1.2rem;
    border: unset;
    border-radius: 30px;
    background-color: #7450ff;
    cursor: pointer;
`

export const LoginIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/home/i_profile_w.png',
})`
    width: 27px;
    height: 27px;
`

export const LoginIconTitle = styled.span`
    line-height: 21px;
`
