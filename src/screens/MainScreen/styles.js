import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const MainContainer = styled.div`
  min-height: calc(100% - 280px);
  display: flex;
  justify-content: center;

  @media (max-width: 1024px) {
    min-height: calc(100% - 240px);
  }
`;

export const ContentContainer = styled.div`
  margin-left: 430px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 470px;

  @media (max-width: 1024px) {
    margin-right: 20px;
    margin-left: 20px;
  }

  @media (max-width: 520px) {
    width: 320px;
  }

  @media (max-width: 360px) {
    width: 300px;
    margin-right: 10px;
    margin-left: 10px;
  }
`;

export const Title = styled.h1`
  font-size: 60px;
  font-weight: 800;
  margin-top: 50px;
  width: inherit;
  color: #242424;

  @media (max-width: 736px) {
    margin-top: 10px;
  }
`;

export const Subtitle = styled.h2`
  font-size: 45px;
  font-weight: 600;
  margin-bottom: 50px;
  width: inherit;
  color: #242424;

  @media (max-width: 736px) {
    margin-bottom: 10px;
  }

  @media (max-width: 520px) {
    font-size: 35px;
  }
`;

export const LinksAvatarContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  margin-bottom: 50px;

  @media (max-width: 1024px) {
    margin-bottom: 500px;
  }

  @media (max-width: 736px) {
    margin-bottom: 420px;
  }

  @media (max-width: 520px) {
    margin-bottom: 340px;
  }

  @media (max-width: 360px) {
    margin-bottom: 320px;
  }
`;

export const Link = styled(NavLink)`
  width: 150px;
  height: 150px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  text-align: center;
  border-radius: 50%;
  color: white;
  margin-right: 10px;

  &:last-of-type {
    margin-right: 0;
  }

  &:nth-of-type(1) {
    background-color: #2988bc;
  }

  &:nth-of-type(2) {
    background-color: #2f496e;
  }

  &:nth-of-type(3) {
    background-color: #ed8c72;
  }

  @media (max-width: 520px) {
    width: 100px;
    height: 100px;
  }

  @media (max-width: 360px) {
    width: 80px;
    height: 80px;
  }
`;

export const Avatar = styled.img`
  width: 400px;
  height: 400px;
  position: absolute;
  border-radius: 50%;
  right: 500px;

  @media (max-width: 1024px) {
    right: calc(50% - 200px);
    top: 200px;
  }

  @media (max-width: 736px) {
    right: calc(50% - 200px);
    top: 160px;
  }

  @media (max-width: 520px) {
    right: calc(50% - 160px);
    top: 110px;
    width: 320px;
    height: 320px;
  }

  @media (max-width: 360px) {
    right: calc(50% - 150px);
    width: 300px;
    height: 300px;
    top: 90px;
  }
`;

export const Description = styled.p`
  font-size: 25px;
  width: inherit;
  margin-bottom: 50px;

  @media (max-width: 736px) {
    margin-bottom: 10px;
  }
`;
