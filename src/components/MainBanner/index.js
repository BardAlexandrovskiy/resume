import React from "react";
import { Container, Slide, Pic, Title, LinkText } from "./styles";
import mainBannerSlides from "../../constants/mainBannerSlides";

export default class Banner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      translateX: 0,
    };
  }

  componentDidMount = () => {
    setInterval(() => {
      const { translateX } = this.state;
      if (translateX < 200) {
        this.setState({ translateX: translateX + 100 });
      } else {
        this.setState({ translateX: 0 });
      }
    }, 5000);
  };

  render() {
    const { translateX } = this.state;
    return (
      <Container>
        {mainBannerSlides.map((item, index) => (
          <Slide key={index} translateX={translateX}>
            <Title>{item.title}</Title>
            <Pic src={item.srcPic} />
            <LinkText
              href={item.link}
              target="_blank"
              rel="noreferrer noopener"
            >
              More details
            </LinkText>
          </Slide>
        ))}
      </Container>
    );
  }
}
