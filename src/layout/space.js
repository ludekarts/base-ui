import styled from "styled-components";
import PropTypes from "prop-types";

const Space = styled.div`
  display: flex;
  width: ${({ stretch }) => stretch ? "100%" : "auto"};
  ${({ size, inset, children }) => !children ? `margin: ${size} 0 0` : inset ? `padding: ${size}` : `margin: ${size}`};
`;

Space.propTypes = {
  size: PropTypes.string,
  inset: PropTypes.bool,
  stretch: PropTypes.bool,
};

Space.defaultProps = {
  size: "1em",
  stretch: false,
};

export default Space;