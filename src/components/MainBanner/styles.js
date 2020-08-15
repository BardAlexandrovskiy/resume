import styled from "styled-components";

export const Container = styled.ul`
  width: 100%;
  overflow: hidden;
  white-space: nowrap;
  background-color: #242424;
  box-shadow: 0 0 10px #242424;
  padding: 50px 0;
  border-radius: 5px;
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
  top: -42px;
  left: 10px;
  background-color: #2988bc;
  padding: 5px;
  border-radius: 5px;
`;

export const LinkText = styled.a`
  font-size: 20px;
  color: white;
  position: absolute;
  right: 10px;
  bottom: -42px;
  background-color: #ed8c72;
  padding: 5px;
  border-radius: 5px;
`;
