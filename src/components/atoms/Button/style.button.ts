import styled, { css } from 'styled-components'

export const ButtonContainer = styled.button<{
    color?: string
    background?: string
    disabled?: boolean
}>`
    width: 100%;
    height: 50px;
    max-width: 320px;
    font-size: 1rem;
    border: none;
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
