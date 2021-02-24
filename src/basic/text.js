import styled from "styled-components";
import PropTypes from "prop-types";

// Text enhancement component.
const Text = styled.span`
  ${({ color, size, spacing, weight, padding, transform, ellypsis, lh, block, font }) => `
    ${block ? "display: block; width: 100%;" : "display: inline-block;"}
    ${color ? `color:${color};` : ""}
    ${size ? `font-size:${size};` : ""}
    ${lh ? `line-height:${lh};` : ""}
    ${spacing ? `margin: ${spacing};` : ""}
    ${padding ? `padding:${padding};` : ""}
    ${weight ? `font-weight:${weight};` : ""}
    ${transform ? `text-transform:${transform};` : ""}
    ${ellypsis ? `
      width:100%;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    ` : ""}
    ${font ? `font-family: ${font};` : ""}
  `}
`;

Text.propTypes = {
  lh: PropTypes.string,
  font: PropTypes.string,
  size: PropTypes.string,
  color: PropTypes.string,
  weight: PropTypes.string,
  spacing: PropTypes.string,
  padding: PropTypes.string,
  transform: PropTypes.string,
  ellypsis: PropTypes.bool,
  block: PropTypes.bool,
};

Text.defaultProps = {
  padding: "0",
  block: false,
  ellypsis: false,
};

export default Text;
