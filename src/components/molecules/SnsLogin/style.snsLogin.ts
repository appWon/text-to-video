import styled from 'styled-components'

export const SnsLoginContainer = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 320px;
    cursor: pointer;
`

export const SnsIcon = styled.div<{ url: string }>`
    width: 25px;
    height: 25px;
    background-size: 25px 25px;
    background-image: ${({ url }) => url && `url(${url})`};
`
export const SnsValue = styled.div`
    color: #aaa;
    font-size: 0.8rem;
`
