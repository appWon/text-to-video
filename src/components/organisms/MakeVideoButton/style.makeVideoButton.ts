import styled from 'styled-components'

export const MakeVideoButtonContainer = styled.div`
    display: flex;
    width: 650px;
    height: 210px;
    border: 2px solid #7450ff;
    border-radius: 16px;
    background-color: #111;
    cursor: pointer;
`

export const MakeVideoImage = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/home/main_illust.png',
})`
    height: 100%;
`

export const MakeVideoContent = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    color: #fff;
`

export const MakeVideoTitle = styled.h1`
    font-size: 2.5rem;
    margin: 10px 0 30px 0;
`

export const MakeVideoNotice = styled.span`
    font-size: 1.2rem;
`
