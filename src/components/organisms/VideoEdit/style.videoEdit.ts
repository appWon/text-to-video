import styled from 'styled-components'

export const VideoEditContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px 20px 30px;
`

export const VideoEditHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    height: 50px;
    background-color: #444;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
`
export const VideoEditTitle = styled.div`
    color: #fff;
    font-size: 0.9rem;
    padding: 0 30px;
`

export const VideoEditTextWrapper = styled.div`
    height: 200px;
`

export const VideoEditTextArea = styled.textarea`
    padding: 20px;
    width: 100%;
    height: 100%;
    color: #fff;
    resize: none;
    border: unset;
    background-color: #333;

    &:focus {
        outline: none;
    }
`

export const KeywordSelectWrapper = styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    background-color: #444;
`

export const VideoSelectWrapper = styled.div`
    display: flex;
    height: 200px;
    background-color: #333;
`

export const AiVideoTimelineWrapper = styled.div`
    margin-bottom: 20px;
`

export const AiVideoTimelinDataWrapper = styled.div`
    display: flex;
    height: 300px;
    background-color: #333;
`
