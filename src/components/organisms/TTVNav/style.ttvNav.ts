import styled from 'styled-components'

export const TTVNavContainer = styled.section`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    padding: 15px 0;
    width: 60px;
    height: 100vh;
    background-color: #444;
`

export const NavLogoIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_emblem_m_big.png',
})`
    width: 42px;
    height: 42px;
`

export const ServiceIconWapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 30px;

    & > * {
        margin: 10px 0;
    }
`

export const NavInputTextTabIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_textscript_w.png',
})<{ step: number }>`
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: ${({ step }) => step === 1 && '#222'};
}
`

export const NavEditTabIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_magicwand_w.png',
})<{ step: number }>`
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: ${({ step }) => step === 2 && '#222'};
`

export const NavDownloadTabIcon = styled.img.attrs({
    src: 'https://ttv.waynehills.co/assets/i_download_w.png',
})<{ step: number }>`
    width: 35px;
    height: 35px;
    cursor: pointer;
    background-color: ${({ step }) => step === 3 && '#222'};
`
