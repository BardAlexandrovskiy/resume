import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #242424;
  box-shadow: 0 0 10px #242424;
  padding: 50px 0;
  border-radius: 5px;
  position: relative;
`;

export const Slide = styled.li`
  width: 100%;
  display: inline-block;
  transform: translateX(-${(props) => props.translateX}%);
  transition: transform 1.2s;
  position: relative;
`;

export const Pic = styled.img`
  display: block;
  width: 100%;
`;

export const Title = styled.h3`
  font-size: 20px;
  color: white;
  position: absolute;
  top: ${(props) => props.top}px;
  opacity: ${(props) => props.opacity};
  left: 10px;
  background-color: #2988bc;
  padding: 5px;
  border-radius: 5px;
  transition: top 1s, opacity 0.5s;
`;

export const LinkText = styled.a`
  font-size: 20px;
  color: white;
  position: absolute;
  right: 10px;
  bottom: -200px;
  background-color: #ed8c72;
  padding: 5px;
  border-radius: 5px;
  bottom: ${(props) => props.bottom}px;
  opacity: ${(props) => props.opacity};
  transition: bottom 1s, opacity 0.5s;
`;

export const ToggleButtonsContainer = styled.div`
  position: absolute;
  bottom: 6px;
  left: 10px;
`;

export const ToggleButton = styled.button`
  padding: 10px;
  margin-right: 15px;

  &:last-child {
    margin-right: 0;
  }
`;

export const ToggleButtonVisibleBlock = styled.div`
  width: 19px;
  height: 19px;
  background-color: white;
  /* transform: scale(2); */
`;
