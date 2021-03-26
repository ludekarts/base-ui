import PropTypes from "prop-types";
import styled from "styled-components";

const Stack = styled.div`
  display: flex;
  flex-direction: column;
  
  & > * + * {
    margin-top: ${({ gap }) => gap};
  }  
    
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
};

Stack.defaultProps = {
  gap: "1em",
};

export default Stack;
