import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style.userInfo'

export const UserInfo: React.FC = () => {
    const navigate = useNavigate()
    const userInfoRef = React.useRef<HTMLDivElement>(null)
    const [isOpen, setIsOpen] = React.useState(false)

    function handleOpenClick() {
        setIsOpen(true)
    }

    function handleCloseClick(e: MouseEvent) {
        const target = e.target as HTMLElement

        if (isOpen && !userInfoRef.current?.contains(target as Element)) {
            setIsOpen(false)
        }
    }

    function handleLogoutClick() {
        navigate('/')
    }

    React.useEffect(() => {
        window.addEventListener('mouseup', handleCloseClick)

        return () => window.addEventListener('mouseup', handleCloseClick)
    }, [isOpen])

    return (
        <S.UserInfoContainer onClick={handleOpenClick} ref={userInfoRef}>
            <S.UserImage />
            <S.UserEmail>app235@naver.com</S.UserEmail>
            <S.ArrowDownIcon />
            {isOpen && (
                <S.userInfoActionWrapper onClick={handleLogoutClick}>
                    로그아웃 <S.UserCheckoutIcon />
                </S.userInfoActionWrapper>
            )}
        </S.UserInfoContainer>
    )
}
