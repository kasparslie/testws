import React from 'react';
import './App.css';
import simData from './components/data_simpsons'
import Navbar1 from './components/navbar'
import Avatar from './components/avatar'
const Sim = simData.map(e => {return  <Avatar {...e}/> })
function App() {
  return  (
    <div className="App">
      <Navbar1/>
      <Avatar/>
      {Sim}

    


    </div>
  );
}

export default App;

