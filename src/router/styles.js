import styled from "styled-components";

export const ScrollContainer = styled.div`
  overflow-y: auto;
  height: calc(100% - 100px);

  @media (max-width: 736px) {
    height: calc(100% - 87px);
  }

  @media (max-width: 414px) {
    height: calc(100% - 74px);
  }
`;
