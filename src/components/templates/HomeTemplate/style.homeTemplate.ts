import styled from 'styled-components'

export const HomeTemplateContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: space-around;
    align-items: center;
    height: 100vh;
`

export const VideoBackground = styled.video.attrs({
    src: 'https://ttv.waynehills.co/assets/bg.mp4',
    muted: true,
    autoPlay: true,
    loop: true,
})`
    position: fixed;
    top: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`
export const MainLogoWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;
`

export const MainLogo = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/home/logo_main.png',
})`
    width: 550px;
`

export const MainRecommented = styled.span`
    display: flex;
    align-items: center;
    margin-top: 20px;
    color: #fff;
    font-size: 1.3rem;
`

export const MainRecommentedIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/image/home/i_play_w_b.png',
})`
    width: 30px;
    height: 30px;
    margin-left: 20px;
`
