import PropTypes from "prop-types";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  display: flex;  
  padding: 0 1.5em;  
  flex-direction: column;
  ${({ maxW, offsetTop }) => `
    max-width: ${maxW};
    margin: ${offsetTop} auto 1em;
  `};
`;

Container.displayName = "Containter";

Container.propTypes = {
  maxW: PropTypes.string,
  offsetTop: PropTypes.string,
};

Container.defaultProps = {
  maxW: "78rem",
  offsetTop: "2rem",
};

export default Container;
