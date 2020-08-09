import React from 'react';
import {
  MainContainer,
  Title,
  ProjectsList,
  ProjectItem,
  InfoContainer,
  ProjectTitleBlock,
  ProjectTitle,
  TextContainer,
  TextTitle,
  Link,
  Text,
} from './styles';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import topGithubUsersSlides from '../../constants/topGithubUsersSlides';
import newsSlides from '../../constants/newsSlides';
import toDoListSlides from '../../constants/toDoListSlides';
import gallerySlides from '../../constants/gallerySlides';

const ProjectsScreen = () => {
  return (
    <>
      <MainContainer>
        <Title>My projects</Title>
        <ProjectsList>
          <ProjectItem>
            <Slider slides={topGithubUsersSlides} />
            <InfoContainer>
              <ProjectTitleBlock>Project | 01</ProjectTitleBlock>
              <ProjectTitle>Project | Top GitHub Users</ProjectTitle>
              <TextContainer>
                <TextTitle>Link to gh-pages with REST API: </TextTitle>
                <Link
                  href="https://bardalexandrovskiy.github.io/top-github-users-with-redux/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://bardalexandrovskiy.github.io/top-github-users-with-redux/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>
                  Link to gh-pages with GraphQL API(need a token):
                </TextTitle>
                <Link
                  href="https://bardalexandrovskiy.github.io/top-gh-users/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://bardalexandrovskiy.github.io/top-gh-users/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Token reference: </TextTitle>
                <Link
                  href="https://drive.google.com/file/d/1XRyp-YlIdINcMY-Rk5FzudPwX9YUgjUM/view?usp=sharing/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://drive.google.com/file/d/1XRyp-YlIdINcMY-Rk5FzudPwX9YUgjUM/view?usp=sharing/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Repository link(REST API): </TextTitle>
                <Link
                  href="https://github.com/BardAlexandrovskiy/top-github-users-with-redux/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/BardAlexandrovskiy/top-github-users-with-redux/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Repository link(GraphQL API): </TextTitle>
                <Link
                  href="https://github.com/BardAlexandrovskiy/top-gh-users/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/BardAlexandrovskiy/top-gh-users/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Description: </TextTitle>
                <Text>
                  This application displays the top GitHub users in your city.
                </Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Technologies used: </TextTitle>
                <Text>Redux, Styled Components, GraphQl, REST.</Text>
              </TextContainer>
            </InfoContainer>
          </ProjectItem>
          <ProjectItem>
            <Slider slides={newsSlides} />
            <InfoContainer>
              <ProjectTitleBlock>Project | 02</ProjectTitleBlock>
              <ProjectTitle>Project | News</ProjectTitle>
              <TextContainer>
                <TextTitle>Link to gh-pages: </TextTitle>
                <Link
                  href="https://bardalexandrovskiy.github.io/news/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://bardalexandrovskiy.github.io/news/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Repository link: </TextTitle>
                <Link
                  href="https://github.com/BardAlexandrovskiy/news/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/BardAlexandrovskiy/news/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Description: </TextTitle>
                <Text>Multipage news app.</Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Technologies used: </TextTitle>
                <Text>Redux, Styled Components, REST API, React Router.</Text>
              </TextContainer>
            </InfoContainer>
          </ProjectItem>
          <ProjectItem>
            <Slider slides={toDoListSlides} />
            <InfoContainer>
              <ProjectTitleBlock>Project | 03</ProjectTitleBlock>
              <ProjectTitle>Project | To Do List</ProjectTitle>
              <TextContainer>
                <TextTitle>Link to gh-pages: </TextTitle>
                <Link
                  href="https://bardalexandrovskiy.github.io/to-do-list/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://bardalexandrovskiy.github.io/to-do-list/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Link to gh-pages: </TextTitle>
                <Link
                  href="https://bardalexandrovskiy.github.io/to-do-list/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://bardalexandrovskiy.github.io/to-do-list/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Repository link: </TextTitle>
                <Link
                  href="https://github.com/BardAlexandrovskiy/to-do-list/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/BardAlexandrovskiy/to-do-list/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Description: </TextTitle>
                <Text>My to do list app.</Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Technologies used: </TextTitle>
                <Text>Redux, Styled Components, LocalStorage.</Text>
              </TextContainer>
            </InfoContainer>
          </ProjectItem>
          <ProjectItem>
            <Slider slides={gallerySlides} />
            <InfoContainer>
              <ProjectTitleBlock>Project | 04</ProjectTitleBlock>
              <ProjectTitle>Project | Gallery</ProjectTitle>

              <TextContainer>
                <TextTitle>Link to apk: </TextTitle>
                <Link
                  href="https://drive.google.com/open?id=1E0cu_E0CTSod2jVolmAszuob-JQdj47-"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://drive.google.com/open?id=1E0cu_E0CTSod2jVolmAszuob-JQdj47-
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Repository link: </TextTitle>
                <Link
                  href="https://github.com/BardAlexandrovskiy/Gallery/"
                  target="_blank"
                  rel="noreferrer noopener"
                >
                  https://github.com/BardAlexandrovskiy/Gallery/
                </Link>
              </TextContainer>
              <TextContainer>
                <TextTitle>Description: </TextTitle>
                <Text>
                  Application created on React Native. The application displays
                  the gallery from Unsplash.
                </Text>
              </TextContainer>
              <TextContainer>
                <TextTitle>Technologies used: </TextTitle>
                <Text>
                  Redux, Redux Thunk, React Navigation, Styled Components, REST.
                </Text>
              </TextContainer>
            </InfoContainer>
          </ProjectItem>
        </ProjectsList>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsScreen;
