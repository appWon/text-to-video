import { useDispatch, useSelector } from 'react-redux'

import { ttvSelector } from '../store/selector'
import { updateInputText } from '../store/ttv'

export const useTTVtextData = () => {
    const dispatch = useDispatch()
    const { inputText } = useSelector(ttvSelector)

    function setInputText(loginData: string) {
        dispatch(updateInputText(loginData))
    }

    return { inputText, setInputText }
}
