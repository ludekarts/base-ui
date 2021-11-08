import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const IconX = ({ color, size }) => (
  <svg width={size} viewBox="0 0 42 42" fill={color}>
    <path d="M0.779,4.542c-1.039-1.039-1.039-2.723,0-3.762l0,0c1.039-1.039,2.724-1.039,3.762,0l36.68,36.68
	c1.039,1.039,1.039,2.723,0,3.762l0,0c-1.038,1.039-2.723,1.039-3.762,0L0.779,4.542z"/>
    <path d="M27.818,17.943L41.221,4.542c1.039-1.039,1.039-2.723,0-3.762c-1.038-1.039-2.723-1.039-3.762,0L24.057,14.182
		L27.818,17.943z"/>
    <path d="M4.541,41.221l13.402-13.402l-3.762-3.762L0.779,37.459c-1.039,1.039-1.039,2.724,0,3.762
		C1.818,42.26,3.503,42.26,4.541,41.221z"/>
  </svg>
)

const Wrapper = styled.button`  
  border: none;  
  font-size: 1em;
  cursor: pointer;
  border-radius: 50%;  
  padding: 0.28em;
  transition: filter .3s ease, box-shadow.3s ease;
  
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  align-items: center;
  justify-content:center;

  &:hover, &:focus {    
    outline: none;
    filter: brightness(0.8);
  }


  ${({ focusColor, color, spacing }) => `       
    background-color: ${color};
    &:focus {      
      box-shadow: 0 0 0 3px ${focusColor};
    }
   
    & > svg {
      margin: ${spacing};
    }
  `}
`;

const CloseButton = (props) => {
  const { text, size, ...rest } = props
  return (
    <Wrapper {...rest}>
      <IconX color={text} size={size} />
    </Wrapper>
  );
}


CloseButton.displayName = "CloseButton";
CloseButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  spacing: PropTypes.string,
  focusColor: PropTypes.string,
};

CloseButton.defaultProps = {
  size: "1rem",
  type: "button",
  text: "#262626",
  color: "#EEEEEE",
  spacing: "3px",
  focusColor: "rgba(66, 153, 225, 0.6)",
};

export default CloseButton;


