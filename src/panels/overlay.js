import PropTypes from "prop-types";
import styled from "styled-components";

const Overlay = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  ${({ top, tint, delayOut, duration }) => `
    top:${top};
    z-index: -1;
    background: rgba(0, 0, 0, ${tint});
    transition: opacity ${duration}s ease ${delayOut}s, transform ${duration}s ease ${delayOut}s, z-index 0s linear ${duration}s;
  `};

  /* hide */
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transform: translateZ(0);
  
  & > * {
    pointer-events: none;
  }

  ${({ open, zIndex, delayIn, duration }) =>
    open &&
    ` opacity: 1;
      z-index: ${zIndex};
      pointer-events: all;     
      transform: translateZ(0);
      transition: opacity ${duration}s ease ${delayIn}s, transform ${duration}s ease ${delayIn}s, z-index 0s linear;
      & > * {
        pointer-events: all;
      }
    `}
`;

Overlay.propTypes = {
  open: PropTypes.bool.isRequired,
  top: PropTypes.number.isRequired,
  tint: PropTypes.number.isRequired,
  zIndex: PropTypes.number.isRequired,
  delayIn: PropTypes.number.isRequired,
  delayOut: PropTypes.number.isRequired,
  duration: PropTypes.number.isRequired,
};

Overlay.defaultProps = {
  top: 0,
  tint: 0.9,
  delayIn: 0,
  delayOut: 0,
  open: false,
  zIndex: 1500,
  duration: 0.3,
};

export default Overlay;
