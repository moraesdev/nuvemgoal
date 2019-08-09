export function iniciarPartida(timeCasa, timeVisitante) {
  return {
    type: '@partida/INICIAR_PARTIDA',
    payload: { timeCasa, timeVisitante },
  };
}

export function lancarGol(
  golsCasa,
  golsVisitante,
  placarCasa,
  placarVisitante
) {
  return {
    type: '@partida/LANCAR_GOL',
    payload: { golsCasa, golsVisitante, placarCasa, placarVisitante },
  };
}

export function zerarPartida() {
  return {
    type: '@partida/ZERAR_PARTIDA',
  };
}
