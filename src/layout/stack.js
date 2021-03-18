import PropTypes from "prop-types";
import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  
  ${({ stretch, gap, expandContent }) => `
    ${stretch ? "width: 100%;" : ""}
    ${expandContent ? "& > * { width: 100% !important; }" : ""}
    & > * + * {
      margin-top: ${gap};
    }  
  `};
  
  ${({ breakpoint, gap }) => !breakpoint ? "" : `
    @media (min-width: ${breakpoint}) {
      flex-direction: row;            
      & > * + * {
        margin-top: unset;
        margin-left: ${gap};
      }
    }  
  `}
`;

Stack.displayName = "Stack";
Stack.propTypes = {
  gap: PropTypes.string,
  breakpoint: PropTypes.string,
  stretch: PropTypes.bool,
  expandContent: PropTypes.bool,
};

Stack.defaultProps = {
  gap: "1em",
  stretch: false,
  expandContent: false,
};

export default Stack;
