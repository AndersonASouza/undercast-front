import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 800px) {
    img {
      width: 200px;
    }
    .card-body {
      max-width: 200px;
    }
  }

  @media (max-width: 400px) {
    img {
      width: 200px;
    }
    .card-body {
      max-width: 200px;
    }
  }
  div {
    /* background-color: black; */
    /* max-width: 18rem; */
  }
  /* img {
    width: 200px;
  } */
`;

export default Container;
