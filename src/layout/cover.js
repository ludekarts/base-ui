import styled from "styled-components";
import PropTypes from "prop-types";

const Cover = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;

`;

Cover.displayName = "Cover";

Cover.propTypes = {
  gap: PropTypes.string,
  size: PropTypes.string,
  align: PropTypes.string,
  expandContent: PropTypes.bool,
};

Cover.defaultProps = {
  gap: "1em",
  size: "16rem",
  align: "center",
  expandContent: false,
};

export default Cover;
