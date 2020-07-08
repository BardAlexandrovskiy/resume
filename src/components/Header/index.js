import React from "react";
import {
  HeaderContainer,
  Link,
  LinkPanel,
  TitleContainer,
  Title,
  Subtitle,
  BurgerLinks,
} from "./styles";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      burgerOpen: false,
    };
  }

  handleClickBurger = () => {
    const { burgerOpen } = this.state;

    this.setState({ burgerOpen: !burgerOpen });
  };

  render() {
    const { burgerOpen } = this.state;
    return (
      <HeaderContainer>
        <TitleContainer>
          <Title>Alexandr Bardovskiy</Title>
          <Subtitle>Front End Developer</Subtitle>
        </TitleContainer>
        <BurgerLinks onClick={() => this.handleClickBurger()}>
          {burgerOpen ? (
            <svg viewBox="0 0 329.26933 329">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          ) : (
            <svg viewBox="0 0 409.6 409.6">
              <path
                d="M392.533,17.067H17.067C7.641,17.067,0,24.708,0,34.133S7.641,51.2,17.067,51.2h375.467
      c9.426,0,17.067-7.641,17.067-17.067S401.959,17.067,392.533,17.067z"
              />

              <path
                d="M392.533,187.733H17.067C7.641,187.733,0,195.374,0,204.8s7.641,17.067,17.067,17.067h375.467
      c9.426,0,17.067-7.641,17.067-17.067S401.959,187.733,392.533,187.733z"
              />

              <path
                d="M392.533,358.4H17.067C7.641,358.4,0,366.041,0,375.467s7.641,17.067,17.067,17.067h375.467
      c9.426,0,17.067-7.641,17.067-17.067S401.959,358.4,392.533,358.4z"
              />
            </svg>
          )}
        </BurgerLinks>
        <LinkPanel burgerOpen={burgerOpen}>
          <Link exact to="/">
            Main
          </Link>
          <Link to="/about-me">About me</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/contacts">Contacts</Link>
        </LinkPanel>
      </HeaderContainer>
    );
  }
}

export default Header;
