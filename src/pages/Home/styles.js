import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 800px) {
    .cadastrar-btn {
      margin-top: 30px;
    }
    .home-img {
      width: 250px;
    }
    .intro-text {
      font-size: 1.5em;
    }
  }

  @media (max-width: 400px) {
    h1 {
      font-size: 1.5em;
    }
    .home-img {
      width: 100px;
    }
  }
`;

export default Container;
