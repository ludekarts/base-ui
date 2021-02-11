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
      color: ${({ bg }) => bg};
      box-shadow: inset 0 0 0 0 transparent;
      transition: box-shadow .3s ease;
    }
    
    &:checked + span {
      box-shadow: inset 0 0 0 1.15rem ${({ color }) => color};
    }

  }
`;

const Label = styled.label`
  width: 1.5rem;
  height: 1.5rem;
  flex-shrink: 0;
  line-height: 1em;
  overflow: hidden;
  position: relative;
  border-radius: 2px;
  align-items: center;
  display: inline-flex;
  justify-content: center;
  
  &::before {
    top:0;
    left: 0;
    right: 0;
    bottom: 0;
    content: "";
    position: absolute;
    box-shadow: ${({ color }) => `inset 0.15em 0.15em 0px ${color}, inset -0.15em -0.15em 0px ${color}`}; 
  }
`;

// ----  Checkbox ----------------

const Checkbox = forwardRef((props, ref) => {
  const { id, name, mode, color, bg, required, onChange, value, defaultValue, ...rest } = props;
  return (
    <Label htmlFor={id} color={color}>
      <Input
        bg={bg}
        id={id}
        ref={ref}
        name={name}
        type={mode}
        color={color}
        value={value}
        required={required}
        onChange={onChange}
        defaultValue={defaultValue}
        {...rest}
      />
      <span>✓</span>
    </Label>
  );
});

Checkbox.displayName = "Checkbox";

Checkbox.propTypes = {
  id: PropTypes.string.isRequired,
  bg: PropTypes.string,
  name: PropTypes.string,
  color: PropTypes.string,
  required: PropTypes.bool,
  onChange: PropTypes.func,
  value: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  defaultValue: PropTypes.oneOfType([
    PropTypes.number,
    PropTypes.string,
  ]),
  mode: PropTypes.oneOf(["checkbox", "radio"]),
};

Checkbox.defaultProps = {
  name: PropTypes.string.isRequired,
  mode: "checkbox",
  color: "#666666",
  bg: "white",
};

export default Checkbox;
