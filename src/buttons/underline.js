import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonWrapper = styled.button`
  z-index: 1;
  border: none;  
  cursor: pointer;
  font-size: 1em;    
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
  transition: color .3s ease;

  & > span.base-ui-button-text {
    z-index: 1;
    width: 100%;
    height: 100%;
    display: flex;    
    align-items: center;
    justify-content: center;
  }
  
  & > span.base-ui-button-effect {  
    /* Button's effec container */
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 0;        
    display: flex;
    position: absolute;
    border-radius: inherit;      
    transition: background-color .3s ease, box-shadow .3s ease, filter .3s ease;

    &::before {
      /* Button background */
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;      
      opacity: 0.6;
      position: absolute;   
      border-radius: inherit;
      background-color: rgba(0, 0 , 0, 0);
      transition: background-color .3s ease, box-shadow .3s ease, opacity .3s ease;
    }

    &::after {
      /* Button underline */
      bottom: 0;
      left: 51%;
      right: 51%;
      height: 3px;
      content: "";
      position: absolute;
      border-radius: 0.2em 0.2em 0 0;
      transition: left .3s ease, right .3s ease; 
    }
  }

  ${({ size, text, color, inverse, active, outlineFocus }) => `
    ${size === "lg" ? "padding: 0.8em 1.5em;" : size === "sm" ? "padding: 0.3em 0.8em;" : "padding: 0.5em 1em;"}
    font-size: ${size === "lg" ? "1rem" : size === "sm" ? "0.85rem" : "1em"};
    color: ${inverse ? color : text};
    
    & > span.base-ui-button-effect {
      background-color: ${inverse ? text : color};
      &::after {         
        background-color: ${inverse ? color : text};
      }
    }

    & svg {
      fill: ${inverse ? color : text};
      transition: fill .3s ease;
    }

    ${outlineFocus ? `
      &:focus {
        outline: none;            
        & > span.base-ui-button-effect::before {
          box-shadow: 0 0 0 3px ${color === "#999999" || color === "transparent" ? "black" : color} ;       
        }
      }
    ` : `
      &:focus {
        outline: none;            
        & > span.base-ui-button-effect:before {          
          background-color: rgba(0, 0 , 0, .3);
        }
      }
    `}
    
    &.active {
      color: ${inverse ? color : text};
     
      & svg {
        fill: ${inverse ? color : text};
      }

      & > span.base-ui-button-effect {
        background-color: ${inverse ? color : text};
      }

      & > span.base-ui-button-effect::after {
        left: 10%;
        right: 10%;        
        background-color: ${inverse ? color : text};
      }

      &.active-inverse {
        color: ${inverse ? text : color};

        & svg {
          fill: ${inverse ? text : color};
        }

        & > span.base-ui-button-effect {
          background-color: ${inverse ? color : text};
        }

        & > span.base-ui-button-effect::after {
          left: 10%;
          right: 10%;        
          background-color: ${inverse ? text : color};
        }
      }
    }

    ${!active ? `` : `
      color: ${inverse ? color : text};

      & svg {
        fill: ${inverse ? color : text};
      }

      & > span.base-ui-button-effect {
        background-color: ${inverse ? text : color};
      }

      & > span.base-ui-button-effect::after {
        left: 10%;
        right: 10%;        
        background-color: ${inverse ? color : text};
      }

      &.active-inverse {
        color: ${inverse ? text : color};

        & svg {
          fill: ${inverse ? text : color};
        }

        & > span.base-ui-button-effect {
          background-color: ${inverse ? color : text};
        }

        & > span.base-ui-button-effect::after {
          left: 10%;
          right: 10%;        
          background-color: ${inverse ? text : color};
        }
      }
    `}

    &:hover {
      & > span.base-ui-button-effect {
        filter: brightness(0.9);              
        &::after {
          left: 0;
          right: 0;
        }
      }      
    }

    &:active {
      & > span.base-ui-button-effect {             
        filter: brightness(0.9);              
      }
      
      & > span.base-ui-button-effect::after {
        left: 10%;
        right: 10%;
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

const UnderlineButton = props => {
  const { children, ...rest } = props;
  return (
    <ButtonWrapper {...rest}>
      <span className="base-ui-button-effect"></span>
      <span className="base-ui-button-text">{children}</span>
    </ButtonWrapper>
  );
}

UnderlineButton.propTypes = {
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
  outlineFocus: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

UnderlineButton.defaultProps = {
  disabled: false,
  outlineFocus: 0,
  inverse: 0,
  active: 0,
  type: "button",
  text: "#000000",
  color: "#999999",
};

UnderlineButton.displayName = "UnderlineButton";

export default UnderlineButton;

