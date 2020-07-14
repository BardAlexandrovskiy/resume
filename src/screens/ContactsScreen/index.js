import React from 'react';
import {
  Container,
  Title,
  ContentContainer,
  ContactsContainer,
  LinkTitle,
  Link,
  ImgLink,
  ContactItem,
  Description,
} from './styles';
import Footer from '../../components/Footer';

const ContactsScreen = () => {
  return (
    <>
      <Container>
        <Title>My contacts</Title>
        <ContentContainer>
          <ContactsContainer>
            <ContactItem>
              <LinkTitle>Email:</LinkTitle>
              <Link
                href="mailto:alexandr8558@gmail.com?subject=Work"
                target="_blank"
                rel="noreferrer noopener"
              >
                alexandr8558@gmail.com
              </Link>
            </ContactItem>
            <ContactItem>
              <LinkTitle>Telegram:</LinkTitle>
              <Link
                href="https://t.me/a_bardovskiy"
                target="_blank"
                rel="noreferrer noopener"
              >
                @a_bardovskiy
              </Link>
            </ContactItem>
            <ContactItem>
              <LinkTitle>Social networks:</LinkTitle>
              <ImgLink
                href="https://www.facebook.com/people/Alexandr-Bardovskiy/100017107068195"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 512 512" fill="#3b5998">
                  <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h151v-181h-60v-90h60v-61c0-49.628906 40.371094-90 90-90h91v90h-91v61h91l-15 90h-76v181h121c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm0 0" />
                </svg>
              </ImgLink>
              <ImgLink
                href="https://www.linkedin.com/in/alexandr-bardovskiy-142533177/"
                target="_blank"
                rel="noreferrer noopener"
              >
                <svg viewBox="0 0 512 512" fill="#2867B2">
                  <path d="m437 0h-362c-41.351562 0-75 33.648438-75 75v362c0 41.351562 33.648438 75 75 75h362c41.351562 0 75-33.648438 75-75v-362c0-41.351562-33.648438-75-75-75zm-256 406h-60v-210h60zm0-240h-60v-60h60zm210 240h-60v-120c0-16.539062-13.460938-30-30-30s-30 13.460938-30 30v120h-60v-210h60v11.308594c15.71875-4.886719 25.929688-11.308594 45-11.308594 40.691406.042969 75 36.546875 75 79.6875zm0 0" />
                </svg>
              </ImgLink>
            </ContactItem>
            <ContactItem>
              <LinkTitle>GitHub:</LinkTitle>
              <Link
                href="https://github.com/BardAlexandrovskiy"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://github.com/BardAlexandrovskiy
              </Link>
            </ContactItem>
          </ContactsContainer>
          <Description>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat.
          </Description>
        </ContentContainer>
      </Container>
      <Footer />
    </>
  );
};

export default ContactsScreen;
