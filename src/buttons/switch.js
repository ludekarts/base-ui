import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Styled.
const SwitchButton = styled.label`
  width: 2.8em;
  height: 1.6em;
  flex-shrink: 0;
  position: relative;
  display: inline-block;

  & > input {
    display:none;
    &:checked + div {
      background: ${({ color }) => color || "#666"};

      &::before {
        transform: translateX(1.2em) translateZ(0);
      }

      &::after {
        right: none;
        left: 0.4em;
        bottom: 0.2em;
        line-height: 1.2em;
        content: "${({ off }) => off}";
      }
    }
  }
`;

const Slider = styled.div`
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  cursor: pointer;
  position: absolute;
  border-radius: 2em;
  transition: right .2s ease;
  background: ${({ color }) => color || "#666"};

  &::after {
    right: 0.4em;
    bottom: 0.2em;
    color: white;
    font-size: 1.2em;
    font-weight: bold;
    position: absolute;
    line-height: 1.2em;
    font-family: monospace;
    content: "${({ on }) => on}";
  }

  &::before {
    content: "";
    left: 0.2em;
    bottom: 0.2em;
    width: 1.2em;
    height: 1.2em;
    border-radius: 50%;
    position: absolute;
    transition: transform .2s ease;
    background-color: #fff;
  }
`;

const Switch = props => {
  const { id, name, checked, onChange, color, onGlyph, offGlyph, value, defaultChecked, ...rest } = props;
  return (
    <SwitchButton htmlFor={id} off={offGlyph} color={color} {...rest} >
      <input
        id={id}
        name={name}
        value={value}
        type="checkbox"
        checked={checked}
        onChange={onChange}
        defaultChecked={defaultChecked} />
      <Slider on={onGlyph} color={color} />
    </SwitchButton>
  );
};

Switch.displayName = "Switch";

Switch.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string,
  checked: PropTypes.bool,
  onChange: PropTypes.func,
  color: PropTypes.string,
  value: PropTypes.string,
  onGlyph: PropTypes.string,
  offGlyph: PropTypes.string,
  defaultChecked: PropTypes.bool,
};

Switch.defaultProps = {
  color: "#666666",
};

export default Switch;
