import styled from "styled-components";

export const Container = styled.div`
  min-height: calc(100% - 280px);

  @media (max-width: 1024px) {
    min-height: calc(100% - 240px);
  }
`;
