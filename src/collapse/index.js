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
  const [height, setHeight] = useState(0);
  const wrapper = useRef();

  useEffect(() => {
    wrapper.current &&
      setHeight(wrapper.current.scrollHeight);
  }, []);

  return (
    <Wrapper {...props} height={height} ref={wrapper} />
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

/*


export default class Colapse extends React.PureComponent {

  container = React.createRef();

  state = {
    height: 0,
  };

  static propTypes = {
    maxHeight: PropTypes.number,
    open: PropTypes.bool.isRequired,
  };

  static defaultProps = {
    open: false,
  };

  componendDidMount() {
    this.setState({
      height: this.container.current.scrollHeight
    });
  }

  componentDidUpdate(prevProps) {
    if (prevProps.children !== this.props.children) {
      this.setState({
        height: this.container.current.scrollHeight
      });
    }
  }

  render() {
    return (
      <Container {...this.props} height={this.state.height} ref={this.container} />
    )
  }
}

*/