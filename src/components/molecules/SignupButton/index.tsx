import React from 'react'

import * as S from './style.signupButton'

interface SignupButtonProps {
    url: string
}

export const SignupButton: React.FC<SignupButtonProps> = props => {
    const { url, children } = props

    return <S.SignupButtonContainer url={url}>{children}</S.SignupButtonContainer>
}
