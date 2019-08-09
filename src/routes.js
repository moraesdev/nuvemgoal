import React from 'react';
import { Switch, Route } from 'react-router-dom';

import bemvindo from './pages/bemvindo/index';
import inicio from './pages/inicio/index';
import aquecimento from './pages/aquecimento/index';
import partida from './pages/partida/index';

export default function Routes() {
  return (
    <Switch>
      <Route path="/" exact component={bemvindo} />
      <Route path="/bemvindo" component={bemvindo} />
      <Route path="/inicio" component={inicio} />
      <Route path="/aquecimento" component={aquecimento} />
      <Route path="/partida" component={partida} />
    </Switch>
  );
}
