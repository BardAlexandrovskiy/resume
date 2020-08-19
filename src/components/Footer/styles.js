import styled from "styled-components";

export const FooterContainer = styled.footer`
  height: 100px;
  background-color: #2988bc;
  padding: 0 100px;
  display: flex;
  justify-content: center;

  @media (max-width: 1300px) {
    padding: 0 30px;
  }

  @media (max-width: 1024px) {
    padding: 10px 20px;
    height: 200px;
  }
`;

export const ItemsContainer = styled.div`
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
  }
`;

export const Item = styled.div`
  display: flex;
  margin-right: 70px;
  align-items: center;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1220px) {
    margin-right: 30px;
  }

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-bottom: 10px;

    &:last-child {
      margin-bottom: 0;
    }
  }
`;

export const Img = styled.div`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

export const Text = styled.p`
  color: white;
  font-size: 16px;
`;

export const Link = styled.a`
  color: white;
  font-size: 16px;
`;

export const ImgLink = styled.a`
  width: 40px;
  height: 40px;
  margin-right: 10px;

  &:last-child {
    margin-right: 0;
  }

  @media (max-width: 1024px) {
    width: 30px;
    height: 30px;
  }
`;

export const TextSocialNetworks = styled(Text)`
  margin-right: 10px;
`;
