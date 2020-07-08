import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.footer`
  min-height: 165px;
  background-color: #1f7b67;
  display: flex;
  padding: 0 100px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) {
    flex-direction: column;
    padding: 10px 20px;
  }
`;

export const TitleContainer = styled.div`
  @media (max-width: 1024px) {
    margin-bottom: 10px;
  }
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;

  @media (max-width: 736px) {
    font-size: 30px;
  }

  @media (max-width: 360px) {
    font-size: 25px;
  }
`;

export const Subtitle = styled.h2`
  color: whitesmoke;
  font-size: 25px;

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const LinkPanel = styled.nav`
  width: 50%;
  height: 60px;
  display: flex;

  @media (max-width: 1024px) {
    width: 100%;
  }
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  border-radius: 10px;
  color: white;
  width: 25%;
  text-decoration: none;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;

  @media (max-width: 736px) {
    font-size: 17px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;
