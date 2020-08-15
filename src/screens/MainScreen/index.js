import React from "react";
import {
  MainContainer,
  FixContainer,
  Title,
  Subtitle,
  LinksAvatarContainer,
  Link,
  Avatar,
  Description,
  BannerContainer,
  BannerTitle,
} from "./styles";
import Footer from "../../components/Footer";
import avatar from "../../assets/images/avatar.jpg";
import MainBanner from "../../components/MainBanner";

const MainScreen = () => {
  return (
    <>
      <MainContainer>
        <FixContainer>
          <Title>Hello!</Title>
          <Subtitle>Nice to know you:</Subtitle>
          <LinksAvatarContainer>
            <Link to="/about-me">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
            <Avatar src={avatar} />
          </LinksAvatarContainer>
          <Description>
            My name is Alexander. I'm writing in JavaScript (React or React
            Native + Redux). I can make landing for you and also progressive web
            application or mobile application on React Native. I'm learning new
            technologies quickly. At the moment I'm looking for job in team
            where I could be a useful employee. I'll be glad to receive your
            propositions. I consider working in the office (Poltava) and remote.
          </Description>
        </FixContainer>
      </MainContainer>
      <BannerContainer>
        <BannerTitle>Some projects:</BannerTitle>
        <MainBanner />
      </BannerContainer>
      <Footer />
    </>
  );
};

export default MainScreen;
