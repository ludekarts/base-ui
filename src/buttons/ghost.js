import PropTypes from "prop-types";
import styled from "styled-components";

import Button from "./basic";


const GhostButton = styled(Button)`
 ${({ color, bg, rounded, inverse, uppercase, gap }) => `
    color: ${inverse ? bg : color};
    border: 2px solid ${color};
    border-radius: ${rounded ? "3rem" : "0.2rem"};
    background-color: ${inverse ? color : bg};
    box-shadow: 0 0 0 0 transparent;
    text-transform:${uppercase ? "uppercase" : "none"};    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${color};
    }
  `}
`;

/*

const GhostButton = styled.button`
  cursor: pointer;
  font-size: 1em;
  line-height: 1em;
  padding: 0.4em 1em;
  overflow: hidden;
  position: relative;
  text-align: center;
  align-items: center;
  display: inline-flex;
  text-decoration: none;
  background-color: none;  
  font-family: sans-serif;
  transition: color 0.3s ease, background-color 0.3s ease, box-shadow 0.3s ease;

  & > * {
    pointer-events: none;
  }

  ${({ color, fill, rounded, inverse, uppercase, gap }) => `
    color: ${inverse ? fill : color};
    border: 2px solid ${color};
    border-radius: ${rounded ? 20 : 2}px;
    background-color: ${inverse ? color : fill};
    box-shadow: 0 0 0 0 transparent;
    text-transform:${uppercase ? "uppercase" : "none"};    
    &:focus {
      outline: none;
      box-shadow: 0 0 0 2px ${color};
    }

    ${!gap ? "" : `& > * + * { margin-left: ${gap}; }`}
  `}

  &::before {
    top: 50%;
    left: 50%;
    content: "";
    width: 40%;
    height: 40%;
    position: absolute;
    border-radius: 2em;
    background-color: rgba(0, 0, 0, 0);
    transform: translateX(-50%) translateY(-50%);
    transition: width 0.2s ease, height 0.2s ease, background-color 0.2s ease;
  }

  &:active::before {
    top: 50%;
    left: 50%;
    content: "";
    width: 120%;
    height: 120%;
    position: absolute;
    border-radius: 2em;
    background: rgba(0, 0, 0, 0.15);
    transform: translateX(-50%) translateY(-50%);
  }

  &:disabled {
    color: #666;
    cursor: auto;
    background-color: #eee;
    border: 2px solid #eee;

    &:hover,
    &:focus {
      color: #666;
      background-color: #eee;
    }
  }

  &:hover {
    outline: none;
    ${({ color, fill, inverse }) => `
      color: ${inverse ? color : fill};
      background-color: ${inverse ? fill : color};
      & svg {
        fill: ${inverse ? color : fill} !important;
      }
    `};
  }

  ${({ active, color, fill, inverse }) =>
    active && `
    outline: none;
    color: ${inverse ? color : fill};
    background-color: ${inverse ? fill : color};
    & svg {
      fill: ${inverse ? color : fill} !important;
    }`

  }
`;

*/
GhostButton.propTypes = {
  inverse: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  rounded: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
  uppercase: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

GhostButton.defaultProps = {
  bg: "#FFFFFF",
  color: "#666666",
};

export default GhostButton;
