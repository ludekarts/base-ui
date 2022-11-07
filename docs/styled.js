import React from "react";
import Icon from "./icons/info";
import styled from "styled-components";
import { Dropdown } from "../src/panels";
import { Rail } from "../src/layout";

export const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: #222222;

  ${({ theme }) => theme === "one" ? `
  --akcent-one: #ff2266;
  --akcent-two: #3355ee;
  ` : theme === "two" ? `
  --akcent-one: #673ab7;
  --akcent-two: #ffc107;
  ` : `
  --akcent-one: #009688;
  --akcent-two: #8bc34a;
  `}

  & input, & pre {
    padding: 0.8em 1em;
    border: 1px solid #ddd;
  }

  & button {
    border: none;
    text-align: left;

    &:hover {
      background-color: var(--akcent-two);
    }
  }

  .flex {
    display: flex
  }

  .text-right {
    text-align:right;
  }

  .bg-gray {
    background-color: #ddd;
  }

  .border-gray {
    border: 1px  solid #ccc;
  }

  .sharpCorners {
    border-radius: 0;
  }

  h5 {
    margin: 0.5em 0;
  }
`;

export const MiniBox = styled.span`
  display: inline-block;
  width: 1em;
  height: 1em;
  background-color: ${({ color }) => color || "#666"};
`;

export const Badge = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 3em;
  height: 1.5em;
  border-radius: 1em;
  background-color: ${({ color }) => color || "#666"};
`;

export const Box = styled.div`
  width: 100%;
  height: 80px;
  display: flex;
  min-width: 80px;
  background-color: #ddd;
  align-items: center;
  justify-content: center;

  &.nostretch {
    width: auto;
  }

  &.no-center {
    align-items: flex-start;
    justify-content: flex-start;
  }

  &.no-bg {
    background-color: transparent;
  }

  &.reular {
    width: auto;
    height: auto;
  }

  &.fixbox {
    width: 15.5em;   
    height: auto;     
  }

  &.rounded {
    border-radius: 1em;
  }
  
  &.color {
    background-color: rebeccapurple;
  }
  
  &.color:last-child {
    background-color: gold;
  }
`;

export const Menu = styled.div`
  position: relative;
`;

export const DropList = styled(Dropdown)`
  z-index: 20;
  padding: 1em;
  top: 120%;
  width: 11rem;
  position: absolute;
  border-radius: 0.2em;
  border: 1px solid #ddd;
  background-color: white;
  box-shadow: var(--bui-box-shadow);
`;

export const MobileMenu = styled.div`
  bottom: 0;
  width: 100%;
  position: fixed;
  padding: 0.5em;
  background-color: #eee;
`;

export const SomeContainer = styled.div`
  width: 100%;
  max-width: 100%; 
  height: 340px;
  background-color: #ddd;
`;

export const TextIcon = props => {
  const { children, icon } = props;
  return (
    <Rail gap="0.5em">
      <span>{children}</span>
      {
        icon && <Icon />
      }
    </Rail>
  );
}

export const SwitchIcon = props => {
  const { children, icon } = props;
  return (
    <Rail gap="0.5em">
      {
        icon ? <Icon /> : children
      }
    </Rail>
  );
}

export const Nav = styled.nav`
  width: 100%;
  display: flex;
  background-color: ${({ bg = "white" }) => bg};
`;

export const SlideContainer = styled.div`
  width: 400px;
  height: 150px;
  display: flex;
  overflow: hidden;
  position: relative;
  justify-content: center;
`;