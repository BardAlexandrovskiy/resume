import styled from "styled-components";

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
  border: 1px solid black;
  overflow: hidden;
  display: flex;
  width: 100%;
  height: 100%;
`;

export const Slide = styled.img`
  width: 100%;
  height: 100%;
  transform: translateX(-${(props) => props.translateX}%);
  transition: transform 0.3s;
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
