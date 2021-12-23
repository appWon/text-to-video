import React from 'react'
import { useNavigate } from 'react-router-dom'

import * as S from './style.makeVideoButton'

export const MakeVideoButton: React.FC = () => {
    const navigate = useNavigate()

    function handleRouteClick() {
        navigate('/ttv')
    }

    return (
        <S.MakeVideoButtonContainer onClick={handleRouteClick}>
            <S.MakeVideoImage />
            <S.MakeVideoContent>
                <S.MakeVideoNotice>텍스트로 만드는 A.I 영상</S.MakeVideoNotice>
                <S.MakeVideoTitle>A.I 영상 만들기</S.MakeVideoTitle>
                <S.MakeVideoNotice>*영상을 다운받으려면 로그인 후 이용하세요.</S.MakeVideoNotice>
            </S.MakeVideoContent>
        </S.MakeVideoButtonContainer>
    )
}
