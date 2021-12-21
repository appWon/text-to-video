import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button<{
    color?: string
    background?: string
    disabled?: boolean
}>`
    width: 320px;
    height: 50px;
    font-size: 1rem;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    color: ${({ color }) => (color ? color : '#fff')};

    ${({ disabled, background }) =>
        disabled
            ? css`
                  background-color: #767676;
                  cursor: inherit;
              `
            : css`
                  background-color: ${background ? background : '#333'};
              `}
`
