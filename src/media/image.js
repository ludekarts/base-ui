import React, { useState } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const ImageWrapper = styled.img`
  ${({ width, height, size }) => `
    width: ${size || width};
    height: ${size || height};
  `}
   box-shadow: 0 0 0 10rem #eeeeee inset;
`;

const placeholderBase64 = "data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiBlbmNvZGluZz0idXRmLTgiPz4NCjwhLS0gR2VuZXJhdG9yOiBBZG9iZSBJbGx1c3RyYXRvciAxNi4wLjMsIFNWRyBFeHBvcnQgUGx1Zy1JbiAuIFNWRyBWZXJzaW9uOiA2LjAwIEJ1aWxkIDApICAtLT4NCjwhRE9DVFlQRSBzdmcgUFVCTElDICItLy9XM0MvL0RURCBTVkcgMS4xLy9FTiIgImh0dHA6Ly93d3cudzMub3JnL0dyYXBoaWNzL1NWRy8xLjEvRFREL3N2ZzExLmR0ZCI+DQo8c3ZnIHZlcnNpb249IjEuMSIgaWQ9IkxheWVyXzEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHg9IjBweCIgeT0iMHB4Ig0KCSB3aWR0aD0iMzgwcHgiIGhlaWdodD0iMjE1cHgiIHZpZXdCb3g9IjAgMCAzODAgMjE1IiBlbmFibGUtYmFja2dyb3VuZD0ibmV3IDAgMCAzODAgMjE1IiB4bWw6c3BhY2U9InByZXNlcnZlIj4NCjxyZWN0IGZpbGw9IiNFRUVFRUUiIHdpZHRoPSIzODAiIGhlaWdodD0iMjE1Ii8+DQo8Zz4NCgk8Y2lyY2xlIGZpbGw9IiNDQ0NDQ0MiIGN4PSIxMzEuNSIgY3k9IjEwNy41IiByPSIxMiIvPg0KCTxjaXJjbGUgZmlsbD0iI0NDQ0NDQyIgY3g9IjE5MCIgY3k9IjEwNy41IiByPSIxMiIvPg0KCTxjaXJjbGUgZmlsbD0iI0NDQ0NDQyIgY3g9IjI0OC41IiBjeT0iMTA3LjUiIHI9IjEyIi8+DQo8L2c+DQo8L3N2Zz4NCg==";

const Image = ({ ...props }) => {
  return (
    <ImageWrapper onError={e => e.target.src = placeholderBase64} {...props} />
  );
};

Image.propTypes = {
  src: PropTypes.string,
  alt: PropTypes.string,
  size: PropTypes.string,
  width: PropTypes.string,
  height: PropTypes.string,
};

Image.defaultProps = {
  width: "100%",
  height: "auto",
};

export default Image;
