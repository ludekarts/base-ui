import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// USAGE
/*
  import Dropdown from "@ludekarts/base-ui/dropdown";
  ...

  
  <button data-bui-dropdown-target="dropdownName">Toggle my dropdown</button>

  <Dropdown name="dropdownName" onToggle={() => {}} autoHide>
    Content
  </Dropdown>

*/

// Styled.
const Container = styled.div`
  opacity: 0;
  overflow: hidden;
  visibility: hidden;
  box-sizing: border-box;
  transform: scale(0.95) translateZ(0);
  transition: visibility 0s linear 0.5s, opacity .3s ease, transform .3s ease;

  ${({ show }) => show && `
    opacity: 1;
    visibility: visible;
    transform: scale(1) translateZ(0);
    transition: opacity .3s ease, transform .3s ease, visibility 0s;
    `
  }
`;

export default class Dropdown extends React.PureComponent {

  static propTypes = {
    onToggle: PropTypes.func,
    autoHide: PropTypes.bool,
    name: PropTypes.string.isRequired
  };

  static defaultProps = {
    autoHide: false,
  };

  state = {
    show: false
  };

  container = undefined;

  handleClickOutside = event => {
    // Click outside but on Toggle button.
    if (event.target.dataset && event.target.dataset.buiDropdownTarget === this.props.name) {
      return this.setState({
        show: !this.state.show
      });
    }

    // Click outside.
    if (this.props.autoHide || (this.container && !this.container.contains(event.target))) {
      return this.container !== event.target && // Prevents hiding when autoHide is active and user clicks on scrollbar.
        this.setState({
          show: false
        });
    }
  }

  componentDidMount() {
    document.addEventListener("mousedown", this.handleClickOutside);
  }

  componentDidUpdate(prevProps, prevState) {
    prevProps.toggle !== this.props.toggle &&
      typeof this.props.toggle === "boolean" &&
      this.setState({ show: !this.state.show });

    this.props.onToggle &&
      prevState.show !== this.state.show &&
      this.props.onToggle(this.state.show);
  }

  componentWillUnmount() {
    document.removeEventListener("mousedown", this.handleClickOutside);
  }

  render() {
    const { children, ...props } = this.props;
    return (
      <Container {...props} show={this.state.show} ref={container => this.container = container}>
        {
          children
        }
      </Container>
    )
  }
}