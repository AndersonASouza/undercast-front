import React, { Component } from 'react';

import Container from './styles';

import PodcastCard from '../PodcastCard';

class TopPodcastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      countPodcasts: 0,
    };
  }

  render() {
    // const countPodcasts = {this.state};
    return (
      <Container>
        <h2 className="text-center">Os mais escutados do Brasil</h2>
        <div className="container-fluid d-flex justify-content-md-center">
          <div className="row justify-content-md-center mx-auto">
            <PodcastCard image="https://is1-ssl.mzstatic.com/image/thumb/Podcasts123/v4/6b/06/fd/6b06fdbd-07b0-032e-7f4d-ea7c40995278/mza_3169076889313867971.jpg/600x600bb.jpg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
            <PodcastCard image="https://image.flaticon.com/icons/svg/2965/2965938.svg" />
          </div>
        </div>
      </Container>
    );
  }
}

export default TopPodcastContainer;
