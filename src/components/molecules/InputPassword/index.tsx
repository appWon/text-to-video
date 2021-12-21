import React from 'react'

import * as S from './style.inputPassword'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

interface InputPasswordProps {
    value: string
    onChange: (arg: string) => void
}

export const InputPassword: React.FC<InputPasswordProps> = props => {
    const { value, onChange } = props

    const [isShow, setIsShow] = React.useState(true)

    function handleToogleClick() {
        setIsShow(!isShow)
    }

    return (
        <S.InputPasswordContainer>
            <Input
                type={isShow ? 'password' : 'text'}
                value={value}
                placeholder="비밀번호 입력"
                onChange={onChange}
            />
            <S.ButtonWapper>
                <Button onClick={handleToogleClick}>{isShow ? '표시' : '숨기기'}</Button>
            </S.ButtonWapper>
        </S.InputPasswordContainer>
    )
}
