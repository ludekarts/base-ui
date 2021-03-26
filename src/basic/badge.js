import PropTypes from "prop-types";
import styled from "styled-components";

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  font-size: 0.9em;
  padding: 0.3em;
  border-radius: 2em;

  ${({ justify, mnw, color }) => `
    min-width: ${mnw};
    background-color: ${color};
    justify-content: ${justify};
  `}  
`;

Badge.displayName = "Badge";
Badge.propTypes = {
  justify: PropTypes.string,
  children: PropTypes.node,
  onClose: PropTypes.func,
  color: PropTypes.string,
  mnw: PropTypes.string,
};

Badge.defaultProps = {
  justify: "center",
  color: "#CCCCCC",
  mnw: "3rem",
};

export default Badge;