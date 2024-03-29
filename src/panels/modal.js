import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import Overlay from "./overlay";
import Close from "../buttons/close";

const Center = styled.div`
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Panel = styled.div`
  margin: 1em;
  width: 100%;
  display: flex;
  min-width: 18rem;  
  overflow: hidden;
  background: white;
  padding: 1rem 0 0;  
  position: relative;
  border-radius: 5px;
  flex-direction: column;
  box-sizing: border-box;
  box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);

  ${({ mxw, mxh }) => `
    max-height: ${mxh};
    max-width: ${mxw};
  `}

  & button.close {
    z-index: 1;
    top: 1rem;
    right: 1rem;
    position: absolute;
  }
`;

const Content = styled.div`
  overflow-y: auto;
  overflow-x: hidden;
  padding: 0 1.2rem 1.2rem 1.2rem;
`;

const Modal = props => {
  const { children, open, mxw, mxh, onClose, ...rest } = props;
  return (
    <Overlay open={open} tint={0.7} onClick={onClose}>
      <Center>
        <Panel {...rest} onClick={event => event.stopPropagation()} mxw={mxw} mxh={mxh} >
          {
            !onClose ? null :
              <Close onClick={onClose} className="close" />
          }
          <Content>{children}</Content>
        </Panel>
      </Center>
    </Overlay>
  );
}

Modal.defaultProps = {
  open: false,
  mxw: "45rem",
  mxh: "95%",
};

Modal.propTypes = {
  open: PropTypes.bool,
  mxw: PropTypes.string,
  mxh: PropTypes.string,
  onClose: PropTypes.func,
  children: PropTypes.node,
};

export default Modal;
