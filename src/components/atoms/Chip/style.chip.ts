import styled from 'styled-components'

export const ChipContainer = styled.div<{ checked: boolean }>`
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 8px;
    width: fit-content;
    height: 24px;
    color: #fff;
    font-size: 0.8rem;
    border-radius: 10px;
    background-color: ${({ checked }) => (checked ? '#650aa8' : '#333')};
    cursor: pointer;
`
