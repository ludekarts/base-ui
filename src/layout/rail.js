import PropTypes from "prop-types";
import styled from "styled-components";

// Description:
// Stack element verticaly with given gap between.
// Here breakepoint prop determines max-width to switch on stack mode;

// USAGE:
/* 
  import { Rail } from @ludekarts/base-ui/layout;
  
  <Rail gap="1em" breakpoint="500px" wrapContent >
    ...
  </Rail>

*/

const Rail = styled.div`  
  display: flex;
  flex-direction: row;
  
  ${({ gap, wrapContent }) => `
    & > * + * {
      margin-left: ${gap};
    }  
    
    ${wrapContent ? `
      flex-wrap: wrap;      
      margin-bottom: calc(${gap} * 0.5 * -1);
      margin-right: -${gap};
      & > * {
        margin: 0 ${gap} calc(${gap} * 0.75) 0;      
        &:last-child {
          margin-right: 0;
        }
      }
    ` : `
      & > * + * {
        margin-top: 0;
        margin-left: ${gap};
      }
    `}
  `} 

  ${({ breakpoint, gap, wrapContent }) => !breakpoint || wrapContent ? "" : `  
    @media (max-width: ${breakpoint}) {
      flex-direction: column;
      & > * + * {
        margin-top: ${gap};
        margin-left: unset;
      }
    }
  `}; 
  
`;

Rail.displayName = "Rail";

Rail.propTypes = {
  gap: PropTypes.string,
  breakpoint: PropTypes.string,
  wrapContent: PropTypes.bool,
};

Rail.defaultProps = {
  gap: "1em",
  wrapContent: false,
};

export default Rail;
