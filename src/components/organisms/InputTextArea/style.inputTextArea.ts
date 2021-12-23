import styled from 'styled-components'

export const InputTextAreaContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: 0 30px 30px 30px;
    width: 100%;
    height: 100%;
    overflow: hidden;
`

export const TextArea = styled.textarea`
    width: 100%;
    height: 100%;
    color: #fff;
    font-size: 15px;
    border: unset;
    background-color: #444;
    border-top-right-radius: 20px;
    border-top-left-radius: 20px;
    padding: 30px;
    resize: none;

    &:focus {
        outline: none;
    }
`

export const TextInfoWrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    height: 50px;
    background-color: #333;
    border-bottom-right-radius: 20px;
    border-bottom-left-radius: 20px;
`

export const TextAdvice = styled.span`
    font-size: 1rem;
    color: #fff;
`
