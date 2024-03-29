import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom';

import Events from './pages/Events';
import Home from './pages/Home';
import Login from './pages/Login';
import Patients from './pages/Patients';

function Routes() {
  return (
    <BrowserRouter>
      <Route path="/" exact component={Login} />
      <Route path="/home" component={Home} />
      <Route path="/events" component={Events} />
      <Route path="/patients" component={Patients} />
    </BrowserRouter>
  );
}

export default Routes;