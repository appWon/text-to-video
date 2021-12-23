import styled from 'styled-components'

export const VideodownLoadContainer = styled.div`
    padding: 0 30px 30px 30px;
`

export const VideoHeader = styled.div`
    display: flex;
    align-items: center;
    height:50px;
    border-top-right-radius:20px;
    border-top-left-radius:20px;
    background-color: #444;
}
`

export const PreviewWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const VideoTitle = styled.div`
    padding: 0 30px;
    color: #fff;
    font-size: 0.9rem;
`

export const VideoWrapper = styled.div`
    height: 100%;
    max-height: 700px;
    min-height: 500px;
    background-color: #333;
`

export const Video = styled.video`
    height: 100%;
    width: 100%;
`

export const VideoInfoWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const SelectResolutionWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin-bottom: 20px;
`

export const VideoContent = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 100px;
    background-color: #333;
`

const Resolution = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 250px;
    height: 80px;
    color: #fff;
    border-radius: 10px;
`

export const SD = styled(Resolution)`
    background-color: #650aa8;
`

export const HD = styled(Resolution)`
    background-color: #222;
`

export const InfoWrapper = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const InfoTitle = styled.span`
    color: #aaa;
    font-size: 1.2rem;
    padding: 10px 0;
`

export const InfoValue = styled.span`
    color: #fff;
    font-size: 1rem;
`
