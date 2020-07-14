import styled from 'styled-components';

export const Container = styled.div`
  min-height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0 20px;

  @media (max-width: 1024px) {
    min-height: calc(100% - 200px);
  }

  @media (max-width: 360px) {
    padding: 0 10px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-top: 50px;
  margin-bottom: 50px;
  width: inherit;
  color: #242424;

  @media (max-width: 736px) {
    margin-top: 30px;
    margin-bottom: 30px;
    font-size: 40px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const ContactsContainer = styled.div`
  margin-bottom: 50px;

  @media (max-width: 736px) {
    margin-bottom: 10px;
  }
`;

export const ContactItem = styled.div`
  display: flex;
  margin-bottom: 25px;
  align-items: center;
`;

export const LinkTitle = styled.p`
  font-size: 20px;
  font-weight: 600;
  margin-right: 5px;
  color: #242424;
`;

export const Link = styled.a`
  font-size: 20px;
  color: #2f496e;
  word-break: break-all;
`;

export const ImgLink = styled.a`
  width: 50px;
  margin-right: 5px;

  &:last-child {
    margin-right: 0;
  }
`;

export const Description = styled.p`
  font-size: 20px;
  margin-bottom: 50px;

  @media (max-width: 736px) {
    margin-bottom: 30px;
  }
`;
