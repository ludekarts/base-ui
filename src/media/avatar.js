import PropTypes from "prop-types";
import styled from "styled-components";
import Image from "./image";

const AvatarImage = styled(Image)`
  border-radius: ${({ rounded }) => rounded};
`;

AvatarImage.displayName = "AvatarImage";
AvatarImage.propTypes = {
  size: PropTypes.string,
  rounded: PropTypes.string,
};

AvatarImage.defaultProps = {
  size: "3rem",
  rounded: "50%"
};

export default AvatarImage;