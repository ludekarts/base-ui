import styled from "styled-components";
import PropTypes from "prop-types";

const Space = styled.div`
  display: flex;  
  ${({ breakpoint, minmax, space, inset, spaceBefore, spaceAfter }) => !breakpoint
    ? inset ? `padding: ${space};` : `margin: ${space};`
    : `
      ${inset ? `padding: ${spaceBefore || space}` : `margin: ${spaceBefore || space}`};
      @media (${minmax === "min" ? "min-width" : "max-width"}: ${breakpoint}) {
        ${inset ? `padding: ${spaceAfter || space}` : `margin: ${spaceAfter || space}`};
      }
    `
  }  
`;

Space.displayName = "Space";

Space.propTypes = {
  space: PropTypes.string,
  inset: PropTypes.bool,
  minmax: PropTypes.string,
  breakpoint: PropTypes.string,
  spaceBefore: PropTypes.string,
  spaceAfter: PropTypes.string,
};

Space.defaultProps = {
  space: "1em 0 0",
  minmax: "min",
  inset: false,
};

export default Space;