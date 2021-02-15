import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled.
const Label = styled.label`
  font-size: ${({ size }) => size === "lg" ? "1.5rem" : size === "sm" ? "0.75rem" : "1rem"};
  width: 2.8em;
  height: 1.6em;
  flex-shrink: 0;
  position: relative;  
  display: inline-flex;
  
  & > input {
    opacity:0;
    &:checked + span {
      background-color: ${({ color, offColor }) => offColor || color};
      &::before {
        transform: translateX(1.2em) translateZ(0);
      }    
    }

    &:checked:focus + span {
      &::after {                
        box-shadow: 0 0 0 3px  ${({ color, offColor }) => offColor || color};
      }
    }

    &:focus + span {
      &::after {                
        box-shadow: 0 0 0 3px ${({ color }) => color};
      }
    }
  }
`;

const Slider = styled.span`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  font-size: inherit;
  position: absolute;  
  transition: right .2s ease, background-color .2s ease;
  
  ${({ color, squared }) => `
    border-radius: ${squared ? "0.1em" : "2em"};
    background-color: ${color};

    &::before {
      border-radius: ${squared ? "0.1em" : "50%"}; 
    }
  `};
  
  &::before {
    content: "";
    left: 0.2em;
    width: 1.2em;
    height: 1.2em;
    bottom: 0.2em;    
    position: absolute;
    background-color: #FFFFFF;
    transition: transform .2s ease;
  }

  &::after {
    content: "";
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: -1;
    opacity: 0.5;
    position: absolute;   
    border-radius: inherit;      
    transition: box-shadow .3s ease;
  }
`;

const Switch = forwardRef((props, ref) => {
  const { id, name, type, color, size, offColor, squared, ...rest } = props;
  return (
    <Label htmlFor={id || name} size={size} color={color} offColor={offColor}>
      <input id={id || name} name={name} type={type} ref={ref} {...rest} />
      <Slider color={color} squared={squared} />
    </Label>
  );
});


Switch.displayName = "Switch";

Switch.propTypes = {
  size: PropTypes.string,
  color: PropTypes.string,
  squared: PropTypes.bool,
  offColor: PropTypes.string,
  name: PropTypes.string.isRequired,
  type: PropTypes.oneOf(["checkbox", "radio"]),
};

Switch.defaultProps = {
  size: "md",
  squared: false,
  color: "#666666",
  type: "checkbox",
};

export default Switch;
