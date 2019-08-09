import styled from 'styled-components';

export const Container = styled.header`
  background-color: #5aaa29;
  padding: 0 30px;
`;

export const Content = styled.div`
  height: 64px;
  max-width: 900px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    height: 50px;
  }

  nav {
    display: flex;
    align-items: center;

    img {
      margin-right: 20px;
      padding-right: 20px;
    }

    span {
      color: #f2f2f2;
    }
  }

  aside {
    display: flex;
    align-items: center;
    margin-left: 20px;
    padding-left: 20px;
    border-left: 1px solid #fff;
  }
`;
