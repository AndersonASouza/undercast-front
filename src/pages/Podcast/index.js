import React from 'react';

import { Link } from 'react-router-dom';

import { FaPlay, FaBackward, FaForward } from 'react-icons/fa';

import Container from './styles';

function Podcast(props) {
  return (
    <Container className="container-fluid mx-auto">
      <div>
        <div className="capa">
          <img
            src="https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/6b/06/fd/6b06fdbd-07b0-032e-7f4d-ea7c40995278/mza_3169076889313867971.jpg/600x600bb.jpg"
            alt="Capa do podcast"
            width="300"
            className="mx-auto d-block shadow-mb"
          />
        </div>
        <div className="container align-middle">
          <h2 className="text-center">Episodio</h2>
          <h3 className="text-center">Nome do podcast</h3>
          <div className="container form-group">
            <input type="range" className="form-control-range" id="formControlRange" />
          </div>

          {/* <audio
            autoPlay
            controls
            src="https://nerdcast.jovemnerd.com.br/nerdcast_speak_english_27.mp3"
          /> */}
        </div>

        <div className="container">
          <div className="row mt-4 justify-content-md-center align-items-center">
            <FaBackward className="btn mr-4 ml-4" size={60} />
            <FaPlay className="btn" size={80} />
            <FaForward className="btn mr-4 ml-4" size={60} />
          </div>
        </div>

        <div className="container mx-auto">
          <p>
            Neste podcast: Nesse programa falamos sobre vida e obra de um dos maiores músicos
            brasileiros que já existiu, Tim Maia ARTE DA VITRINE: Junior Lima EPIC GAMES A EPIC
            GAMES STORE está distribuindo um jogo grátis todas as semanas por 4 semanas Acesse:
            https://bit.ly/2XjSTq1 MUSICDOT! Desconto de 10% na Musicdot: https://bit.ly/3cQFooh
            Acampamento de Canto da MusicDot: https://bit.ly/3e5R9Hr WISE UP ONLINE! A plataforma
            pra você estudar inglês quando e onde quiser. Link:
            https://wiseuponline.com.br/jovemnerd WISE UP Aprenda inglês mais rápido. Acesse:
            http://www.wiseup.com/ SPEAK ENGLISH NerdCast extra toda terceira sexta do mês! NerdCast
            Speak English 27 - Inglês como portal de conhecimento E-MAILS Mande suas críticas,
            elogios, sugestões e caneladas para nerdcast@jovemnerd.com.br EDIÇÃO COMPLETA POR
            RADIOFOBIA PODCAST E MULTIMÍDIA http://radiofobia.com.br PEDIDO DE DOAÇÃO Pedido de
            doação de sangue para Leticia Rodrigues de Andrade no Hospital das Clínicas SP. LEITURA
            DE EMAILS: LIVE - Nerdcast 725 https://youtu.be/kg1lBqr48r8
          </p>
        </div>
      </div>
    </Container>
  );
}

export default Podcast;
