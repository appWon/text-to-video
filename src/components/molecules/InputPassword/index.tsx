import React from 'react'

import * as S from './style.inputPassword'
import { Input } from '../../atoms/Input'
import { Button } from '../../atoms/Button'

interface InputPasswordProps {
    id?: string
    value: string
    onChange: (arg: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputPassword: React.FC<InputPasswordProps> = props => {
    const { id, value, onChange } = props

    const [isShow, setIsShow] = React.useState(true)

    function handleToogleClick() {
        setIsShow(!isShow)
    }

    return (
        <S.InputPasswordContainer>
            <Input
                id={id}
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
