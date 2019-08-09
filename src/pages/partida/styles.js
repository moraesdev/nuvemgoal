import styled from 'styled-components';
import { darken } from 'polished';

export const ContainerStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  max-width: 800px;

  li {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #5aaa29;
    margin: 10px;

    span {
      color: #fff;

      strong {
        margin: 10px;
      }
    }
  }

  img {
    width: 100%;
    height: auto;
    margin: 20px;
  }

  button {
    height: 44px;
    background: #5aaa29;
    width: 100%;
    max-width: 300px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    margin-top: 10px;

    &:hover {
      background: ${darken(0.05, '#5AAA29')};
    }
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 5px;
  padding: 20px;

  p {
    font-size: 22px;
    text-transform: uppercase;
    color: #fff;
    margin-bottom: 10px;

    strong {
      font-size: 40px;
      margin: 5px;
    }
  }

  h6 {
    color: #fff;
  }
`;

export const ContentGols = styled.div`
  display: flex;
  flex-direction: column;
  width: 800px;
  align-items: center;
  justify-content: center;
  background-color: #ff0000;
`;

export const TabelaGols = styled.ul`
  li {
    display: flex;
    flex-direction: column;
    padding: 12px;
    border-radius: 4px;
    border: 1px solid #5aaa29;

    span {
      color: #fff;
    }
  }
`;

export const ButtonFinalizar = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 300px;

  button {
    height: 44px;
    background: #ff3300;
    width: 100%;
    max-width: 300px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.05, '#ff3300')};
    }
  }
`;
