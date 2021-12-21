import { createGlobalStyle } from 'styled-components'
import { reset } from 'styled-reset'

export const GlobalStyle = createGlobalStyle`
    @import url(//spoqa.github.io/spoqa-han-sans/css/SpoqaHanSansNeo.css);
    ${reset};
    
    * {
        box-sizing: border-box;
    }

    body {
        font-family: 'Spoqa Han Sans Neo', 'sans-serif';
    }
`
