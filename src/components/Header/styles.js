import styled from 'styled-components';
import { NavLink } from 'react-router-dom';

export const HeaderContainer = styled.footer`
  height: 140px;
  background-color: #2f496e;
  display: flex;
  padding: 0 100px;
  align-items: center;
  justify-content: space-around;

  @media (max-width: 1024px) {
    padding: 10px 20px;
    align-items: center;
    height: 100px;
    justify-content: space-between;
    position: relative;
  }

  @media (max-width: 360px) {
    padding: 10px;
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

  @media (max-width: 414px) {
    font-size: 25px;
  }

  @media (max-width: 360px) {
    font-size: 20px;
  }
`;

export const Subtitle = styled.h2`
  color: #f2f3f4;
  font-size: 25px;

  @media (max-width: 414px) {
    font-size: 20px;
  }

  @media (max-width: 360px) {
    font-size: 17px;
  }
`;

export const BurgerLinks = styled.button`
  width: 50px;
  height: 50px;
  display: none;
  fill: white;
  padding: 13px;
  background-color: #2988bc;
  border-radius: 3px;

  @media (max-width: 1024px) {
    display: block;
  }
`;

export const LinkPanel = styled.nav`
  width: 50%;
  display: flex;
  z-index: 50;

  @media (max-width: 1024px) {
    width: 40%;
    flex-direction: column;
    justify-content: flex-end;
    top: 77px;
    right: 20px;
    position: absolute;
    display: ${(props) => (props.burgerOpen ? 'block' : 'none')};
  }
`;

export const Link = styled(NavLink)`
  font-size: 20px;
  border-radius: 10px;
  color: white;
  width: 25%;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.2s, opacity 0.2s;
  height: 60px;

  @media (max-width: 1024px) {
    margin-bottom: 2px;
    width: 100%;
    background-color: #2988bc;
  }

  @media (max-width: 736px) {
    font-size: 17px;
  }
  @media (max-width: 360px) {
    font-size: 14px;
  }
`;
