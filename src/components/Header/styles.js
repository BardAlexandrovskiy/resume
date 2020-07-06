import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const HeaderContainer = styled.footer`
  height: 150px;
  background-color: #1f7b67;
  display: flex;
  padding: 0 100px;
  align-items: center;
`;

export const TitleContainer = styled.div`
  width: 50%;
`;

export const Title = styled.h1`
  color: white;
  font-size: 40px;
`;

export const Subtitle = styled.h2`
  color: whitesmoke;
  font-size: 25px;
`;

export const LinkPanel = styled.nav`
  width: 50%;
  height: 60px;
  display: flex;
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  border-radius: 10px;
  color: white;
  text-decoration: none;
  width: 33.33%;
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
