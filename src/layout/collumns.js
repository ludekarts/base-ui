import styled from "styled-components";
import PropTypes from "prop-types";

const Collumns = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  & > * {
    flex: 1 1 ${({ minSize }) => minSize};
    margin: 0; 
  }
`;

Collumns.displayName = "Collumns";
Collumns.propTypes = {
  gap: PropTypes.string,
  minSize: PropTypes.string,
};

Collumns.defaultProps = {
  gap: "1em",
  minSize: "14rem",
}

export default Collumns;