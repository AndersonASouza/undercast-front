import React from 'react';

import Container from './styles';

function PodcastCard() {
  return (
    <Container>
      <div className="col-md-auto ">
        <div className="card mb-4 shadow-sm mx-auto">
          <img
            // src="https://image.flaticon.com/icons/svg/428/428162.svg"
            src="https://image.flaticon.com/icons/svg/2965/2965938.svg"
            alt=""
            className="img-thumbnail mx-auto"
          />
          <div className="card-body">
            <p className="card-text"> 1º PodcastName</p>
            <div className="d-flex justify-content-between align-items-center">
              <div className="btn-group">
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  View
                </button>
                <button type="button" className="btn btn-sm btn-outline-secondary">
                  Follow
                </button>
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

{
  /* <div className="card" style={{ width: '100px' }}>
  <img
    className="card-img-top rounded mx-auto d-block"
    src="https://image.flaticon.com/icons/svg/2965/2965938.svg"
    alt="Imagem do podcast"
    style={{ height: '100px', width: '100px', backgroundColor: 'white' }}
  />
  <div className="card-body">
    <h5 className="card-title" style={{ marginTop: '10px' }}>
      Podcast title
    </h5>
    <p className="card-text">
      Some quick example text to build on the card title and make up the bulk of the
      card's content.
    </p>
    <a href="/" className="btn btn-primary">
      Go to feed
    </a>
  </div>
</div> */
}
