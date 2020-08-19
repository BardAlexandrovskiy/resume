import React from "react";
import {
  Container,
  Slide,
  Pic,
  Title,
  LinkText,
  ToggleButtonsContainer,
  ToggleButton,
  ToggleButtonVisibleBlock,
} from "./styles";
import mainBannerSlides from "../../constants/mainBannerSlides";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
      infoPosition: -200,
      opacity: 0,
    };
  }

  componentDidMount = () => {
    this.timeoutId = setTimeout(
      () => this.setState({ infoPosition: -42, opacity: 1 }),
      600
    );
    this.toggleSlideAuto();
  };

  toggleSlideAuto = () => {
    this.timeoutId = setTimeout(
      () => this.setState({ infoPosition: -200, opacity: 0 }),
      4500
    );
    this.intervalId = setInterval(() => {
      const { translateX } = this.state;
      this.timeoutId = setTimeout(
        () => this.setState({ infoPosition: -42, opacity: 1 }),
        600
      );
      if (translateX < 200) {
        this.setState({ translateX: translateX + 100 });
      } else {
        this.setState({ translateX: 0 });
      }
      this.timeoutId = setTimeout(
        () => this.setState({ infoPosition: -200, opacity: 0 }),
        4500
      );
    }, 5000);
  };

  toggleSlideButtonClick = (position) => {
    clearTimeout(this.timeoutId);
    clearInterval(this.intervalId);
    this.setState({ infoPosition: -200, opacity: 0, translateX: position });
    setTimeout(
      () =>
        this.setState({ translateX: position, infoPosition: -42, opacity: 1 }),
      600
    );
    this.toggleSlideAuto();
  };

  render() {
    const { translateX, infoPosition, opacity } = this.state;
    return (
      <Container>
        {mainBannerSlides.map((item, index) => (
          <Slide key={index} translateX={translateX}>
            <Title top={infoPosition} opacity={opacity}>
              {item.title}
            </Title>
            <Pic src={item.srcPic} />
            <LinkText
              bottom={infoPosition}
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              More details
            </LinkText>
          </Slide>
        ))}
        <ToggleButtonsContainer>
          {[0, 100, 200].map((slidePosition) => {
            return (
              <ToggleButton
                key={slidePosition}
                onClick={() => {
                  if (slidePosition !== translateX) {
                    this.toggleSlideButtonClick(slidePosition);
                  }
                }}
              >
                <ToggleButtonVisibleBlock
                  buttonActive={slidePosition === translateX}
                />
              </ToggleButton>
            );
          })}
        </ToggleButtonsContainer>
      </Container>
    );
  }
}
