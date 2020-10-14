import React from 'react';
import './CardPequeno.css'

function CardPequeno(props) {
    return (
        <div className="smallcard-container">
           
            <img src={ props.imagem } />
            <h4>{ props.email }</h4>
            <h4>{ props.endereco }</h4>
            <p>{ props.textoEmail }</p>
            <p>{ props.textoEndereco }</p>
            
        </div>
    )
}

export default CardPequeno;