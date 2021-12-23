import { useDispatch, useSelector } from 'react-redux'

import { ttvSelector } from '../store/selector'
import { updateTTVstep } from '../store/ttv'

export const useTTVstepData = () => {
    const dispatch = useDispatch()
    const { step } = useSelector(ttvSelector)

    function setStep(step: number) {
        dispatch(updateTTVstep(step))
    }

    return { step, setStep }
}
