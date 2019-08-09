import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 750px;

  h4 {
    color: #fff;
  }

  img {
    width: 35%;
    height: auto;
    margin: 0 0 30px;
  }

  > button {
    width: 100%;
    max-width: 450px;
    margin: 10px 0 0;
    height: 44px;
    background: #5aaa29;
    font-weight: bold;
    color: #fff;
    border: 0;
    border-radius: 4px;
    font-size: 16px;
    transition: background 0.2s;

    &:hover {
      background: ${darken(0.1, '#5AAA29')};
    }
  }
`;

export const TimeHeader = styled.div`
  background-color: #ff6600;
  display: grid;
  list-style: none;
  width: 80%;
  padding-left: 13%;
  grid-gap: 20px;
  margin: 0 0 5px;
  border-radius: 5px;
  align-items: center;
  justify-content: center;

  li {
    display: flex;
    flex-direction: row;

    > span {
      color: #fff;
      padding: 20px;
    }
  }
`;

export const ContainerList = styled.div`
  height: 65px;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
`;

export const ImgList = styled.div`
  width: 10%;
  height: 100%;
  margin-top: 5px;
  float: left;
  align-items: center;
  justify-content: center;

  img {
    width: 100%;
    height: auto;
    padding: -5px;
    margin: -8px;
    border-radius: 50%;
  }
`;

export const Content = styled.div`
  display: flex;
  padding: 20px;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 4px;
  min-width: 600px;
  justify-content: center;
  align-items: center;

  table {
    color: #fff;

    thead {
      background-color: #ff6600;
    }
  }
`;

export const TimesList = styled.ul`
  display: grid;
  list-style: none;
  float: right;
  width: 90%;
  grid-gap: 15px;
  margin: 0 0 5px;
  border-radius: 5px;
  background: rgba(255, 255, 255, 0.1);
  justify-content: center;
  align-items: center;

  &:hover {
    background: ${darken(0.4, '#ff6600')};
  }

  li {
    display: flex;
    flex-direction: row;

    span {
      color: #fff;
      padding: 30px;
    }
  }
`;
