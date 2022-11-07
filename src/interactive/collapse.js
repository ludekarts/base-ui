import React, { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  transition: height .3s ease;
  height: 0;
  ${({ mxh, mnh }) => `    
    ${mnh ? `min-height: ${mnh}px;` : ``}
    ${mxh ? `max-height: ${mxh}px; overflow: auto;` : ``}
  `}
`;

const Collapse = props => {
  const { open, ...rest } = props;
  const wrapper = useRef();

  useEffect(() => {
    let onTimer;
    let outTimer;

    if (wrapper.current) {
      if (open) {
        wrapper.current.style.height = wrapper.current.scrollHeight + "px";
        onTimer = setTimeout(() => wrapper.current.style.height = "auto", 350);
      }
      else {
        wrapper.current.style.height = wrapper.current.scrollHeight + "px";
        outTimer = setTimeout(() => wrapper.current.style.height = 0, 10);
      }
    }

    return () => {
      clearTimeout(onTimer);
      clearTimeout(outTimer);
    }
  }, [open]);

  return (
    <Wrapper {...rest} ref={wrapper} />
  );
}

Collapse.displayName = "Collapse";
Collapse.propTypes = {
  open: PropTypes.bool,
  mxh: PropTypes.number,
  mnh: PropTypes.number,
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
