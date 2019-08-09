import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Button } from 'react-bootstrap';
import { signOut } from '../../store/modules/auth/actions';
import logo from '../../assets/images/NuvemGoalSmall.png';
import { Container, Content } from './styles';

export default function Header() {
  const { nome } = useSelector(state => state.auth);
  const dispatch = useDispatch();

  function HandleSignOut() {
    dispatch(signOut());
  }

  return (
    <Container>
      <Content>
        <nav>
          <img src={logo} alt="NuvemGoal" />
          <span>
            Seja bem vindo! <strong>{nome}</strong>
          </span>
        </nav>
        <aside>
          <Button variant="danger" onClick={HandleSignOut}>
            Sair
          </Button>
        </aside>
      </Content>
    </Container>
  );
}
