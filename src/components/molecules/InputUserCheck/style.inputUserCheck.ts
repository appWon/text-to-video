import styled from 'styled-components'

import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

export const InputUserCheckContainer = styled.div`
    display: flex;
    overflow: hidden;
    border-radius: 8px;
`

export const InputUserId = styled(Input)``

export const CheckUserId = styled(Button)`
    padding: 0 15px;
    width: auto;
    font-size: 0.8rem;
    white-space: nowrap;
`
