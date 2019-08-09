import styled from 'styled-components';
import estelar from '../../../assets/images/estelar.svg';
import grama from '../../../assets/images/FundoGrama.svg';

export const Wrapper = styled.div`
  height: 100vh;
  min-height: 1000px;
  background: url(${grama}) center bottom repeat-x, url(${estelar}) repeat-x,
    rgb(11, 10, 13);
`;

export const ContainerLayout = styled.div`
  display: flex;
  flex-direction: column;
  -webkit-box-pack: justify;
  justify-content: center;
  -webkit-box-align: center;
  align-items: center;
  width: 100%;
  padding: 40px 0px;
`;
