import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 100px);

  @media (max-width: 1024px) {
    min-height: calc(100% - 200px);
  }
`;
