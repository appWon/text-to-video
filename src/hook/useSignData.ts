import { useDispatch, useSelector } from 'react-redux'

import { signinSelector } from '../store/selector'
import { updateSigninData, LoginData } from '../store/signin'

export const useSignData = () => {
    const dispatch = useDispatch()
    const { loginData } = useSelector(signinSelector)

    function setLoginData(loginData: LoginData) {
        dispatch(updateSigninData(loginData))
    }

    return { loginData, setLoginData }
}
