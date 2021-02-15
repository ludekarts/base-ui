import React from "react";
import { createGlobalStyle } from "styled-components";

const Styles = createGlobalStyle`

  .base-ui {

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

    & .--stack-start  {
      align-items: flex-start;
    }

    & .--stack-end {
      align-items: flex-end;
    }

    & .--stack-stretch {
      align-items: stretch;
    }

    & .--stack-center, .--v-center {      
      align-items: center;
    }

    & .--rail-end {
      justify-content: flex-end;
    }
   
    & .--rail-start {
      justify-content: flex-start;
    }

    & .--rail-center, .--h-center  {
      justify-content: center;
    }

    & .--rail-spread {
      justify-content: space-between;
    }

    & .--rail-evenly {
      justify-content: space-evenly;
    } 

    & .--rail-around {
      justify-content: space-around;
    } 

    /* Default focus */

    & .base-ui-focus {      
        transition: box-shadow .3s ease;
      &:focus {
        outline: none;
        box-shadow: 0 0 0 3px rgba(66, 153, 225, 0.6);
      }
    }
  }



/* Messahe Bubble 

[data-bubble] {
  position: relative;
  overflow: visible !important;

  &.active::after {
    top: -2.5em;   
    opacity: 1;
    color: white;
    max-width: 100%;
    max-height: 100%;
    border-radius: 0.25em;
    // Forward 
    transition: 
      top 0.3s ease-in, 
      color 0.3s ease-in, 
      opacity 0.3s ease-in, 
      max-width 0.5s ease, 
      max-height 0.3s ease;
  }

  &::after {
    top: 0;
    opacity: 0; 
    max-width: 0.2em;
    max-height: 0.5em;
    border-radius: 0.25em;   
    color: var(--cm-green); 
    // Backward 
    transition: 
      top 0.3s ease .25s, 
      opacity 0.3s ease .25s, 
      color 0.3s ease, 
      max-width 0.3s ease, 
      max-height 0.3s ease;

    left: 50%;   
    font-size: 0.9em;
    overflow: hidden;
    position: absolute;
    text-align: center;
    pointer-events: none;
    padding: 0.1em 0.3em;    

   
    text-transform: uppercase;
    content: attr(data-bubble);
    transform: translate(-50%);
    background-color: var(--cm-green);
    
  }
}*/


// ---- Global Utilities ---------------

`;

export default ({ children }) => (
  <div className="base-ui">
    {children}
    <Styles />
  </div>
);