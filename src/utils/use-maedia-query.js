import { useRef, useState, useEffect } from "react";

// Changes state when match for given mediaQuery changes.
//
// USAGE:
//
// import useMediaQuery from "hooks/use-media-query";
// ...
//
// const isMobile = useMediaQuery("(max-width: 450px)"); // true for screens < 450px;

export default function useMediaQuery(mediaQuery) {
  const handler = useRef(window.matchMedia(mediaQuery));
  const [matches, setMatches] = useState(handler.current.matches);
  const mediaChange = () => {
    setMatches(handler.current.matches);
  };
  useEffect(() => {
    handler.current.addEventListener("change", mediaChange);
    return () => {
      handler.current.removeEventListener("change", mediaChange);
    }
  }, [mediaQuery]);

  return matches;
}