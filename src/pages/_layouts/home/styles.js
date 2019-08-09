import styled from 'styled-components';
import { darken } from 'polished';
import fundoCampo from '../../../assets/images/FundoCampoNovo.svg';
import estelar from '../../../assets/images/estelar.svg';

export const Wrapper = styled.div`
  display: flex;
  height: 100vh;
`;

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  background: url(${fundoCampo}) center bottom repeat-x,
    url(${estelar}) repeat-x, rgb(11, 10, 13);
  padding: 40px 0px;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 450px;
  text-align: center;
  padding: 5px;

  form {
    display: flex;
    flex-direction: column;
    margin-top: 20px;
    margin-bottom: 20px;

    img {
      width: 100%;
      height: auto;
      margin-bottom: 20px;
    }

    span {
      color: #ff3333;
      margin-bottom: 10px;
    }

    button {
      height: 44px;
      background: #5aaa29;
      font-weight: bold;
      color: #fff;
      border: 0;
      border-radius: 4px;
      font-size: 16px;

      &:hover {
        background: ${darken(0.05, '#5AAA29')};
      }
    }

    input {
      background: rgba(160, 189, 99, 0.2);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;
      margin: 0 0 10px;
      font-size: 14px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }
  }
`;
