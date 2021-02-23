import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { Button } from ".";

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
  border-radius: 0.2rem;
  justify-content: center;  
  -moz-appearance: none;
  -webkit-appearance: none;  
  background-color: transparent;

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
    
    /* Focus effect */
    &::before {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;      
      opacity: 0.6;
      position: absolute;   
      border-radius: inherit;
      background-color: rgba(0, 0 , 0, 0);
      transition: background-color .3s ease, box-shadow .3s ease;
    }
  }

  ${({ size, text, color, inverse }) => `
    ${size === "lg" ? "padding: 1rem 1.5rem;" : size === "sm" ? "padding: 0.2rem 0.5rem;" : "padding: 0.5rem 1rem;"}
    color: ${inverse ? color : text};
    
    & > span.base-ui-button-effect {  
      background-color: ${inverse ? text : color};      
    }

    &:focus {
      outline: none;            
      & > span.base-ui-button-effect::before {
        box-shadow: 0 0 0 3px ${color === "#DDDDDD" || color === "transparent" ? "black" : color} ;      
      }
    }

    &:hover {
      & > span.base-ui-button-effect::before {       
        background-color: rgba(0, 0, 0, 0.2);
      }
    }

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

const BasicButton = props => {
  const { children, ...rest } = props;
  return (
    <ButtonWrapper {...rest}>
      <span className="base-ui-button-effect"></span>
      <span className="base-ui-button-text">{children}</span>
    </ButtonWrapper>
  );
}

BasicButton.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  inverse: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

BasicButton.defaultProps = {
  disabled: false,
  inverse: false,
  text: "inherit",
  type: "button",
  color: "#DDDDDD",
};

BasicButton.displayName = "BasicButton";
export default BasicButton;

