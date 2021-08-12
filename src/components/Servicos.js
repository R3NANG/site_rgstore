import React from 'react';
import Servico from './Servico';

const Servicos = ({servicos}) => {
    return (
        <>
            {servicos.map((servico) => (
                <Servico servico={servico}/>
            ))}
        </>
    )
}

export default Servicos;