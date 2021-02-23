import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const ButtonWrapper = styled.button`
  z-index: 1;
  border: none;  
  flex-grow: 0;
  flex-shrink: 0;
  cursor: pointer;     
  position: relative;
  line-height: 1.3em;
  font-family: inherit;
  display: inline-flex;
  text-decoration: none;
  align-items: center; 
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
      transition: background-color .3s ease, box-shadow .3s ease;
    }

    /* Highlight effect */
    &::after {
      content: "";
      top: 50%;
      left: 50%;
      width: 100%;      
      height: 100%;      
      position: absolute;   
      border-radius: inherit;      
      transition: transform .3s ease, opacity .3s ease;
    }
  }

  ${({ size, color, activeText, square, outline, active }) => `
    font-size: ${size === "lg" ? "1.5rem" : size === "sm" ? "0.57rem" : "1em"};
    width: 1em;
    height: 1em;
    padding: 1em;
    color: ${outline ? color : "inherit"};
    border-radius: ${square ? "0.2em" : "50%"};

    & > span.base-ui-button-effect {
      box-shadow: 0 0 0 ${outline ? "0.1em" : "0"} ${outline ? color : "none"} inset;
    }
     
    & > span.base-ui-button-effect::after {       
      opacity: 0;
      background-color: ${color};
      transform: translate3d(-50%, -50%, 0) scale(0.2);
    }    
    
    &:focus {
      outline: none;                  
      & > span.base-ui-button-effect::before {
        box-shadow: 0 0 0 3px ${color === "rgba(0, 0, 0, 0.2)" || color === "transparent" ? "black" : color} ;      
      }
    }

    &:hover {
      color: ${activeText};
      & > span.base-ui-button-effect::after {       
        opacity: 1;        
        transform: translate3d(-50%, -50%, 0) scale(1);
      }
    }

    ${!active ? "" : `    
      color: ${activeText};
      & > span.base-ui-button-effect::after {       
        opacity: 1;        
        transform: translate3d(-50%, -50%, 0) scale(1);
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

const HighlightButton = props => {
  const { children, ...rest } = props;
  return (
    <ButtonWrapper {...rest}>
      <span className="base-ui-button-effect"></span>
      <span className="base-ui-button-text">{children}</span>
    </ButtonWrapper>
  );
}


HighlightButton.displayName = "HighlightButton";
HighlightButton.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
};

HighlightButton.defaultProps = {
  color: "rgba(0, 0, 0, 0.2)",
  activeText: "inherit"
};

export default HighlightButton;

/*
import styled from "styled-components";
import PropTypes from "prop-types";

const HighlightButton = styled.button`
  z-index: 0;
  border: none;
  flex-shrink: 0;
  background: none;
  border-radius: 50%;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;

  ${({ size, color }) => `
    width: ${size};
    height: ${size};

    &:hover::before {
      background-color:${color};
    }
  `}

  &:focus {
    outline: none;
  }

  &::before {
    top: 50%;
    left: 50%;
    content: "";
    width: 60%;
    height: 60%;
    z-index: -1;
    cursor: pointer;
    position: absolute;
    border-radius: 50%;
    background-color: rgba(0, 0, 0, 0);
    transform: translateX(-50%) translateY(-50%);
    transition: width 0.3s ease, height 0.3s ease, background-color 0.3s ease;
  }

  &:hover::before {
    width: 100%;
    height: 100%;
    position: absolute;
    border-radius: 50%;
    transform: translateX(-50%) translateY(-50%);
  }

  ${({ active, color }) => !active ? "" : `
    &::before {
      width: 100%;
      height: 100%;
      position: absolute;
      border-radius: 50%;
      background-color:${color};
      transform: translateX(-50%) translateY(-50%);
    }
  `}
`;

HighlightButton.displayName = "HighlightButton";

HighlightButton.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  type: PropTypes.string,
  active: PropTypes.bool,
};

HighlightButton.defaultProps = {
  size: "2em",
  active: false,
  type: "button",
  color: "rgba(0, 0, 0, 0.1)",
};

export default HighlightButton;

*/