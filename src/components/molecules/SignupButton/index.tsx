import React from 'react'

import * as S from './style.signupButton'

interface SignupButtonProps {
    url: string
    onClick?: () => void
}

export const SignupButton: React.FC<SignupButtonProps> = props => {
    return <S.SignupButtonContainer {...props} />
}
