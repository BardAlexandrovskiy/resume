import styled from 'styled-components';

export const ContainerForButtons = styled.div`
  position: relative;
  width: 450px;
  height: 300px;
  margin-left: 50px;
  margin-right: 50px;

  @media (max-width: 736px) {
    width: 335px;
    height: 250px;
    margin-left: 0;
    margin-right: 0;
  }

  @media (max-width: 360px) {
    width: 300px;
    height: 220px;
  }
`;

export const Container = styled.div`
  overflow: hidden;
  width: inherit;
  height: inherit;
  white-space: nowrap;
  border-radius: 20px;
  background-color: #242424;
  box-shadow: 0 0 10px #242424;
`;

export const Slide = styled.div`
  width: inherit;
  height: inherit;
  transform: translateX(-${(props) => props.translateX}%);
  transition: transform 0.3s;
  display: inline-block;
  background: url(${(props) => props.backgroundUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
`;

export const ArrowRight = styled.button`
  width: 50px;
  height: 50px;
  position: absolute;
  top: 125px;
  fill: #242424;
  right: -50px;
  opacity: 0.5;

  @media (max-width: 736px) {
    right: 0;
    top: 100px;
  }

  &:active {
    transform: scale(1.2);
    opacity: 0.3;
  }
`;

export const ArrowLeft = styled(ArrowRight)`
  left: -50px;

  @media (max-width: 736px) {
    left: 0;
  }
`;

export const FullContainer = styled.div`
  display: ${(props) => (props.isFull ? 'flex' : 'none')};
  position: absolute;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 100;
  justify-content: center;
  align-items: center;
  min-width: 320px;
`;

export const CloseFullSlideButton = styled.button`
  width: 70px;
  height: 70px;
  fill: white;
  position: absolute;
  top: 0px;
  right: 0px;
  opacity: 0.6;
  z-index: 201;
  top: 25px;
  right: 25px;

  @media (max-width: 1400px) {
    width: 50px;
    height: 50px;
  }

  @media (max-width: 736px) {
    width: 30px;
    height: 30px;
    top: 14px;
    right: 14px;
  }
`;

export const ArrowRightFull = styled.button`
  width: 100px;
  height: 300px;
  fill: white;
  opacity: 0.6;
  position: absolute;
  top: calc(50% - 150px);
  right: 0;
  z-index: 200;

  &:active {
    transform: scale(1.2);
    opacity: 0.3;
  }

  @media (max-width: 1400px) {
    width: 75px;
  }

  @media (max-width: 1024px) {
    fill: black;
  }

  @media (max-width: 736px) {
    width: 50px;
    height: 200px;
  }

  @media (max-width: 736px) {
    top: calc(50% - 100px);
  }
`;

export const ArrowLeftFull = styled(ArrowRightFull)`
  left: 0;
`;

export const FullSlideContainer = styled.div`
  overflow: hidden;
  width: calc(100% - 200px);
  height: calc(100% - 200px);
  white-space: nowrap;
  background-color: transparent;

  @media (max-width: 1400px) {
    width: calc(100% - 150px);
    height: calc(100% - 150px);
  }

  @media (max-width: 1024px) {
    width: 100%;
    height: 100%;
  }
`;

export const FullSlide = styled.div`
  width: 100%;
  height: 100%;
  transform: translateX(-${(props) => props.translateX}%);
  transition: transform 0.3s;
  display: inline-block;
  background: url(${(props) => props.backgroundUrl});
  background-size: contain;
  background-repeat: no-repeat;
  background-position-x: 50%;
  background-position-y: 50%;
`;
