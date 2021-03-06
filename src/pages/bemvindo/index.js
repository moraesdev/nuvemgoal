import React from 'react';
import { useDispatch } from 'react-redux';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

import { signInSucess } from '../../store/modules/auth/actions';

import HomeLayout from '../_layouts/home/index';
import logo from '../../assets/images/NuvemGoalTexto.png';

const schema = Yup.object().shape({
  nome: Yup.string().required('Favor informar o seu nome'),
});

const times = [
  {
    id: 1,
    nome: 'Alemanha',
    logo: 'timeA',
    jogadores: [
      { nome: 'Manuel Neuer' },
      { nome: 'Kevin Trapp' },
      { nome: 'Ter Stegen' },
      { nome: 'Plattenhardt' },
      { nome: 'Jonas Hector' },
      { nome: 'Filipe Luis' },
      { nome: 'Matthias Ginter' },
      { nome: 'Mats Hummels' },
      { nome: 'Niklas Sule' },
      { nome: 'Antonio Rudiger' },
      { nome: 'Boateng' },
      { nome: 'Kimmich' },
      { nome: 'Khedira' },
      { nome: 'Draxler' },
      { nome: 'Gundogan' },
      { nome: 'Rudy' },
      { nome: 'Goretzka' },
      { nome: 'Kroos' },
      { nome: 'Julian Brandt' },
      { nome: 'Mario Gomez' },
      { nome: 'Marco Reus' },
      { nome: 'Muller' },
      { nome: 'Werner' },
    ],
    pontos: 0,
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 2,
    nome: 'Argentina',
    logo: 'timeB',
    pontos: 0,
    jogadores: [
      { nome: 'Renzo Saravia' },
      { nome: 'Nicolás Otamendi' },
      { nome: 'Juan Foyth' },
      { nome: 'Germán Pezzella' },
      { nome: 'Ramiro Funes Mori' },
      { nome: 'Nicolás Tagliafico' },
      { nome: 'Marcos Acuña' },
      { nome: 'Milton Casco' },
      { nome: 'Rodrigo De Paul' },
      { nome: 'Leandro Paredes' },
      { nome: 'Roberto Pereyra' },
      { nome: 'Giovani Lo Celso' },
      { nome: 'Ángel Di María' },
      { nome: 'Guido Rodríguez' },
      { nome: 'Exequiel Palacios' },
      { nome: 'Lionel Messi' },
      { nome: 'Sergio Agüero' },
      { nome: 'Paulo Dybala' },
      { nome: 'Matías Suárez' },
      { nome: 'Lautaro Martínez ' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 3,
    nome: 'Brasil',
    logo: 'timeC',
    jogadores: [
      { nome: 'Alisson' },
      { nome: 'Ederson' },
      { nome: 'Cassio' },
      { nome: 'Dani Alves' },
      { nome: 'Fagner' },
      { nome: 'Filipe Luis' },
      { nome: 'AlexSandro' },
      { nome: 'Thiago Silva' },
      { nome: 'Marquinhos' },
      { nome: 'Miranda' },
      { nome: 'Eder Militao' },
      { nome: 'Casemiro' },
      { nome: 'Fernandinho' },
      { nome: 'Allan' },
      { nome: 'Lucas Paqueta' },
      { nome: 'Philippe Coutinho' },
      { nome: 'Arthur' },
      { nome: 'Neymar' },
      { nome: 'Richarlison' },
      { nome: 'Roberto Firmino' },
      { nome: 'Gabriel Jesus' },
      { nome: 'David Neres' },
      { nome: 'Everton' },
    ],
    pontos: 0,
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 4,
    nome: 'Coreia',
    logo: 'timeD',
    pontos: 0,
    jogadores: [
      { nome: 'Kim Seung-gyu' },
      { nome: 'Kim Jin-hyeon' },
      { nome: 'Cho Hyun-woo' },
      { nome: 'Kim young-gwon' },
      { nome: 'Jang Hyun-soo' },
      { nome: 'Jung Seung-hyun' },
      { nome: 'Yun Yong-sun' },
      { nome: 'Oh Ban-suk' },
      { nome: 'Kim Min-woo' },
      { nome: 'Park Joo-ho' },
      { nome: 'Hong Chul' },
      { nome: 'Go Yo-han' },
      { nome: 'Lee Yong' },
      { nome: 'Ki Sung-yueng' },
      { nome: 'Jung Woo-young' },
      { nome: 'Ju Se-jong' },
      { nome: 'Koo Ja-cheol' },
      { nome: 'Lee Jae-sung' },
      { nome: 'Lee Seung-woo' },
      { nome: 'Moon Seon-min' },
      { nome: 'Kim Shin-wook' },
      { nome: 'Son Heung-min' },
      { nome: 'Hwang Hee-chan' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 5,
    nome: 'Japao',
    logo: 'timeE',
    pontos: 0,
    jogadores: [
      { nome: 'Kim Seung-gyu' },
      { nome: 'Kim Jin-hyeon' },
      { nome: 'Cho Hyun-woo' },
      { nome: 'Kim young-gwon' },
      { nome: 'Jang Hyun-soo' },
      { nome: 'Jung Seung-hyun' },
      { nome: 'Yun Yong-sun' },
      { nome: 'Oh Ban-suk' },
      { nome: 'Kim Min-woo' },
      { nome: 'Park Joo-ho' },
      { nome: 'Hong Chul' },
      { nome: 'Go Yo-han' },
      { nome: 'Lee Yong' },
      { nome: 'Ki Sung-yueng' },
      { nome: 'Jung Woo-young' },
      { nome: 'Ju Se-jong' },
      { nome: 'Koo Ja-cheol' },
      { nome: 'Lee Jae-sung' },
      { nome: 'Lee Seung-woo' },
      { nome: 'Moon Seon-min' },
      { nome: 'Kim Shin-wook' },
      { nome: 'Son Heung-min' },
      { nome: 'Hwang Hee-chan' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 6,
    nome: 'Estados unidos',
    logo: 'timeF',
    pontos: 0,
    jogadores: [
      { nome: 'Zack Steffen' },
      { nome: 'Nick Rimando' },
      { nome: 'Tim Howard' },
      { nome: 'John Brooks' },
      { nome: 'DaMarcus Beasley' },
      { nome: 'Omar Gonzalez' },
      { nome: 'Michael Orozco' },
      { nome: 'Alejandro Bedoya' },
      { nome: 'Michael Bradley' },
      { nome: 'Jermaine Jones' },
      { nome: 'Darlington Nagbe' },
      { nome: 'Christian Pulisic' },
      { nome: 'Jozy Altidore' },
      { nome: 'Clint Dempsey' },
      { nome: 'Jordan Morris' },
      { nome: 'Bobby Wood' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 7,
    nome: 'Dinamarca',
    logo: 'timeG',
    pontos: 0,
    jogadores: [
      { nome: 'Kasper Schmeichel' },
      { nome: 'Jonas Lossl' },
      { nome: 'Frederik Ronow' },
      { nome: 'Andreas Christensen' },
      { nome: 'Simon Kjaer' },
      { nome: 'Jens Stryger' },
      { nome: 'Jonas Knudsen' },
      { nome: 'Christian Eriksen' },
      { nome: 'Lasse Schone' },
      { nome: 'Lukas Lerager' },
      { nome: 'Michael Krohn-Dehli' },
      { nome: 'William Kvis' },
      { nome: 'Thomas Delaney' },
      { nome: 'Yussuf Poulsen' },
      { nome: 'Viktor Fischer' },
      { nome: 'Andreas Cornelius' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 8,
    nome: 'Belgica',
    logo: 'timeG',
    pontos: 0,
    jogadores: [
      { nome: 'Kasper Schmeichel' },
      { nome: 'Jonas Lossl' },
      { nome: 'Frederik Ronow' },
      { nome: 'Andreas Christensen' },
      { nome: 'Simon Kjaer' },
      { nome: 'Jens Stryger' },
      { nome: 'Jonas Knudsen' },
      { nome: 'Christian Eriksen' },
      { nome: 'Lasse Schone' },
      { nome: 'Lukas Lerager' },
      { nome: 'Michael Krohn-Dehli' },
      { nome: 'William Kvis' },
      { nome: 'Thomas Delaney' },
      { nome: 'Yussuf Poulsen' },
      { nome: 'Viktor Fischer' },
      { nome: 'Andreas Cornelius' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 9,
    nome: 'Rússia',
    logo: 'timeG',
    pontos: 0,
    jogadores: [
      { nome: 'Kasper Schmeichel' },
      { nome: 'Jonas Lossl' },
      { nome: 'Frederik Ronow' },
      { nome: 'Andreas Christensen' },
      { nome: 'Simon Kjaer' },
      { nome: 'Jens Stryger' },
      { nome: 'Jonas Knudsen' },
      { nome: 'Christian Eriksen' },
      { nome: 'Lasse Schone' },
      { nome: 'Lukas Lerager' },
      { nome: 'Michael Krohn-Dehli' },
      { nome: 'William Kvis' },
      { nome: 'Thomas Delaney' },
      { nome: 'Yussuf Poulsen' },
      { nome: 'Viktor Fischer' },
      { nome: 'Andreas Cornelius' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
  {
    id: 10,
    nome: 'Itália',
    logo: 'timeG',
    pontos: 0,
    jogadores: [
      { nome: 'Kasper Schmeichel' },
      { nome: 'Jonas Lossl' },
      { nome: 'Frederik Ronow' },
      { nome: 'Andreas Christensen' },
      { nome: 'Simon Kjaer' },
      { nome: 'Jens Stryger' },
      { nome: 'Jonas Knudsen' },
      { nome: 'Christian Eriksen' },
      { nome: 'Lasse Schone' },
      { nome: 'Lukas Lerager' },
      { nome: 'Michael Krohn-Dehli' },
      { nome: 'William Kvis' },
      { nome: 'Thomas Delaney' },
      { nome: 'Yussuf Poulsen' },
      { nome: 'Viktor Fischer' },
      { nome: 'Andreas Cornelius' },
    ],
    gols: 0,
    vitorias: 0,
    derrotas: 0,
    empates: 0,
    criterio: '|0000000000000000',
  },
];

export default function BemVindo() {
  const dispatch = useDispatch();

  function handleSubmit({ nome }) {
    localStorage.setItem('@NuvemGoal:times', JSON.stringify(times));

    dispatch(signInSucess(nome));
  }

  return (
    <HomeLayout>
      <Form schema={schema} onSubmit={handleSubmit}>
        <img src={logo} alt="NuvemGoal" />
        <Input name="nome" placeholder="Digite aqui o seu nome" />
        <button type="submit">Vamos lá</button>
      </Form>
    </HomeLayout>
  );
}
