import React, { useState } from 'react'
import './App.css';
import List from './components/List';
import data from './data';

function App() {
  const [comment, setComment] = useState(data)
  return (
    <div className="App">
      <h1>Commentaire des clients</h1>
      <div className="flex">
        <List comment={comment}/>
      </div>
      <div className="button">
        <button onClick = {()=> setComment([])}>BOUTTON</button>
      </div>
    </div>
  );
}

export default App;
