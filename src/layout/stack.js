import PropTypes from "prop-types";
import styled from "styled-components";

const Stack = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  & > * + * {
    margin-top: ${({ gap }) => gap};
  }
  
  ${({ breakpoint, gap, expandContent }) => !breakpoint ? "" : `  
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
  expandContent: PropTypes.bool,
};

Stack.defaultProps = {
  gap: "1em",
  expandContent: false,
};

export default Stack;
