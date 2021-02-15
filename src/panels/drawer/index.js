import React, { forwardRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "../overlay";

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
`;

const Close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  border-radius:50%;
  align-items: center;
  background-color: #eee;
  justify-content: center;

  &:hover, &:focus {    
    outline: none;
    background-color: #ddd;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(66,153,225, .6);
  }
`;


const Drawer = forwardRef((props, ref) => {
  const { children, open, onClose, nested, top, width, ...rest } = props;
  return (
    <Overlay open={open} onClick={onClose} tint={0.7}>
      <Wrapper {...rest} open={open} nested={nested} top={top} width={width} onClick={event => event.stopPropagation()} ref={ref}>
        {
          !onClose ? null :
            <Close onClick={onClose} type="button">⛌</Close>
        }
        {children}
      </Wrapper>
    </Overlay>
  );
})

Drawer.propTypes = {
  open: PropTypes.bool,
  top: PropTypes.string,
  nested: PropTypes.bool,
  width: PropTypes.string,
};

Drawer.defaultProps = {
  open: false,
  top: "0",
  nested: false,
  width: "18rem",
};

Drawer.displayName = "Drawer";

export default Drawer;