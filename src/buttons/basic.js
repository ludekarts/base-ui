import styled from "styled-components";
import PropTypes from "prop-types";

const ButtonBasic = styled.button`
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
  transition: filter .3s ease;

  ${({ size, text, color, inverse }) => `
    ${size === "lg" ? "padding: 1rem 1.5rem;" : size === "sm" ? "padding: 0.2rem 0.5rem;" : "padding: 0.5rem 1rem;"}
    background-color: ${inverse ? text : color};
    color: ${inverse ? color : text};
   
    &::before {
      content: "";
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      z-index: -1;
      opacity: 0.6;
      position: absolute;   
      border-radius: inherit;      
      transition: box-shadow .3s ease;
    }

    &:focus {
      outline: none;            
      &::before {                
        box-shadow: 0 0 0 3px ${color === "#dddddd" || color === "transparent" ? "rgb(66, 153, 225)" : color} ;
      }
    }
  `}

  & > * {
    pointer-events: none;
  }

  &:hover {
    filter: brightness(80%);
  }

  &:disabled {
    pointer-events: none;
    opacity: 0.6;
  }  
`;

ButtonBasic.propTypes = {
  disabled: PropTypes.bool,
  color: PropTypes.string,
  text: PropTypes.string,
  type: PropTypes.string,
  inverse: PropTypes.oneOfType([
    PropTypes.bool,
    PropTypes.number,
  ]),
};

ButtonBasic.defaultProps = {
  disabled: false,
  inverse: false,
  text: "inherit",
  type: "button",
  color: "#dddddd",
};

export default ButtonBasic;