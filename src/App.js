import React from 'react'
import './App.css';

//import GlobalContext
import {GlobalProvider} from './Context/GlobalContext'

//import Components
import {Header} from './Component/Header'
import {AccountSummary} from './Component/AccountSummary'
import {Balance} from './Component/Balance'
import {TranscationHistory} from './Component/TranscationHistory'
import AddTranscation from './Component/AddTranscation'



function App() {
  return (

      <GlobalProvider>
      <Header/>
      <Balance/>
      <AccountSummary/>
      <TranscationHistory/>
      <AddTranscation/>
      </GlobalProvider>

  );
}

export default App;
