import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

import '../../node_modules/bootstrap/dist/css/bootstrap.css';

export default createGlobalStyle`
  *{
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline:0;
  }

  html, body, #root {
    height: 100% !important;
  }

  body {
    -webkit-font-smoothing: antialiased !important;
    font-size: 14px;
    font-family: Arial, Helvetica, sans-serif;
  }

  button {
    cursor: pointer;
  }

 a {
   text-decoration: none;
 }

 ul {
   list-style: none;
 }
`;
