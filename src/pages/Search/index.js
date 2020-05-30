import React, { Component } from 'react';

import api from '../../services/api';

import Container from './styles';

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      podcastSearch: [],
    };
  }

  componentDidMount() {
    this.doSearch();
  }

  doSearch = async () => {
    const response = await api.get(
      `${this.props.location.pathname}/${this.props.location.search.replace(' ', '+')}&?limit=1`
    );
    this.setState({ podcastSearch: response.data });
    console.log(this.state.podcastSearch);
  };

  render() {
    return (
      <Container>
        <ul className="list-group">
          {this.state.podcastSearch.map((podcast) => (
            <li className="list-group-item list-group-item-action">
              <div className="card mb-3  list-group-item-action">
                <div className="row no-gutters">
                  <div className="col-md-4">
                    <img
                      src={podcast.artworkUrl600}
                      className="search-img card-img shadow-lg"
                      alt="Capa do podcast"
                    />
                  </div>
                  <div className="col-md-8">
                    <div className="card-body">
                      <h3 className="card-title">Artista: {podcast.artistName}</h3>
                      <h4 className="card-title">Podcast: {podcast.collectionName}</h4>
                      <p class="card-text">
                        This is a wider card with supporting text below as a natural lead-in to
                        additional content. This content is a little bit longer.
                      </p>
                      <p class="card-text">
                        <small class="text-muted">Last updated 3 mins ago</small>
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Container>
    );
  }
}

export default Search;
