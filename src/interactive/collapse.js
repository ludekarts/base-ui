import React, { useRef, useEffect, useState } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { debounce } from "../utils";

const Wrapper = styled.div`
  overflow: hidden;
  transition: height .3s ease;
  ${({ open, height, mxh, mnh }) => `
    height: ${open ? height : 0}px;
    ${mnh ? `min-height: ${mnh}px;` : ``}
    ${mxh ? `max-height: ${mxh}px; overflow: auto;` : ``}
  `}
`;

const Collapse = props => {
  const { open, ...rest } = props;
  const [height, setHeight] = useState(0);
  const wrapper = useRef();

  const updateOnResize = debounce(() => {
    wrapper.current && setHeight(wrapper.current.scrollHeight);
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
  mxh: PropTypes.number,
  mnh: PropTypes.number,
};

Collapse.defaultProps = {
  open: false,
};

export default Collapse;
