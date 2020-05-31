import React, { Component } from 'react';
import { Link, Redirect } from 'react-router-dom';
// import api from '../../services/api';
import Container from './styles';

class NavComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchPodcast: '',
      fireRedirect: false,
      searchResponse: null,
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ searchPodcast: event.target.value });
    console.log(this.state.searchPodcast);
  }

  submitForm = (e) => {
    e.preventDefault();
    this.setState({ fireRedirect: true });
  };

  // handleSubmit(event) {
  //   if (event.key === 'Enter') {
  //     {
  //       <Redirect
  //         to={{
  //           pathname: '/search',
  //           search: `?search=${this.state.searchPodcast}`,
  //           state: { referrer: currentLocation },
  //         }}
  //       />;
  //     }
  //   }
  // }

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
            <form className="form-inline my-2 my-lg-0" onSubmit={this.submitForm}>
              <input
                className="form-control mr-sm-2"
                placeholder="O que voce quer ouvir?"
                aria-label="Digite o que voce quer ouvir"
                value={this.state.searchString}
                onChange={this.handleChange}
                // onKeyPress={this.handleSubmit.bind(this)}
              />

              <Link
                // onClick={() => this.search(this.state.searchString)}
                className="btn btn-outline-success my-2 my-sm-0"
                type="button"
                to={`/search/query=${this.state.searchPodcast.replace(' ', '+')}`}
              >
                Pesquisar
              </Link>
              {this.state.fireRedirect && (
                <Redirect
                  to={{
                    pathname: '/search/',
                    search: `?query=${this.state.searchPodcast.replace(' ', '+')}`,
                    // state: { response: this.state.searchResponse },
                  }}
                />
              )}
            </form>
          </div>
        </nav>
      </Container>
    );
  }
}

export default NavComponent;
