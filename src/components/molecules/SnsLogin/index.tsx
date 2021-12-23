import React from 'react'

import * as S from './style.snsLogin'

interface SnsLoginProps {
    value: string
    url: string
    className?: string
    onClick?: () => void
}

export const SnsLogin: React.FC<SnsLoginProps> = props => {
    const { value, url, className, onClick } = props

    return (
        <S.SnsLoginContainer className={className} onClick={onClick}>
            <S.SnsIcon url={url} />
            <S.SnsValue>{value}</S.SnsValue>
        </S.SnsLoginContainer>
    )
}
