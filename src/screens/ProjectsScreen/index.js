import React from "react";
import {
  MainContainer,
  Title,
  ProjectsList,
  ProjectItem,
  SliderContainer,
  InfoContainer,
  ProjectTitleBlock,
  ProjectTitle,
  Link,
  Text,
} from "./styles";
import Footer from "../../components/Footer";
import Slider from "../../components/Slider";
import topGithubUsers from "../../constants/slides";

const ProjectsScreen = () => {
  return (
    <>
      <MainContainer>
        <Title>My projects</Title>
        <ProjectsList>
          <ProjectItem>
            <Slider slides={topGithubUsers} />
            <InfoContainer>
              <ProjectTitleBlock>Project | 01</ProjectTitleBlock>
              <ProjectTitle>Project | Top GitHub Users</ProjectTitle>
              <Link
                href="https://bardalexandrovskiy.github.io/top-github-users-with-redux/"
                target="_blank"
                rel="noreferrer noopener"
              >
                https://bardalexandrovskiy.github.io/top-github-users-with-redux/
              </Link>
              <Text>Find top github users around town.</Text>
            </InfoContainer>
          </ProjectItem>
        </ProjectsList>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsScreen;
