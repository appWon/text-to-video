import styled from 'styled-components'

export const UserInfoContainer = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    padding: 0 50px;
    cursor: pointer;
`

export const UserImage = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_user_personal_v.png',
})`
    margin-right: 10px;
    width: 36px;
    height: 36px;
`

export const UserEmail = styled.div`
    font-size: 1rem;
    color: #fff;
`

export const ArrowDownIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/ttv/i-down-arrow-white.png',
})`
    width: 20px;
    height: 20px;
    color: white;
    margin: 0 5px;
`

export const userInfoActionWrapper = styled.div`
    position: absolute;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 15px;
    bottom: -100%;
    width: 100%;
    z-index: 10;
    font-size: 1rem;
    color: #aaa;
    border-radius: 8px;
    background-color: #333;
    transform: translateY(20px);
`

export const UserCheckoutIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/ttv/i-log-out-g.png',
})`
    width: 25px;
    height: 25px;
`
