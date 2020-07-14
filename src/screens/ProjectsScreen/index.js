import React from 'react';
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
} from './styles';
import Footer from '../../components/Footer';
import Slider from '../../components/Slider';
import topGithubUsers from '../../constants/slides';

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
              <Text>
                At vero eos et accusamus et iusto odio dignissimos ducimus qui
                blanditiis praesentium voluptatum deleniti atque corrupti quos
                dolores et quas molestias excepturi sint occaecati cupiditate
                non provident, similique sunt in culpa qui officia deserunt
                mollitia animi, id est laborum et dolorum fuga. Et harum quidem
                rerum facilis est et expedita distinctio. Nam libero tempore,
                cum soluta nobis est eligendi optio cumque nihil impedit quo
                minus id quod maxime placeat facere possimus, omnis voluptas
                assumenda est, omnis dolor repellendus. Temporibus autem
                quibusdam et aut officiis debitis aut rerum necessitatibus saepe
                eveniet ut et voluptates repudiandae sint et molestiae non
                recusandae. Itaque earum rerum hic tenetur a sapiente delectus,
                ut aut reiciendis voluptatibus maiores alias consequatur aut
                perferendis doloribus asperiores repellat.
              </Text>
            </InfoContainer>
          </ProjectItem>
        </ProjectsList>
      </MainContainer>
      <Footer />
    </>
  );
};

export default ProjectsScreen;
