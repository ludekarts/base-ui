import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
 
  /* GLobal Variables */ 

  :root {
    
    /* Shadows */
    --bui-box-shadow: 0px 9px 9px -11px rgba(0, 0, 0, 0.5);
    --bui-lift-shadow: 0px 23px 18px -21px rgba(0, 0, 0, 0.7);

  }

  /* Box sizing rules */
  
  *,
  *::before,
  *::after {
    box-sizing: border-box;
  }

  /* Button reset (lookss like a div) */
  button, a {
    margin: 0;
    padding: 0;
    border: none;
    color: inherit;
    font-size: 1em;    
    cursor: pointer;
    line-height: inherit;
    display: inline-flex;
    font-family: inherit;
    text-decoration: none;
    justify-content: center;
    background: transparent;
    -moz-appearance: none;
    -webkit-appearance: none;
    transition: background-color .3s ease;
    & > * {
      pointer-events: none;
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