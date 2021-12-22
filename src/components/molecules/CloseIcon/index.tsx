import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style.closeIcon'

export const CloseIcon: React.FC = () => {
    const navigate = useNavigate()

    function handleCloseClick() {
        navigate('/')
    }

    return <S.CloseIconContainer onClick={handleCloseClick} />
}
