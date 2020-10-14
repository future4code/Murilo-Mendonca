import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import CardPequeno from './components/CardPequeno/CardPequeno';
import ImagemButton from './components/ImagemButton/ImagemButton';


function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem="https://scontent.fumu1-1.fna.fbcdn.net/v/t1.0-9/72791340_2901754866520040_3813825238228008960_n.jpg?_nc_cat=102&_nc_sid=09cbfe&_nc_ohc=jLS_E9df6tEAX_KazXC&_nc_ht=scontent.fumu1-1.fna&oh=93ddf46637348a493c57fa4c5499063d&oe=5FACD825" 
          nome="Murilo" 
          descricao="Oi, eu sou o Murilo Mendonca, 31 anos e aspirante a desenvolvedor web. Já trabalhei como editor de fotos e vídeos, 
          também como cinegrafista de estúdio e como pizzaiolo."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </div>

      <div className="page-section-container">
        <h2>Contato</h2>
        <CardPequeno
          imagem="https://www.flaticon.com/svg/static/icons/svg/95/95645.svg"
          email="E-mail: "
          textoEmail="emaildomurilo@mandamensagem.com"          
        /> 
        
        <CardPequeno 
          imagem="https://www.flaticon.com/svg/static/icons/svg/1239/1239525.svg"
          endereco="Endereço: "
          textoEndereco="Via Marina Grande, 80076 Capri NA, Itália"
        /> 
      </div>


      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://imagens.canaltech.com.br/empresas/4418.400.jpg" 
          nome="NASA" 
          descricao="Apontando defeitos." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
