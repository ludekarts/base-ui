import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled.
const Input = styled.input`
  &[type="radio"],
  &[type="checkbox"] {
    margin: 0;
    padding: 0;
    opacity: 0;
    cursor: pointer;
    position: absolute;

    &:active,
    &:focus {
      outline: none;
    }

    & + span {
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      cursor: pointer;
      user-select: none;
      font-weight: bold;
      position: absolute;
      align-items: center;
      display: inline-flex;
      justify-content: center;      
      box-shadow: inset 0 0 0 0 transparent;
      transition: box-shadow .3s ease;

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
    }
    
    ${({ color, bg, rounded }) => `
      & + span {
        color: ${bg};
        border-radius: ${rounded ? "50%" : "0.2rem"};
        box-shadow: 0 0 0 0.15rem ${color} inset; 
      }

      &:checked + span {
        box-shadow: 0 0 0 1.5rem ${color} inset; 
      }

      &:focus + span {
        &::after {     
          border-radius: ${rounded ? "50%" : "0.2rem"};
          box-shadow: 0 0 0 0.15rem ${color};          
        }
      }
    `}
  }
`;

const Label = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  line-height: 1;
  position: relative;
  align-items: center;
  display: inline-flex;
  justify-content: center;  
`;

const Dot = styled.span`
  width: 0.5em;
  height: 0.5em;
  display: block;
  border-radius: 50%;
  background-color: white;
`;


// ----  Checkbox ----------------

const Checkbox = forwardRef((props, ref) => {
  const { id, name, type, color, bg, rounded, ...rest } = props;
  return (
    <Label htmlFor={id || name} color={color} bg={bg} rounded={rounded}>
      <Input id={id || name} name={name} type={type} color={color} bg={bg} rounded={rounded} ref={ref} {...rest} />
      <span>{rounded ? <Dot /> : "✓"}</span>
    </Label>
  );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string.isRequired,
  bg: PropTypes.string,
  color: PropTypes.string,
  rounded: PropTypes.bool,
  type: PropTypes.oneOf(["checkbox", "radio"]),
};

Checkbox.defaultProps = {
  type: "checkbox",
  color: "#666666",
  rounded: false,
  bg: "white",
};

export default Checkbox;
