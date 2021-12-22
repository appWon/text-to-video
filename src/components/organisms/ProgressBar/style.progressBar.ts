import styled from 'styled-components'

export const ProgressBarCotainer = styled.div<{ step: number }>`
    position: absolute;
    display: ${({ step }) => (step > 1 ? 'block' : 'none')};
    width: 100%;
    top: 0;
    left: 0;

    .RSPBprogressBar {
        height: 10px;
        border-radius: unset;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
        background-color: #333;
    }

    .RSPBprogression {
        background-color: #650aa8;
        border-radius: unset;
        border-top-right-radius: 8px;
        border-top-left-radius: 8px;
    }
`
