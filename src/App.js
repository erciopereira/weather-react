import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import { Template } from './components/MainComponents';

import Routes from './Routes';
import Header from './components/partials/Header'

function App() {
  return (
    <BrowserRouter>
      <Template>
        <Header />
        <Routes />
      </Template>
    </BrowserRouter>
  );
}

export default App;
