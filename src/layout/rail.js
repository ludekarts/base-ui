import PropTypes from "prop-types";
import styled from "styled-components";

// Description:
// Stack element verticaly with given gap between.
// Here breakepoint prop determines max-width to switch on stack mode;

// USAGE:
/* 
  import { Rail } from @ludekarts/base-ui/layout;
  
  <Rail gap="1em" breakpoint="500px" expandContent stretch wrapContent >
    ...
  </Rail>

*/

const Rail = styled.div`  
  display: flex;
  flex-direction: row;
  
  ${({ gap, expandContent, stretch, wrapContent }) => `
    ${stretch ? "width: 100%;" : ""}
    ${expandContent ? "& > * { width: 100%; }" : ""}
    & > * + * {
      margin-left: ${gap};
    }  
    ${wrapContent ? `
      flex-wrap: wrap;      
      & > *  {
        margin: 0 ${gap} calc(${gap} * 0.5) 0;      
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
  stretch: PropTypes.bool,
  expandContent: PropTypes.bool,
};

Rail.defaultProps = {
  gap: "1em",
  stretch: false,
  expandContent: false,
};

export default Rail;
