import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 140px;
  background-color: #006b53;
  padding: 0 100px;
  display: flex;
  justify-content: center;
`;

export const ItemsContainer = styled.div`
  height: 140px;
  display: flex;
`;

export const Item = styled.div`
  display: flex;
  align-items: center;
  margin-right: 70px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 20px;
`;

export const Text = styled.p`
  color: white;
  font-size: 16px;
`;
