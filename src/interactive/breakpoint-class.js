import React, { Children } from "react";
import PropTypes from "prop-types";
import { useMediaQuery } from "../utils";

const BreakpointClass = props => {
  const { children, breakpoint, beforeClass, afterClass } = props;
  const isBreakpoint = useMediaQuery(breakpoint);
  console.log(afterClass, beforeClass);
  const currentClass = isBreakpoint ? afterClass : beforeClass;
  return Children.map(children, child =>
    React.cloneElement(child, { className: `${child.props.className} ${currentClass}` })
  );
}

BreakpointClass.displayName = "BreakpointClass";
BreakpointClass.propTypes = {
  breakpoint: PropTypes.string.isRequired,
  afterClass: PropTypes.string,
  beforeClass: PropTypes.string,
};

BreakpointClass.defaultProps = {
  afterClass: "",
  beforeClass: "",
};

export default BreakpointClass;