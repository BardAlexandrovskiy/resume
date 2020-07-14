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
            Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean
            commodo ligula eget dolor. Aenean massa. Cum sociis natoque
            penatibus et magnis dis parturient montes, nascetur ridiculus mus.
            Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem.
            Nulla consequat massa quis enim. Donec pede justo, fringilla vel,
            aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut,
            imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede
            mollis pretium. Integer tincidunt.
          </Description>
        </ContentContainer>
      </MainContainer>
      <Footer />
    </>
  );
};

export default MainScreen;
