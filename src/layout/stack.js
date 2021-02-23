import PropTypes from "prop-types";
import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ gap }) => gap};
  }
  
  ${({ stretch, breakpoint, gap, expandContent }) => !breakpoint ? `
    ${stretch ? "width: 100%;" : ""}
    ` : `  
    ${stretch ? "width: 100%;" : ""}
    
    @media (min-width: ${breakpoint}) {
      flex-direction: row;      
      
      ${expandContent ? "& > * { width: 100%; }" : ""}

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
