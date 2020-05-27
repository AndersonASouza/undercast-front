import React from 'react';

import { Link } from 'react-router-dom';
import Container from './styles';

function NavComponent() {
  return (
    <Container className="full-width">
      <nav
        // style="background-color: #e3f2fd;"
        className="navbar navbar-expand-lg navbar-dark bg-dark mx-auto"
        // {style="background-color : #dfe6e9;"}
      >
        <Link className="navbar-brand" to="/">
          <img
            src="https://image.flaticon.com/icons/svg/428/428162.svg"
            width="30"
            height="30"
            className="d-inline-block align-top"
            alt=""
            loading="lazy"
          />
        </Link>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="/testenavbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <Link className="nav-link" to="/">
                Home
                <span className="sr-only">(current)</span>
              </Link>
            </li>
          </ul>
          <form className="form-inline my-2 my-lg-0">
            <input
              className="form-control mr-sm-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success my-2 my-sm-0" type="submit">
              Search
            </button>
          </form>
        </div>
      </nav>
    </Container>
  );
}

export default NavComponent;
