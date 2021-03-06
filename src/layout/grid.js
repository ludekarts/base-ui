import styled from "styled-components";
import PropTypes from "prop-types";

const Grid = styled.div`
  width: 100%;
  display: grid;
  grid-gap: ${({ gap }) => gap};
  grid-template-columns: repeat(auto-fill, minmax(${({ size }) => size}, 1fr));

  & > * {
    ${({ align }) => `      
      justify-self: ${align};
    `}
  }
`;

Grid.displayName = "Grid";

Grid.propTypes = {
  gap: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
};

Grid.defaultProps = {
  gap: "1em",
  size: "16rem",
  align: "center",
};

export default Grid;
