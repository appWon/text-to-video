import styled from 'styled-components'

export const CheckBoxContainer = styled.label`
    display: flex;
    align-items: center;
    width: 100%;
    max-width: 320px;
    user-select: none;
    cursor: pointer;
`

export const CheckBoxIcon = styled.div<{
    isChecked: boolean
}>`
    width: 20px;
    height: 20px;
    background-size: 20px 20px;
    background-image: ${({ isChecked }) =>
        isChecked
            ? `url(https://ttv.waynehills.co/assets/i_select_small_v.png)`
            : `url('https://ttv.waynehills.co/assets/i_select_small_g.png')`};
`

export const CheckBoxValue = styled.div`
    font-size: 0.8rem;
    padding-left: 8px;
`
