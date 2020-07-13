import styled from 'styled-components';

export const MainContainer = styled.div`
  min-height: calc(100% - 100px);
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 1024px) {
    min-height: calc(100% - 200px);
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-top: 50px;
  width: inherit;
  color: #242424;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

export const ContentContainer = styled.div`
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    padding: 0 20px;
    flex-direction: column;
  }

  @media (max-width: 360px) {
    padding: 0 10px;
  }
`;

export const ListStandardResumeItems = styled.ul`
  width: 600px;
  margin-top: 50px;
  margin-bottom: 50px;
  margin-right: 100px;

  @media (max-width: 1024px) {
    margin-right: 0;
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 736px) {
    width: 100%;
  }
`;

export const ListSmallResumeItems = styled.ul`
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    display: flex;
    justify-content: space-around;
    margin-top: 30px;
    margin-bottom: 10px;
  }
`;

export const TitleItemStandard = styled.h2`
  width: 120px;
  height: 120px;
  border-radius: 50%;
  background-color: #2988bc;
  font-size: 20px;
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  color: white;
  font-weight: 500;
  margin-right: 20px;

  @media (max-width: 520px) {
    width: 90px;
    height: 90px;
    margin-right: 10px;
    font-size: 17px;
  }
`;

export const TitleItemSmall = styled.h2`
  padding: 20px 0;
  color: #242424;
  font-weight: 600;

  @media (max-width: 520px) {
    font-size: 17px;
  }
`;

export const StandardResumeItem = styled.li`
  border-top: 1px solid #242424;
  padding: 30px 0;
  display: flex;
  align-items: center;

  @media (max-width: 736px) {
    padding: 25px 0;
  }
`;

export const SmallResumeItem = styled.li`
  margin-bottom: 50px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 1024px) {
    margin-bottom: 0;
  }
`;

export const Link = styled.a`
  color: #2f496e;
  font-size: 17px;
  word-break: break-all;

  @media (max-width: 736px) {
    width: calc(100% - 140px);
  }

  @media (max-width: 520px) {
    width: calc(100% - 100px);
  }
`;

export const TextStandard = styled.p`
  color: #242424;
  font-size: 17px;
  width: 460px;

  @media (max-width: 736px) {
    width: calc(100% - 140px);
  }

  @media (max-width: 520px) {
    width: calc(100% - 100px);
  }
`;

export const TextSmall = styled.p`
  font-size: 17px;
  color: #242424;
`;

export const SvgIconContainer = styled.div`
  width: 60px;
  height: 60px;
  padding: 10px;
  fill: white;
  background-color: #2f496e;
  border-radius: 50%;
`;
