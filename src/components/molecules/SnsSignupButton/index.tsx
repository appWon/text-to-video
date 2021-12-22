import React from 'react'

import * as S from './style.snsSignupButton'

interface SnsSignupButtonProps {
    src: string
}

export const SnsSignupButton: React.FC<SnsSignupButtonProps> = props => {
    const { src, children } = props

    return (
        <S.SnsSignupButtonContainer>
            <S.SnsIcon src={src} />
            <S.SnsTitle>{children}</S.SnsTitle>
        </S.SnsSignupButtonContainer>
    )
}
