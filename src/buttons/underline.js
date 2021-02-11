import styled from "styled-components";
import PropTypes from "prop-types";
import Button from "./basic";

const UnderlineButton = styled(Button)`

  border-radius: initial;
  
  ${({ color, bg, inverse }) => `
    background-color: ${inverse ? color : bg};
    color: ${inverse ? bg : color};
    &::after {
      background-color: ${inverse ? bg : color};
    }
  `};

  &::after {
    bottom: 0;
    left: 51%;
    right: 51%;
    height: 3px;
    content: "";
    position: absolute;
    transition: left .3s ease, right .3s ease;    
  }

  &:hover {
    filter: none;
    &::after {
      left: 0;
      right: 0;
    }
  }
`;

UnderlineButton.defaultProps = {
  bg: "white",
  active: 0,
  inverse: 0,
  color: "#222222",
};

UnderlineButton.propTypes = {
  bg: PropTypes.string,
  color: PropTypes.string,
};

export default UnderlineButton;
