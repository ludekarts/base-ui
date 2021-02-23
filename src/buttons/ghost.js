import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  z-index: 1;
  border: none;  
  cursor: pointer;
  font-size: 1rem;    
  position: relative;
  line-height: 1.3rem;
  font-family: inherit;
  display: inline-flex;
  text-decoration: none;
  justify-content: center;  
  -moz-appearance: none;
  -webkit-appearance: none;  
  background-color: transparent;
  transition: color .3s ease;

  & > span.base-ui-button-text {
    z-index: 1;
  }
  
  & > span.base-ui-button-effect {  
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;        
    position: absolute;
    border-radius: inherit;      
    transition: background-color .3s ease, box-shadow .3s ease;

    &::before {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;      
      position: absolute;   
      border-radius: inherit;
      background-color: rgba(0, 0 , 0, 0);
      transition: background-color .3s ease, box-shadow .3s ease;
    }

    &::before {
      opacity: 0.6;
    }
  }

  ${({ size, text, color, inverse, rounded, active, uppercase }) => `
    ${size === "lg" ? "padding: 1rem 1.5rem;" : size === "sm" ? "padding: 0.2rem 0.5rem;" : "padding: 0.5rem 1rem;"}
    color: ${inverse ? text : color};
    text-transform: ${uppercase ? "uppercase" : "none"};
    
    & > span.base-ui-button-effect {
      border-radius: ${rounded ? "2rem" : "0.2rem"};
      box-shadow: 0 0 0 0.15rem ${color} inset;
      background-color: ${inverse ? color : text};
    }

    &:focus {
      outline: none;            
      & > span.base-ui-button-effect::before {
        box-shadow: 0 0 0 3px ${color === "#999999" || color === "transparent" ? "black" : color} ;       
      }
    }

    &:hover, &.active {
      color: ${inverse ? color : text};
      & > span.base-ui-button-effect {
        background-color: ${inverse ? text : color};        
      }
    }

    ${!active ? "" : `
     color: ${inverse ? color : text};
      & > span.base-ui-button-effect {
        background-color: ${inverse ? text : color};        
      }
    `}

    &:active {
      & > span.base-ui-button-effect {             
        filter: brightness(0.9);              
      }
    }
  `}

  & > * {
    pointer-events: none;
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }  

`;

const GhostButton = props => {
  const { children, ...rest } = props;
  return (
    <ButtonWrapper {...rest}>
      <span className="base-ui-button-effect"></span>
      <span className="base-ui-button-text">{children}</span>
    </ButtonWrapper>
  );
}

GhostButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
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
  disabled: false,
  inverse: false,
  text: "inherit",
  type: "button",
  color: "#999999",
};

GhostButton.displayName = "GhostButton";

export default GhostButton;

