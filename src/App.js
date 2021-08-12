import React, { useState } from 'react';
import Servicos from './components/Servicos';
import "./App.css";

const App = () => {
  const [servicos, setServicos] = useState([
    {
      id: '1',
      title: 'IPTV e P2P',
    },
    {
      id: '2',
      title: 'Apostas Esportivas',
    }
  ]);

  return (
    <>
      <div className="container">
        <Servicos servicos={servicos}/>
      </div>
      
    </>
  );
};

export default App;