import PropTypes from "prop-types";
import styled from "styled-components";

const ratioTable = {
  "1:1": 100,
  "16:9": 56.25,
  "4:3": 75,
  "3:2": 66.66,
  "8:5": 62.5,
  "square": 100,
  "video": 56.25,
};

const AspectRatio = styled.div`
  
  display: block;
  position: relative;
  padding-top: ${({ ratio }) => ratioTable[ratio] || "0"}%;

  & > * {
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;    
    position: absolute;   
  }

  ${({ turnOffAt }) => !turnOffAt ? `` : `
      @media (max-width: ${turnOffAt}) {
        padding-top: 0;
        & > * {
          height: auto;
          position: relative;
        }
      }
  `}
`;


AspectRatio.displayName = "AspectRatio";
AspectRatio.propTypes = {
  ratio: PropTypes.string,
  turnOffAt: PropTypes.string,
};

AspectRatio.defaultProps = {
  ratio: "video",
};

export default AspectRatio;