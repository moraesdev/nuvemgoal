/* eslint-disable prefer-const */
import React, { useState } from 'react';
import Select from 'react-select';
import swal from 'sweetalert';
import pt from 'date-fns/locale/pt';
import { FaFutbol } from 'react-icons/fa';
import { format } from 'date-fns';
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-toastify';

import { Modal, Button, Container, Row, Col } from 'react-bootstrap';
import { lancarGol, zerarPartida } from '../../store/modules/partida/actions';
import GeralLayout from '../_layouts/geral';

import campo from '../../assets/images/jogo.png';

import { ContainerStyle, Content, ButtonFinalizar } from './styles';

export default function Partida() {
  const Layout = GeralLayout;
  const [show, setShow] = useState(false);
  const localTimes = JSON.parse(localStorage.getItem('@NuvemGoal:times'));
  const dispatch = useDispatch();

  let {
    golsCasa,
    golsVisitante,
    timeCasa,
    timeVisitante,
    placarCasa,
    placarVisitante,
  } = useSelector(state => state.partida);

  const buscaCasa = localTimes.filter(idTime => {
    return idTime.id === timeCasa;
  });
  const buscaVisita = localTimes.filter(idTime => {
    return idTime.id === timeVisitante;
  });

  const selectTimes = [];
  selectTimes.push(buscaCasa);
  selectTimes.push(buscaVisita);

  const listaTimes = [];
  // eslint-disable-next-line array-callback-return
  selectTimes.map(time => {
    time.map(dados => {
      listaTimes.push({
        value: dados.id,
        label: dados.nome,
      });
      return listaTimes;
    });
  });

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const horaJogo = format(new Date(), `HH:mm`, { locale: pt });
  const horaGol = format(new Date(), `HH:mm:ss`, { locale: pt });

  function NomeTime(busca) {
    let texto = null;
    localTimes.map(dados => {
      if (dados.id === busca) {
        texto = dados.nome;
        return texto;
      }
      return texto;
    });
    return texto;
  }

  const NomeCasa = NomeTime(timeCasa);
  const NomeVisita = NomeTime(timeVisitante);

  let timeGoal = null;
  const listaJogadores = [];
  function setaTime({ value }) {
    timeGoal = value;

    selectTimes.map(time => {
      // eslint-disable-next-line array-callback-return
      time.map(dados => {
        if (dados.id === timeGoal) {
          // eslint-disable-next-line array-callback-return
          listaJogadores.length = 0;
          // eslint-disable-next-line array-callback-return
          dados.jogadores.map(jogadores => {
            listaJogadores.push({
              value: jogadores.nome,
              label: jogadores.nome,
            });
          });
        }
      });
      return 0;
    });
  }

  let jogadorGoal = null;
  function setaJogador({ value }) {
    jogadorGoal = value;
  }

  const SelectTime = () => (
    <Select
      value={listaTimes.value}
      defaultValue={{ value: 0, label: 'Selecione o time' }}
      onChange={setaTime}
      options={listaTimes}
    />
  );

  const SelectJogadores = () => (
    <Select
      value={listaJogadores.value}
      defaultValue={{ value: 0, label: 'Selecione o jogador' }}
      onChange={setaJogador}
      options={listaJogadores}
    />
  );

  function lancarGoals() {
    if (timeGoal != null && jogadorGoal != null) {
      if (timeGoal === timeCasa) {
        golsCasa.push({ horario: horaGol, jogador: jogadorGoal });
        placarCasa += 1;
      } else {
        golsVisitante.push({ horario: horaGol, jogador: jogadorGoal });
        placarVisitante += 1;
      }

      dispatch(lancarGol(golsCasa, golsVisitante, placarCasa, placarVisitante));

      setShow(false);

      swal({
        title: 'GOooooOOooooOOoooL !!',
        text: 'Olha o que ele fez... !!!',
        icon: 'success',
        button: 'Retornar a partida',
      });
    } else {
      toast.error('Favor informar o time e o jogador que fizeram o gol!');
    }
  }

  function goFinalizar() {
    // eslint-disable-next-line array-callback-return
    localTimes.filter(idTime => {
      if (idTime.id === timeCasa) {
        // eslint-disable-next-line no-param-reassign
        idTime.gols += placarCasa;

        // eslint-disable-next-line no-param-reassig

        if (placarCasa > placarVisitante) {
          // eslint-disable-next-line no-param-reassign
          idTime.pontos += 3;
          // eslint-disable-next-line no-param-reassign
          idTime.vitorias += 1;
        }
        // eslint-disable-next-line no-cond-assign
        if (placarCasa === placarVisitante) {
          // eslint-disable-next-line no-param-reassign
          idTime.pontos += 1;
          // eslint-disable-next-line no-param-reassign
          idTime.empates += 1;
        }
        if (placarCasa < placarVisitante) {
          // eslint-disable-next-line no-param-reassign
          idTime.derrotas += 1;
        }

        // eslint-disable-next-line no-param-reassign
        idTime.criterio = `|${idTime.vitorias
          .toString()
          .padStart(4, '0')}${idTime.gols
          .toString()
          .padStart(4, '0')}${idTime.empates
          .toString()
          .padStart(4, '0')}${idTime.derrotas.toString().padStart(4, '0')}`;
      }

      if (idTime.id === timeVisitante) {
        // eslint-disable-next-line no-param-reassign
        idTime.gols += placarVisitante;

        if (placarVisitante > placarCasa) {
          // eslint-disable-next-line no-param-reassign
          idTime.pontos += 3;
          // eslint-disable-next-line no-param-reassign
          idTime.vitorias += 1;
        }
        // eslint-disable-next-line no-cond-assign
        if (placarVisitante === placarCasa) {
          // eslint-disable-next-line no-param-reassign
          idTime.pontos += 1;
          // eslint-disable-next-line no-param-reassign
          idTime.empates += 1;
        }
        if (placarVisitante < placarCasa) {
          // eslint-disable-next-line no-param-reassign
          idTime.derrotas += 1;
        }

        // eslint-disable-next-line no-param-reassign
        idTime.criterio = `|${idTime.vitorias
          .toString()
          .padStart(4, '0')}${idTime.gols
          .toString()
          .padStart(4, '0')}${idTime.empates
          .toString()
          .padStart(4, '0')}${idTime.derrotas.toString().padStart(4, '0')}`;
      }
    });

    toast.success('Partida finalizada com sucesso!');
    dispatch(zerarPartida());

    localStorage.setItem('@NuvemGoal:times', JSON.stringify(localTimes));
    // dispatch(signInSucess(nome, times));
  }

  return (
    <Layout>
      <ContainerStyle>
        <Content>
          <p>
            {NomeCasa} <strong>{placarCasa}</strong> VS{' '}
            <strong>{placarVisitante}</strong> {NomeVisita}
          </p>
          <h6>Horário do jogo: {horaJogo}</h6>
        </Content>
        <img src={campo} alt="Campo" />
        <Container>
          <Row className="justify-content-md-center">
            <Col className="col-sm">
              <ul>
                {golsCasa.length > 0 &&
                  golsCasa.map(dados => (
                    <li key={dados.horario}>
                      <span>
                        <FaFutbol />
                        <strong>{dados.horario}</strong> - {dados.jogador}
                      </span>
                    </li>
                  ))}
              </ul>
            </Col>
            <Col className="col-sm">
              <ul>
                {golsVisitante.length > 0 &&
                  golsVisitante.map(dados => (
                    <li key={dados.horario}>
                      <span>
                        <FaFutbol />
                        <strong>{dados.horario}</strong> - {dados.jogador}
                      </span>
                    </li>
                  ))}
              </ul>
            </Col>
          </Row>
        </Container>

        <button type="submit" onClick={handleShow}>
          Lançar gol
        </button>
        <ButtonFinalizar>
          <button type="submit" onClick={goFinalizar}>
            Finalizar partida
          </button>
        </ButtonFinalizar>
        <div>
          <Modal show={show} onHide={handleClose}>
            <Modal.Header className="bg-success" closeButton>
              <Modal.Title>Preparou, apontou, chutou....</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <p> Time: </p> <SelectTime /> <br />
              <p> Jogador: </p> <SelectJogadores />
            </Modal.Body>
            <Modal.Footer>
              <Button variant="success" onClick={lancarGoals}>
                Confirmar
              </Button>
            </Modal.Footer>
          </Modal>
        </div>
      </ContainerStyle>
    </Layout>
  );
}
