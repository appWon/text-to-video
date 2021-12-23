import styled from 'styled-components'

export const InputContainer = styled.label`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 50px;
    max-width: 320px;
    background-color: #333;
`
export const Input = styled.input`
    padding: 0 13px;
    width: 100%;
    border: none;
    color: white;
    font-size: 1rem;
    background-color: #333;

    &:focus {
        outline: none;
    }
`
