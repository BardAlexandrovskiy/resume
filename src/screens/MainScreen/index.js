import React from 'react';
import {
  MainContainer,
  ContentContainer,
  Title,
  Subtitle,
  LinksAvatarContainer,
  Link,
  Avatar,
  Description,
} from './styles';
import Footer from '../../components/Footer';
import avatar from '../../assets/images/avatar.jpg';

const MainScreen = () => {
  return (
    <>
      <MainContainer>
        <ContentContainer>
          <Title>Hello!</Title>
          <Subtitle>We will be familiar:</Subtitle>
          <LinksAvatarContainer>
            <Link to="/about-me">About me</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contacts">Contacts</Link>
            <Avatar src={avatar} />
          </LinksAvatarContainer>
          <Description>
            My name is Alexander. I am writing in JavaScript (React or React Native + Redux). I can make for you landing, progressive web application and mobile application on React Native. I am learning new technologies quickly. At the moment I am looking for a company in which I could realize myself and be a useful employee. I would be glad to receive your suggestions. I consider working in the office (Poltava) and remote.
          </Description>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainScreen;
