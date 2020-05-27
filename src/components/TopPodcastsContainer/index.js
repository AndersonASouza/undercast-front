import React, { Component } from 'react';

import Container from './styles';

import PodcastCard from '../PodcastCard';

class TopPodcastContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // podcasts: props.podcasts,
    };
  }

  render() {
    return (
      <Container>
        <h2 className="text-center">Os mais escutados do Brasil</h2>
        <div className="container-fluid d-flex justify-content-md-center">
          <div className="row justify-content-md-center mx-auto">
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
            <PodcastCard />
          </div>
        </div>
      </Container>
    );
  }
}

// function TopPodcastContainer() {
//   return (
//     // <Container>
//     //   <div className="row justify-content-around">
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //   </div>
//     //   <div className="row justify-content-around">
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //     <PodcastCard />
//     //   </div>
//     // </Container>
//   );
// }

export default TopPodcastContainer;
