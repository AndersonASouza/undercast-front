import React from 'react';

import { Link } from 'react-router-dom';

import Container from './styles';

function PodcastCard(props) {
  return (
    <Container>
      <div className="col-md-auto ">
        <div className="card mb-4 shadow-sm mx-auto">
          <img
            // src="https://image.flaticon.com/icons/svg/428/428162.svg"
            src={props.podcast.artworkUrl100}
            // "https://image.flaticon.com/icons/svg/2965/2965938.svg"
            alt=""
            className="img-thumbnail mx-auto"
          />
          <div className="card-body">
            <p className="card-text text-truncate">
              {props.position}º {props.podcast.name}
            </p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <Link
                  className="btn btn-sm btn-outline-secondary"
                  to={`/podcast?id=${props.podcast.id}`}
                  alt={`Visualizar podcast ${props.podcast.name}`}
                >
                  View
                </Link>
                <Link className="btn btn-sm btn-outline-secondary" to="/podcast?id=1">
                  Follow
                </Link>
              </div>
              <small className="text-muted">9 mins</small>
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default PodcastCard;
