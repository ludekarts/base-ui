import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "./overlay";
import Close from "../buttons/close";

const Wrapper = styled.div`
  bottom: 0;
  margin: 0;
  z-index: 10;
  padding: 1em;
  display: flex;  
  overflow-y: auto;
  overflow-x: hidden;
  flex-direction: column;
  background-color: white;
  transition: right .4s ease;  
  box-shadow: 0 0 10px -5px rgba(0,0,0,.2), 0 0 24px 2px rgba(0,0,0,.14), 0 0 30px 5px rgba(0,0,0,.12);

  ${({ open, nested, top, width }) => `
    top: ${top};
    width: ${width};
    right: ${open ? "0" : `calc(-${width} - 4em)`};
    position: ${nested ? "absolute" : "fixed"};
  `};

  & button.close {
    top: 1rem;
    right: 1rem;
    position: absolute;
  }
`;

const DrawerPanel = forwardRef((props, ref) => {
  const { children, open, onClose, nested, top, width, ...rest } = props;
  return (
    <Wrapper {...rest} open={open} nested={nested} top={top} width={width} onClick={event => event.stopPropagation()} ref={ref}>
      {
        !onClose ? null :
          <Close onClick={onClose} size="2em" className="close" />
      }
      {children}
    </Wrapper>
  )
});

const Drawer = forwardRef((props, ref) => {
  const { noOverlay, open, onClose } = props;
  return (
    noOverlay ? (
      <DrawerPanel {...props} ref={ref} />
    ) : (
      <Overlay open={open} onClick={onClose} tint={0.7}>
        <DrawerPanel {...props} ref={ref} />
      </Overlay>
    )
  );
});

Drawer.propTypes = {
  open: PropTypes.bool,
  top: PropTypes.string,
  nested: PropTypes.bool,
  width: PropTypes.string,
  noOverlay: PropTypes.bool,
};

Drawer.defaultProps = {
  open: false,
  top: "0",
  nested: false,
  width: "18rem",
  noOverlay: false,
};

Drawer.displayName = "Drawer";

export default Drawer;