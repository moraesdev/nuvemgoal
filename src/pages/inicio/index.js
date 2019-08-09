import React from 'react';

import { Table } from 'react-bootstrap';
import history from '../../services/history';

import trofeus from '../../assets/images/Trofeus.png';

import GeralLayout from '../_layouts/geral';
import { Container, Content } from './styles';

export default function Inicio() {
  const Layout = GeralLayout;
  const localTimes = JSON.parse(localStorage.getItem('@NuvemGoal:times'));

  localTimes.sort((a, b) => {
    if (a.criterio < b.criterio) {
      return 1;
    }

    if (a.criterio > b.criterio) {
      return -1;
    }

    return 0;
  });

  function goPartida() {
    history.push('/aquecimento');
  }

  return (
    <Layout>
      <Container>
        <img src={trofeus} alt="Trofeus" />
        <h4>Classificação</h4>
        <Content>
          <Table responsive borderless>
            <thead>
              <tr>
                <th>Nome</th>
                <th>Pontos</th>
                <th>Vitórias</th>
                <th>Derrotas</th>
                <th>Gols</th>
              </tr>
            </thead>
            <tbody>
              {localTimes.map(dados => (
                <tr key={dados.id}>
                  <td>{dados.nome}</td>
                  <td>{dados.pontos}</td>
                  <td>{dados.vitorias}</td>
                  <td>{dados.derrotas}</td>
                  <td>{dados.gols}</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </Content>

        <button type="submit" onClick={goPartida}>
          Iniciar Pré-jogo
        </button>
      </Container>
    </Layout>
  );
}
