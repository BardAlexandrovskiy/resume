import styled from 'styled-components';

export const MainContainer = styled.div`
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
  width: inherit;
  color: #242424;

  @media (max-width: 1024px) {
    margin-top: 10px;
  }

  @media (max-width: 736px) {
    font-size: 50px;
  }

  @media (max-width: 360px) {
    font-size: 40px;
  }
`;

export const ProjectsList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-bottom: 10px;
  }

  @media (max-width: 736px) {
    width: 100%;
  }
`;

export const ProjectItem = styled.li`
  border-top: 1px solid #242424;
  padding: 30px 0;
  display: flex;

  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
  }

  @media (max-width: 736px) {
    padding: 25px 0;
  }
`;

export const InfoContainer = styled.div`
  margin-left: 30px;
  width: 350px;

  @media (max-width: 1024px) {
    margin-top: 10px;
    margin-left: 0;
    width: 335px;
  }

  @media (max-width: 360px) {
    width: 300px;
  }
`;

export const ProjectTitleBlock = styled.h2`
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
  margin-bottom: 10px;

  @media (max-width: 520px) {
    width: 90px;
    height: 90px;
    font-size: 17px;
  }
`;

export const ProjectTitle = styled.h2`
  font-size: 20px;
  font-weight: 500;
  color: #242424;
  border-top: 1px solid #242424;
  padding-top: 10px;
  margin-bottom: 10px;
  font-weight: 600;

  @media (max-width: 520px) {
    font-size: 17px;
  }
`;

export const Link = styled.a`
  font-size: 17px;
  word-break: break-all;
  display: block;
  margin-bottom: 10px;
  color: #2f496e;
`;

export const Text = styled.div`
  color: #242424;
  font-size: 17px;
`;
