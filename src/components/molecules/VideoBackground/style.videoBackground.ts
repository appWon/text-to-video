import styled from 'styled-components'

export const VideoBackground = styled.video.attrs({
    src: 'https://ttv.waynehills.co/assets/bg.mp4',
    muted: true,
    autoPlay: true,
    loop: true,
})`
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    object-fit: cover;
`
