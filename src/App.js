import React from 'react';
import './App.css';
import { TobiHeader } from './components/TobiHeader';
import {TobiBalance} from './components/TobiBalance';
import {TobiIncome} from './components/TobiIncome';
import { TobiHistory } from './components/TobiHistory';
import { TobiAddTran } from './components/TobiAddTran';

import { GlobalProvider } from './context/globalState'

import './App.css';

function App() {
  return (
    <GlobalProvider >
      <TobiHeader /> 
      <div className="TobiContain">
        <TobiBalance/>
        <TobiIncome/>
        <TobiHistory/>
        <TobiAddTran/>
        </div>
      </GlobalProvider>
  );
}

export default App;
