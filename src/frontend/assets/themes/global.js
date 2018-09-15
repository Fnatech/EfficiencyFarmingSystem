import { injectGlobal } from 'styled-components';
import bg from '../images/bg';

export default () => injectGlobal`
  body {
    margin: 0;
    padding: 0;
    background: url('${bg}') no-repeat;
    background-size: 250vw 100vh;
    background-position-x: 25%;
    color: white;
  }

  p, h1, h2, h3, h4, h5, h6 {
    margin: 5px;
  }
`;
