

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
