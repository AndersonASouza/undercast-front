import styled from 'styled-components';

const Container = styled.div`
  @media (min-width: 800px) {
    .search-img {
      width: 250px;
    }
  }

  @media (max-width: 400px) {
    .search-img {
      width: 100px;
    }
  }
  .card {
    border: none;
  }
`;

export default Container;
