import React, { Fragment } from "react";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`
    
  :root {

    --bui-focus-color: rgba(66, 153, 225, 0.6);
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

    /* Spacing outside */

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

    & .--space-t {
      margin-top: var(--bui-space);
    }

    & .--space-t-2x {
      margin-top: var(--bui-space-2x);
    }

    & .--space-t-3x {
      margin-top: var(--bui-space-3x);
    }

    & .--space-t-4x {
      margin-top: var(--bui-space-4x);
    }
        
    & .--space-l {
      margin-left: var(--bui-space);
    }

    & .--space-l-2x {
      margin-left: var(--bui-space-2x);
    }

    & .--space-l-3x {
      margin-left: var(--bui-space-3x);
    }

    & .--space-l-4x {
      margin-left: var(--bui-space-4x);
    }
   
    & .--space-b {
      margin-bottom: var(--bui-space);
    }

    & .--space-b-2x {
      margin-bottom: var(--bui-space-2x);
    }

    & .--space-b-3x {
      margin-bottom: var(--bui-space-3x);
    }

    & .--space-b-4x {
      margin-bottom: var(--bui-space-4x);
    }

    & .--space-r {
      margin-right: var(--bui-space);
    }

    & .--space-r-2x {
      margin-right: var(--bui-space-2x);
    }

    & .--space-r-3x {
      margin-right: var(--bui-space-3x);
    }

    & .--space-r-4x {
      margin-right: var(--bui-space-4x);
    }

    /* Space for flex containers - push content */

    & .--push-top {
      margin-bottom: auto;
    }
    
    & .--push-left {
      margin-right: auto;
    }
    
    & .--push-right {
      margin-left: auto;
    }

    & .--push-bottom {
      margin-top: auto;
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

    & .--space-t-i {
      padding-top: var(--bui-space);
    }

    & .--space-t-2x-i {
      padding-top: var(--bui-space-2x);
    }

    & .--space-t-3x-i {
      padding-top: var(--bui-space-3x);
    }

    & .--space-t-4x-i {
      padding-top: var(--bui-space-4x);
    }
    
    & .--space-l-i {
      padding-left: var(--bui-space);
    }

    & .--space-l-2x-i {
      padding-left: var(--bui-space-2x);
    }

    & .--space-l-3x-i {
      padding-left: var(--bui-space-3x);
    }

    & .--space-l-4x-i {
      padding-left: var(--bui-space-4x);
    }
   
    & .--space-b-i {
      padding-bottom: var(--bui-space);
    }

    & .--space-b-2x-i {
      padding-bottom: var(--bui-space-2x);
    }

    & .--space-b-3x-i {
      padding-bottom: var(--bui-space-3x);
    }

    & .--space-b-4x-i {
      padding-bottom: var(--bui-space-4x);
    }

    & .--space-r-i {
      padding-right: var(--bui-space);
    }

    & .--space-r-2x-i {
      padding-right: var(--bui-space-2x);
    }

    & .--space-r-3x-i {
      padding-right: var(--bui-space-3x);
    }

    & .--space-r-4x-i {
      padding-right: var(--bui-space-4x);
    }
    

    /* Vertical & Horizontal Spacing */

        
    & .--space-h-i {
      padding-left: var(--bui-space);
      padding-right: var(--bui-space);
    }

    & .--space-h-2x-i {
      padding-left: var(--bui-space-2x);
      padding-right: var(--bui-space-2x);
    }

    & .--space-h-3x-i {
      padding-left: var(--bui-space-3x);
      padding-right: var(--bui-space-3x);
    }

    & .--space-h-4x-i {
      padding-left: var(--bui-space-4x);
      padding-right: var(--bui-space-4x);
    }

    & .--space-v-i {
      padding-top: var(--bui-space);
      padding-bottom: var(--bui-space);
    }

    & .--space-v-2x-i {
      padding-top: var(--bui-space-2x);
      padding-bottom: var(--bui-space-2x);
    }

    & .--space-v-3x-i {
      padding-top: var(--bui-space-3x);
      padding-bottom: var(--bui-space-3x);
    }

    & .--space-v-4x-i {
      padding-top: var(--bui-space-4x);
      padding-bottom: var(--bui-space-4x);
    }

    & .--space-h {
      margin-left: var(--bui-space);
      margin-right: var(--bui-space);
    }

    & .--space-h-2x {
      margin-left: var(--bui-space-2x);
      margin-right: var(--bui-space-2x);
    }

    & .--space-h-3x {
      margin-left: var(--bui-space-3x);
      margin-right: var(--bui-space-3x);
    }

    & .--space-h-4x {
      margin-left: var(--bui-space-4x);
      margin-right: var(--bui-space-4x);
    }

    & .--space-v {
      margin-top: var(--bui-space);
      margin-bottom: var(--bui-space);
    }

    & .--space-v-2x {
      margin-top: var(--bui-space-2x);
      margin-bottom: var(--bui-space-2x);
    }

    & .--space-v-3x {
      margin-top: var(--bui-space-3x);
      margin-bottom: var(--bui-space-3x);
    }

    & .--space-v-4x {
      margin-top: var(--bui-space-4x);
      margin-bottom: var(--bui-space-4x);
    }


    /* Vertical & Horizontal Alignment */

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
        box-shadow: 0 0 0 3px var(--bui-focus-color, rgba(66, 153, 225, 0.6));
      }
    }

    /* Cover Link */

    & .--cover-link {
      position: relative;
      & a.--link {
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        z-index: 0;        
        cursor: pointer;
        position: absolute;
      }
    }

    /* Capitalize first letter */
    
    & .caps-first-letter,  /* for backward compatibility */
    & .--first-letter-caps {
      &::first-letter {
        text-transform: uppercase;
      }
    }

    /* Common */

    & .--stretch {
      width: 100%;
    }
   
    & .--stretch-v {
      height: 100%;
    }

    & .--expand-content {
      & > * { 
        width: 100%; 
      }
    }

    & .--stretch-block {
      display: block;
      width: 100%;
    }

    & .--text-center {
      text-align: center;
    }
   
    & .--text-right {
      text-align: right;
    }
   
    & .--text-left {
      text-align: left;
    }
   
    & .--text-bold {
      font-weight: bold;
    }
    
    & .--text-italic {
      font-style: italic;
    }
    
    & .--text-no-wrap {
      white-space: nowrap;
    }
  }
`;

export default function GlobalStyles({ children, fullCover }) {
  return (
    <Fragment>
      {children}
      <Styles fullCover={fullCover} />
    </Fragment>
  );
}