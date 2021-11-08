import React, { Children, useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { debounce } from "@ludekarts/utility-belt";

const Wrapper = styled.div`

  display: flex;
  align-items: center;
  justify-content: center;
  transition: height .3s ease;

  ${({ height }) => height ? `
    position: relative;
    height: ${height}px;
  ` : `
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    position: absolute;
  `};

  & > .slide {
    opacity: 0;
    position: absolute;
    visibility: hidden;
    pointer-events: none;
    transition: transform .3s ease, opacity .3s ease, visibility 0s ease .4s;

    &.bck {
      ${({ variant }) => variant === "vertical" ? `
        transform: translateY(100%);
        ` : `
        transform: translateX(100%);
        `}
    }

    &.frd {
      ${({ variant }) => variant === "vertical" ? `
          transform: translateY(-100%);
        ` : `
          transform: translateX(-100%);
        `}
    }

    &.active {
      opacity: 1;
      visibility: visible;
      pointer-events: all;
      ${({ variant }) => variant === "vertical" ? `
        transform: translateY(0);
        ` : `
        transform: translateX(0);
        `}
      transition: transform .3s ease, opacity .3s ease, visibility 0s ease;
    }
  }
`;


const Slider = props => {
  const { children, activeIndex, loop, variant, fitHeight, ...rest } = props;
  const wrapper = useRef();
  const prevIndex = useRef();
  const [heightIndex, setHeightIndex] = useState([]);
  const childrenLength = Children.count(children);

  // Determine animation direction.
  const direction = prevIndex.current > activeIndex ? "bck" : prevIndex.current < activeIndex ? "frd" : "bck";

  // Ensure activeIndex is always in range of children array.
  const inRangeActiveIndex = loop
    // When looping, values from out of the range will be transformed to one's in range.
    ? activeIndex % childrenLength
    // When not looping accepts only values from the range.
    : activeIndex < 0
      ? 0
      : activeIndex >= childrenLength
        ? childrenLength - 1
        : activeIndex % childrenLength;

  // Calculate proper currentIndex value base on animation direction.
  const currentIndex = direction === "frd" ? inRangeActiveIndex : (inRangeActiveIndex + childrenLength) % childrenLength;

  // Collect slides height.
  const getSidesHeight = () => wrapper.current && setHeightIndex(
    Array.from(wrapper.current.childNodes).map(e => Math.floor(e.getBoundingClientRect().height))
  );

  const handleResize = debounce(() => getSidesHeight());

  // Store prevIndex for direction purpose.
  useEffect(() => {
    prevIndex.current = currentIndex;
  }, [currentIndex]);

  // Initial size setup when wrapper inserted into the DOM or children changes.
  useEffect(() => {
    wrapper.current && children && fitHeight && getSidesHeight();
  }, [wrapper.current, children]);

  // Recalculate heigh on resize.
  useEffect(() => {
    window.addEventListener("resize", handleResize);
    () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <Wrapper {...rest} variant={variant} height={heightIndex[currentIndex]} ref={wrapper}>
      {
        Children.map(children, (child, index) => {
          const offClass = getOffsetClass(index, currentIndex, direction);
          let element;

          if (currentIndex === index) {
            element = React.cloneElement(child, { className: `${child.props.className || ""} slide active` })
          }

          // Handle proper class setup an the edges of childrens array while looping.
          else if (loop && ((currentIndex === childrenLength - 1 && index === 0) || (currentIndex === 0 && index === childrenLength - 1))) {
            element = React.cloneElement(child, { className: `${child.props.className || ""} slide ${flipDirection(offClass)}` });
          }

          else {
            element = React.cloneElement(child, { className: `${child.props.className || ""} slide ${offClass}` });
          }

          return element;
        })
      }
    </Wrapper>
  );
}

Slider.displayName = "Slider";
Slider.propTypes = {
  loop: PropTypes.bool,
  fitHeight: PropTypes.bool,
  activeIndex: PropTypes.number,
  variant: PropTypes.oneOf(["vertical", "horizontal"]),
};

Slider.defaultProps = {
  loop: false,
  activeIndex: 0,
  fitHeight: false,
  variant: "horizontal",
};

export default Slider;


// ---- Helpers ----------------

function getOffsetClass(index, currentIndex, direction) {
  return direction === "frd"
    ? index < currentIndex
      ? direction
      : index > currentIndex
        ? flipDirection(direction)
        : ""
    : index > currentIndex
      ? direction
      : index < currentIndex
        ? flipDirection(direction)
        : "";
}

function flipDirection(direction) {
  return direction === "bck" ? "frd" : "bck";
}
