import { injectGlobal } from 'styled-components';

export default () => injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: #00ad73;
    color: white;
    font-family: 'Montserrat', sans-serif;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 5px;
  }
`;
