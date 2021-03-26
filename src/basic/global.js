import React from "react";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    
  :root {

    --bui-box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);
    --bui-lift-shadow: 0px 23px 18px -21px rgba(0, 0, 0, 0.7);

    --bui-space: 0.5rem;
    --bui-space-2x: 1rem;
    --bui-space-3x: 1.5rem;
    --bui-space-4x: 2rem;

    & *,
    & *::before,
    & *::after {
      box-sizing: border-box;
    }

    /* Enable children to expand vertically by using flex-grow property */
    
    ${({ fullCover }) => !fullCover ? `` : `     
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;      
     
      & body {
        margin: 0;
        width: 100%;
        height: 100%;
        display: flex;
      }
    `}

    /* Full cover */

    & .full-cover {
      margin: 0;
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
    }    

    /* FLex modifiers */

    & .--flex-column {
      display: flex;
      flex-direction: column;
    }

    & .--flex-row-reverse {
      display: flex;
      flex-direction: row-reverse;
    }

    /* Spacing */

    & .--space {
      margin: var(--bui-space);
    }

    & .--space-2x {
      margin: var(--bui-space-2x);
    }

    & .--space-3x {
      margin: var(--bui-space-3x);
    }

    & .--space-4x {
      margin: var(--bui-space-4x);
    }

    & .--expand-content > * {
      width: 100%;
    }

  /* Spacing Inset */

    & .--space-i {
      padding: var(--bui-space);
    }

    & .--space-2x-i {
      padding: var(--bui-space-2x);
    }

    & .--space-3x-i {
      padding: var(--bui-space-3x);
    }

    & .--space-4x-i {
      padding: var(--bui-space-4x);
    }

    /* Verical & Horizontal Alignment */

    & .--stack-start, .--v-start {
      align-items: flex-start;
    }

    & .--stack-end, .--v-end {
      align-items: flex-end;
    }

    & .--stack-stretch, .--v-stretch {
      align-items: stretch;
    }

    & .--stack-center, .--v-center {      
      align-items: center;
    }

    & .--rail-end, .--h-end {
      justify-content: flex-end;
    }
   
    & .--rail-start, .--h-start  {
      justify-content: flex-start;
    }

    & .--rail-center, .--h-center  {
      justify-content: center;
    }

    & .--rail-spread, .--h-spread {
      justify-content: space-between;
    }

    & .--rail-evenly, .--h-evenly {
      justify-content: space-evenly;
    } 

    & .--rail-around, .--h-around {
      justify-content: space-around;
    } 

    /* Default focus */

    & .--focusable {      
        transition: box-shadow .3s ease;
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
      }
    }

    /* Cover Link */

    & a.--cover-link {
      position: initial;
      &::after {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;
        content: "";
        position: absolute;
      }
    }

    /* Capitalize first letter */
    
    & .caps-first-letter {
      &::first-letter {
        text-transform: uppercase;
      }
    }

    /* Common */

    & .--stretch-block {
      display: block;
      width: 100%;
    }

    & .--center-text {
      text-align: center;
    }
  }
`;

export default function GlobalStyles({ children, fullCover }) {
  return (
    <>
      {children}
      <Styles fullCover={fullCover} />
    </>
  );
}