import React from 'react';
import './Servico.css'

const Servico = ({servico}) => {
    return <div className="servico-container">
        {servico.title}

    </div>
}
 
export default Servico;