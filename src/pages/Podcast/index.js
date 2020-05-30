import React from 'react';

import {
  FaPlay,
  FaStepBackward,
  FaStepForward,
  FaVolumeUp,
  // FaVolumeMute,
  FaDownload,
  FaRedoAlt,
  FaUndoAlt,
} from 'react-icons/fa';

import Container from './styles';

function Podcast() {
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
        <div className="mx-auto">
          <button type="button" className="btn btn-outline-dark">
            <FaPlay style={{ margin: '0px', padding: '0px' }} />
          </button>
          <button type="button" className="btn btn-outline-dark">
            <FaDownload style={{ margin: '0px', padding: '0px' }} />
          </button>
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
      <div className="container-fluid">
        {/* <audio
            autoPlay
            controls
            src="https://nerdcast.jovemnerd.com.br/nerdcast_speak_english_27.mp3"
          /> */}

        <input
          type="range"
          min="0"
          max="120"
          className="form-control-range mx-auto"
          id="formControlRange"
        />
        <div className="d-flex justify-content-between">
          <h4 className="text-left">00:00</h4>
          <h4 className="text-right">00:00</h4>
        </div>

        <div className="row mb-4 justify-content-md-center align-items-center">
          <FaUndoAlt className="mr-4 " color="#2d3436" size={15} />
          <FaStepBackward className="mr-4" color="#2d3436" size={15} />
          <FaPlay className="mr-4" color="#2d3436" size={15} />
          <FaStepForward className="mr-4 " color="#2d3436" size={15} />
          <FaRedoAlt className="mr-4 " color="#2d3436" size={15} />
          <FaVolumeUp className="mr mr-5 justify-content-end" color="#2d3436" size={15} />
          <h2 className="text-center ml-5">Nome do podcast</h2>
          {/* <div className="form-group align-self-center mx-auto">
          </div> */}
        </div>
        {/* <div className="container">
          <div className="row justify-content-md-center">
            <div className="col-3">
              <FaUndoAlt className=" mr-4 " color="#2d3436" size={15} />
              <FaStepBackward className="mr-4" color="#2d3436" size={15} />
              <FaPlay className="mr-4" color="#2d3436" size={15} />
              <FaStepForward className="mr-4 " color="#2d3436" size={15} />
              <FaRedoAlt className="mr-4 " color="#2d3436" size={15} />
              <FaVolumeUp className="mr-4 " color="#2d3436" size={15} />
            </div>
            <div className="col-9">
              <h4 className="text-center mr-2">Episodio</h4>
              <h5 className="align-self-center">00:00</h5>
              <div className="form-group align-self-center">
                <input type="range" min="0" max="120" className="form-control-range" />
              </div>
              <h5 className="align-self-center">00:00</h5>
            </div>
          </div>
        </div> */}
      </div>
    </Container>
  );
}

export default Podcast;
