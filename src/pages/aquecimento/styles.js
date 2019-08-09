import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 650px;
  padding: 20px;

  button {
    height: 44px;
    background: #5aaa29;
    width: 100%;
    max-width: 400px;
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

  img {
    width: 40%;
    height: auto;
    margin: 20px;
  }

  p {
    text-align: center;
    align-items: center;
    justify-content: center;
    font-size: 15px;
    color: #fff;
    padding: 20px;
    text-transform: uppercase;
    background-color: #ff6600;
    border-radius: 5px;
    margin: 10px;
    width: 95%;
  }
`;

export const Placar = styled.ul`
  display: grid;
  max-width: 600px;
  grid-template-columns: repeat(3, 1fr);

  grid-gap: 20px;
  list-style: none;
  margin-bottom: 40px;

  li {
    display: flex;
    flex-direction: column;
    padding: 20px;

    strong {
      font-size: 20px;
      margin-bottom: 10px;
    }

    img {
      width: 85%;
      height: auto;
    }
  }

  strong {
    color: #fff;
  }
`;

export const TimesList = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  img {
    width: 10%;
    height: auto;
    padding: 15px;
    margin-top: 20px;
    margin-bottom: 35px;
  }
`;

export const ButtonSair = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 450px;

  button {
    height: 44px;
    background: #ff6600;
    width: 100%;
    max-width: 400px;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;

    &:hover {
      background: ${darken(0.05, '#FF6600')};
    }
  }
`;
