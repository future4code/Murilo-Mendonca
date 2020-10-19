import React from 'react';

function Etapa1() {
  return (
    <div className="Etapa1">
      <h2>ETAPA 1 - DADOS GERAIS</h2>
        <form>
            <label>1. Qual o seu nome?</label><br />
                <input type="text" value="" /><br />
            <label>2. Qual sua idade?</label><br />
                <input type="text" value="" /><br />
            <label>3. Qual seu e-mail?</label><br />
                <input type="email" value="" /><br />
            <label>4. Qual a sua escolaridade?</label><br />
                <select name="escolaridade">
                    <option value="medio-incompleto">Ensino Médio Incompleto</option>
                    <option value="medio-completo">Ensino Médio Completo</option>
                    <option value="superior-incompleto">Ensino Superior Incompleto</option>
                    <option value="superior-completo">Ensino Superior Completo</option>
                </select>            
        </form>        
    </div>
  );
}

export default Etapa1;