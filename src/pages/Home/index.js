import React, { Component } from 'react';

import api from '../../services/api';

// import TopPodcastsContainer from '../../components/TopPodcastsContainer';

import PodcastCard from '../../components/PodcastCard';

import Container from './styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcasts: [],
    };
  }

  componentDidMount() {
    this.loadFeed();
  }

  async loadFeed() {
    const { podcasts } = this.state;
    const response = await api.get(`/feed?rank=10`);
    this.setState({ podcasts: response.data });
    console.log(podcasts);
  }

  render() {
    return (
      <Container>
        <main>
          <div className="container-fluid " style={{ marginTop: '45px', marginBottom: '20px' }}>
            <div className="row justify-content-around">
              <div className="col-5">
                <h1 className="mx-auto text-center">Undercast</h1>
                <p className="mx-auto text-center text-justify intro-text">
                  Aqui voce pode ouvir e baixar seus podcasts, tambem pode se cadastrar e seguir
                  seus podcasts prediletos. Da uma olhada ;)
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
          <h2 className="text-center mb-3">Os mais escutados do Brasil</h2>
          <div className="container-fluid d-flex justify-content-md-center">
            <div className="row mb-3 justify-content-md-center mx-auto">
              {this.state.podcasts.map((podcast, index) => (
                <PodcastCard podcast={podcast} position={index + 1} />
              ))}
            </div>
          </div>
          {/* <TopPodcastsContainer /> */}
        </main>
      </Container>
    );
  }
}

export default Home;
