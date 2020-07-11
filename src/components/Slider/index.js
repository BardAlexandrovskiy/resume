import React from "react";
import {
  Container,
  Slide,
  ArrowRight,
  ArrowLeft,
  ContainerForButtons,
} from "./styles";

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePosition: 1,
      translateX: 0,
    };
  }

  componentDidMount() {
    const { slides } = this.props;
    this.setState({ lengthImg: slides.length });
  }

  rightSlide = () => {
    const { lengthImg, slidePosition, translateX } = this.state;
    if (slidePosition < lengthImg) {
      this.setState({
        translateX: translateX + 100,
        slidePosition: slidePosition + 1,
      });
    } else {
      this.setState({ translateX: 0, slidePosition: 1 });
    }
  };

  leftSlide = () => {
    const { lengthImg, slidePosition, translateX } = this.state;
    if (slidePosition <= lengthImg && slidePosition > 1) {
      this.setState({
        translateX: translateX - 100,
        slidePosition: slidePosition - 1,
      });
    } else {
      this.setState({
        translateX: lengthImg * 100 - 100,
        slidePosition: lengthImg,
      });
    }
  };

  render() {
    const { slides } = this.props;
    const { translateX } = this.state;
    return (
      <ContainerForButtons>
        <Container>
          {slides.map((pic, index) => (
            <Slide src={pic} key={index} translateX={translateX} />
          ))}
        </Container>
        <ArrowLeft onClick={() => this.leftSlide()}>
          <svg viewBox="0 0 477.175 477.175">
            <path
              d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
            />
          </svg>
        </ArrowLeft>
        <ArrowRight onClick={() => this.rightSlide()}>
          <svg viewBox="0 0 477.175 477.175">
            <path
              d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		"
            />
          </svg>
        </ArrowRight>
      </ContainerForButtons>
    );
  }
}

export default Slider;
