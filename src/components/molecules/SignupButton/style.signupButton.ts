import styled from 'styled-components'

export const SignupButtonContainer = styled.div<{
    url: string
}>`
    position: relative;
    width: 320px;
    height: 200px;
    border: unset;
    border-radius: 8px;
    background-position: center;
    background-size: 320px 200px;
    background-image: ${({ url }) => url && `url(${url})`};
    cursor: pointer;
`
