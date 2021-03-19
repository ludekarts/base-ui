import PropTypes from "prop-types";
import styled from "styled-components";

const Sidebar = styled.div`
  display: flex;
  flex-wrap: wrap;
  ${({ gap, sideWidth, breakAt }) => `
    
    margin: calc(${gap} / 2 * -1);
    
    & > * {
      margin: calc(${gap} / 2);
    }

    & > *:first-child {      
      flex-basis: ${sideWidth};
      flex-grow: 1;
    }

    & > *:last-child {  
      flex-basis: 0;
      flex-grow: 999;
      min-width: calc(${breakAt} - ${gap});
    }
  
  `}
`;

Sidebar.displayName = "Sidebar";
Sidebar.propTypes = {
  gap: PropTypes.string,
  breakAt: PropTypes.string,
  sideWidth: PropTypes.string,
};

Sidebar.defaultProps = {
  gap: "1em",
  breakAt: "50%",
  sideWidth: "15em",
};

export default Sidebar;

