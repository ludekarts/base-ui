import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { debounce } from "../utils";

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

  const updateOnResize = debounce(() => {
    setHeight(wrapper.current.scrollHeight);
  }, 400);

  useEffect(updateOnResize, [open]);

  useEffect(() => {
    window.addEventListener("resize", updateOnResize);
    return () => window.removeEventListener("resize", updateOnResize);
  }, []);

  return (
    <Wrapper {...rest} open={open} height={height} ref={wrapper} />
  );
}

Collapse.displayName = "Collapse";
Collapse.propTypes = {
  open: PropTypes.bool,
  maxHeight: PropTypes.number,
  minHeight: PropTypes.number,
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
