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
            I write in JavaScript with React, React Native and Redux. I love
            beautiful and clear code. Quickly learning new technologies. I will
            be glad to fulfill your orders. I can make for you landing,
            progressive web application and mobile application on React Native.
          </Description>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainScreen;
