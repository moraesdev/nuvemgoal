import React from 'react';
import Select from 'react-select';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux';

import { iniciarPartida } from '../../store/modules/partida/actions';

import GeralLayout from '../_layouts/geral';
import history from '../../services/history';

import bola from '../../assets/images/Bola.png';

import { Placar, Container, Content, ButtonSair } from './styles';

export default function Aquecimento() {
  const dispatch = useDispatch();
  const localTimes = JSON.parse(localStorage.getItem('@NuvemGoal:times'));

  let casa = null;
  let visita = null;

  const listaTimeCasa = [];
  localTimes.map(time => {
    listaTimeCasa.push({
      value: time.id,
      label: time.nome,
    });
    return listaTimeCasa;
  });

  const listaTimeVisita = [];
  localTimes.map(time => {
    listaTimeVisita.push({
      value: time.id,
      label: time.nome,
    });
    return listaTimeVisita;
  });

  function setaCasa({ value }) {
    casa = value;
  }

  function setaVisita({ value }) {
    visita = value;
  }

  const SelectCasa = () => (
    <Select
      value={listaTimeCasa.value}
      defaultValue={{ value: 0, label: 'Selecione' }}
      onChange={setaCasa}
      options={listaTimeCasa}
    />
  );
  const SelectVisitante = () => (
    <Select
      value={listaTimeVisita.value}
      defaultValue={{ value: 0, label: 'Selecione' }}
      onChange={setaVisita}
      options={listaTimeVisita}
    />
  );

  function goPartida() {
    if (casa != null && visita != null) {
      if (casa !== visita) {
        dispatch(iniciarPartida(casa, visita));

        history.push('/partida');
      } else {
        toast.error('Favor selecionar times diferentes!');
      }
    } else {
      toast.error('Favor informar os dois adversários!');
    }
  }

  function goPainel() {
    history.push('/inicio');
  }

  return (
    <GeralLayout>
      <Container>
        <Content>
          <p>Selecione os adversários da partida</p>

          <Placar>
            <li>
              <strong>CASA</strong>
              <SelectCasa />
            </li>
            <li>
              <img src={bola} alt={bola} />
            </li>
            <li>
              <strong>VISITANTE</strong>
              <SelectVisitante />
            </li>
          </Placar>
        </Content>
        <button type="submit" onClick={goPartida}>
          Iniciar partida
        </button>
        <ButtonSair>
          <button type="submit" onClick={goPainel}>
            Painel de classificação
          </button>
        </ButtonSair>
      </Container>
    </GeralLayout>
  );
}
