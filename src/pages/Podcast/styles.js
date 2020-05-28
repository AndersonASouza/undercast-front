import styled from 'styled-components';

const Container = styled.main`
  @media (min-width: 800px) {
    .capa-img {
      width: 200px;
    }
  }

  @media (max-width: 400px) {
    .capa-img {
      width: 100px;
    }
  }

  ul {
    list-style-type: none;
  }

  .capa {
    margin-top: 15px;
  }

  .player {
    display: inline;
  }

  .main {
    background-color: #ecf0f1;
  }
`;

export default Container;
