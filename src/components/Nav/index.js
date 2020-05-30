import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import Container from './styles';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPodcast: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  search = async () => {
    const response = await api.get(`?search=${this.state.searchPodcast}&?limit=1`);
    console.log(response);
  };

  handleChange(event) {
    this.setState({ searchPodcast: event.target.value });
    console.log(this.state.searchPodcast);
  }

  render() {
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
                placeholder="Search"
                aria-label="Search"
                value={this.state.searchString}
                onChange={this.handleChange}
              />
              <button
                onClick={() => this.search(this.state.searchString)}
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
              >
                Search
              </button>
            </form>
          </div>
        </nav>
      </Container>
    );
  }
}

export default NavComponent;
