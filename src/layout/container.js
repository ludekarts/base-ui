import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;    
  flex-direction: column;
  ${({ mxw, offsetTop, spacing }) => `
    max-width: ${mxw};
    padding: ${spacing};
    margin: ${offsetTop} auto 1em;
  `};
`;

Container.displayName = "Containter";

Container.propTypes = {
  mxw: PropTypes.string,
  spacing: PropTypes.string,
  offsetTop: PropTypes.string,
};

Container.defaultProps = {
  mxw: "78rem",
  offsetTop: "2rem",
  spacing: "0 1.5em",
};

export default Container;
