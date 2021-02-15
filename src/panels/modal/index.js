import React from "react";
import PropTypes from "prop-types";
import Overlay from "../overlay";
import { Panel, Center, Close, Content } from "./styled";

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
