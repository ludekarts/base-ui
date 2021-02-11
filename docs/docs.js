import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

// Base-UI 

import { GlobalStyle } from "../src";


const Wrapper = styled.div`
  font-family: "Lato", sans-serif;
  color: rebeccapurple;
`;

const Docs = props => {
  return (
    <>
      <Wrapper>
        <h1>Hello Base-UI Docs</h1>
      </Wrapper>
      <GlobalStyle />
    </>
  );
}

Docs.displayName = "Docs";
Docs.propTypes = {};

Docs.defaultProps = {};

export default Docs;