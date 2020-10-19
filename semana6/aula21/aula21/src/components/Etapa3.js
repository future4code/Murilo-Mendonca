import React from 'react';

function Etapa3() {
  return (
    <div className="Etapa3">
      <h2>ETAPA3 - INFORMAÇÕES GERAIS DE ENSINO</h2>
      <form>
          <label>5. Por que você não terminou o curso de graduação?</label><br />
          <input type="text" value="" /><br />
          <label>6. Você fez algum curso complementar?</label><br />
          <select>
              <option name="cursoTecnico" value="cursoTecnico">Curso técnico</option>
              <option name="cursoIngles" value="cursoIngles">Curso de inglês</option>
              <option name="cursoNaoFez" value="cursoNaoFez">Não fiz curso complementar</option>
          </select>
      </form>
     
    </div>
  );
}

export default Etapa3;