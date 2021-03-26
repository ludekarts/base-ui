import PropTypes from "prop-types";
import styled from "styled-components";

const CloseButton = styled.button`  
  border: none;  
  display: flex;
  cursor: pointer;
  border-radius: 50%;  
  align-items: center;
  justify-content:center;
  transition: filter .3s ease;

  &:hover, &:focus {    
    outline: none;
    filter: brightness(0.8);
  }

  &:before {
    content: "⛌";
    color: inherit;
  }

  ${({ size, focusColor, color, text }) => `
    width: ${size};
    height: ${size};
    color: ${text};
    background-color: ${color};
    &:focus {      
      box-shadow: 0 0 0 3px ${focusColor};
    }
  `}
`;

CloseButton.displayName = "CloseButton";
CloseButton.propTypes = {
  text: PropTypes.string,
  color: PropTypes.string,
  size: PropTypes.string,
  type: PropTypes.string,
  focusColor: PropTypes.string,
};

CloseButton.defaultProps = {
  size: "1.5em",
  type: "button",
  text: "inherit",
  color: "#EEEEEE",
  focusColor: "rgba(66, 153, 225, 0.6)",
};

export default CloseButton;


