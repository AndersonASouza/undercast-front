import React from 'react';

import TopPodcastsContainer from '../../components/TopPodcastsContainer';

import Container from './styles';

function Home() {
  return (
    <Container>
      <main>
        <div className="container-fluid " style={{ marginTop: '45px', marginBottom: '20px' }}>
          <div className="row justify-content-around">
            <div className="col-5">
              <h1 className="mx-auto text-center">Undercast</h1>
              <p className="mx-auto text-center text-justify intro-text">
                Aqui voce pode ouvir e baixar seus podcasts, tambem pode se cadastrar e seguir seus
                podcasts prediletos. Da uma olhada ;)
              </p>
              <a className="btn btn-dark btn-lg btn-block cadastrar-btn" href="/" role="button">
                Cadastrar
              </a>
            </div>
            <div className="col-4 home-img justify-content-center">
              <img
                src="https://image.flaticon.com/icons/svg/2628/2628834.svg"
                alt=""
                width="300px"
                className="mx-auto home-img"
              />
            </div>
          </div>
        </div>
        <TopPodcastsContainer />
      </main>
    </Container>
  );
}

export default Home;
