import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "./overlay";

export const Center = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Panel = styled.div`
  margin: 1em;
  width: 100%;
  display: flex;
  max-height: 98%;
  min-width: 18rem;
  max-width: 45rem;
  overflow: hidden;
  background: white;
  padding: 1rem 0 0;  
  position: relative;
  border-radius: 5px;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);
`;

export const Close = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: none;
  width: 1.8rem;
  height: 1.8rem;
  cursor: pointer;
  border-radius: 50%;
  align-items: center;
  background-color: #eee;
  justify-content: center;

  &:hover, &:focus {    
    outline: none;
    background-color: #ddd;
  }

  &:focus {
    box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
  }
`;
export const Content = styled.div`
  
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 1.2rem 1.2rem 1.2rem;
`;

const Modal = props => {
  const { children, open, onClose } = props;
  return (
    <Overlay open={open} tint={0.7} onClick={onClose}>
      <Center>
        <Panel onClick={event => event.stopPropagation()}>
          {
            !onClose ? null :
              <Close onClick={onClose} size="2em">⛌</Close>
          }
          <Content>{children}</Content>
        </Panel>
      </Center>
    </Overlay>
  );
}

Modal.defaultProps = {
  open: false,
};

Modal.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
