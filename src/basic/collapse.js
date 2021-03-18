import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

const Wrapper = styled.div`
  overflow: hidden;
  transition: height .3s ease;
  ${({ open, height, maxHeight, minHeight }) => `
    height: ${open ? height : 0}px;
    ${minHeight ? `min-height: ${minHeight}px;` : ``}
    ${maxHeight ? `max-height: ${maxHeight}px; overflow: auto;` : ``}
  `}
`;

const Collapse = props => {
  const { open, ...rest } = props;
  const [height, setHeight] = useState(0);
  const wrapper = useRef();

  useEffect(() => {
    wrapper.current &&
      setHeight(wrapper.current.scrollHeight);
  }, [open]);

  return (
    <Wrapper {...rest} open={open} height={height} ref={wrapper} />
  );
}

Collapse.displayName = "Collapse";
Collapse.propTypes = {
  open: PropTypes.bool,
  height: PropTypes.number,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
