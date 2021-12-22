import { useDispatch, useSelector } from 'react-redux'

import { signinSelector } from '../store/selector'
import { updateStep } from '../store/signin'

export const useAuthStep = () => {
    const dispatch = useDispatch()
    const { step } = useSelector(signinSelector)

    function setStep(stepNumber: number) {
        dispatch(updateStep(stepNumber))
    }

    return { step, setStep }
}
