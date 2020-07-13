import React from 'react';
import {
  Container,
  Slide,
  ArrowRight,
  ArrowLeft,
  ContainerForButtons,
  FullContainer,
  CloseFullSlideButton,
  ArrowLeftFull,
  ArrowRightFull,
  FullSlideContainer,
  FullSlide,
} from './styles';

class Slider extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      slidePosition: 1,
      translateX: 0,
      isFull: false,
      lastSlide: 1,
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

  openFull = () => {
    const { slidePosition } = this.state;

    this.setState({ isFull: true, lastSlide: slidePosition - 1 });
  };

  hideFull = () => {
    this.setState({ isFull: false });
  };

  render() {
    const { slides } = this.props;
    const { translateX, isFull, lastSlide } = this.state;
    return (
      <>
        <ContainerForButtons>
          <Container onClick={() => this.openFull()}>
            {isFull ? (
              <Slide backgroundUrl={slides[lastSlide]} />
            ) : (
              slides.map((pic, index) => (
                <Slide
                  translateX={translateX}
                  key={index}
                  backgroundUrl={pic}
                />
              ))
            )}
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
        <FullContainer isFull={isFull}>
          <CloseFullSlideButton onClick={() => this.hideFull()}>
            <svg viewBox="0 0 329.26933 329">
              <path d="m194.800781 164.769531 128.210938-128.214843c8.34375-8.339844 8.34375-21.824219 0-30.164063-8.339844-8.339844-21.824219-8.339844-30.164063 0l-128.214844 128.214844-128.210937-128.214844c-8.34375-8.339844-21.824219-8.339844-30.164063 0-8.34375 8.339844-8.34375 21.824219 0 30.164063l128.210938 128.214843-128.210938 128.214844c-8.34375 8.339844-8.34375 21.824219 0 30.164063 4.15625 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921875-2.089844 15.082031-6.25l128.210937-128.214844 128.214844 128.214844c4.160156 4.160156 9.621094 6.25 15.082032 6.25 5.460937 0 10.921874-2.089844 15.082031-6.25 8.34375-8.339844 8.34375-21.824219 0-30.164063zm0 0" />
            </svg>
          </CloseFullSlideButton>
          <ArrowLeftFull onClick={() => this.leftSlide()}>
            <svg viewBox="0 0 477.175 477.175">
              <path
                d="M145.188,238.575l215.5-215.5c5.3-5.3,5.3-13.8,0-19.1s-13.8-5.3-19.1,0l-225.1,225.1c-5.3,5.3-5.3,13.8,0,19.1l225.1,225
		c2.6,2.6,6.1,4,9.5,4s6.9-1.3,9.5-4c5.3-5.3,5.3-13.8,0-19.1L145.188,238.575z"
              />
            </svg>
          </ArrowLeftFull>
          <ArrowRightFull onClick={() => this.rightSlide()}>
            <svg viewBox="0 0 477.175 477.175">
              <path
                d="M360.731,229.075l-225.1-225.1c-5.3-5.3-13.8-5.3-19.1,0s-5.3,13.8,0,19.1l215.5,215.5l-215.5,215.5
		c-5.3,5.3-5.3,13.8,0,19.1c2.6,2.6,6.1,4,9.5,4c3.4,0,6.9-1.3,9.5-4l225.1-225.1C365.931,242.875,365.931,234.275,360.731,229.075z
		"
              />
            </svg>
          </ArrowRightFull>
          <FullSlideContainer>
            {slides.map((pic, index) => (
              <FullSlide
                translateX={translateX}
                key={index + 1}
                backgroundUrl={pic}
              />
            ))}
          </FullSlideContainer>
        </FullContainer>
      </>
    );
  }
}

export default Slider;
