import React from "react";
import {
  HeaderContainer,
  Link,
  LinkPanel,
  TitleContainer,
  Title,
  Subtitle,
} from "./styles";

const Header = () => {
  return (
    <HeaderContainer>
      <TitleContainer>
        <Title>Alexandr Bardovskiy</Title>
        <Subtitle>Front End Developer</Subtitle>
      </TitleContainer>
      <LinkPanel>
        <Link exact to="/">
          Main
        </Link>
        <Link to="/about-me">About me</Link>
        <Link to="/projects">Projects</Link>
        <Link to="/contacts">Contacts</Link>
      </LinkPanel>
    </HeaderContainer>
  );
};

export default Header;
