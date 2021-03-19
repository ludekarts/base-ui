import styled from "styled-components";
import PropTypes from "prop-types";

const Columns = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;

  ${({ minSize, gap }) => `
    margin: calc(${gap} / 2 * -1);

    & > * {
      flex: 1 1 ${minSize};
      margin: calc(${gap} / 2);    
    }

  `}  
`;


Columns.displayName = "Columns";
Columns.propTypes = {
  gap: PropTypes.string,
  minSize: PropTypes.string,
};

Columns.defaultProps = {
  gap: "1em",
  minSize: "14rem",
}

export default Columns;