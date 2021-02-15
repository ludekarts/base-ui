import React, { useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Overlay = styled.div`
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  position: fixed;
  ${({ top, tint, zIndex, delayOut, duration }) => `
    top:${top};
    z-index: ${zIndex};
    background: rgba(0, 0, 0, ${tint});
    transition: opacity ${duration}s ease ${delayOut}s, transform ${duration}s ease ${delayOut}s;
  `};

  /* hide */
  opacity: 0;
  overflow: hidden;
  pointer-events: none;
  transform: translateZ(0);

  ${({ open, zIndex, delayIn, duration }) =>
    open &&
    ` opacity: 1;
      z-index: ${zIndex};
      pointer-events: all;
      transform: translateZ(0);
      transition: opacity ${duration}s ease ${delayIn}s, transform ${duration}s ease ${delayIn}s;
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
