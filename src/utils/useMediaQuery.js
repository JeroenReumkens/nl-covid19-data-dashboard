import { useState, useEffect } from 'react';

export default function useMediaQuery(breakpoint, initialMatches = false) {
  const [matches, setMatches] = useState(initialMatches);

  useEffect(() => {
    const mqList = window.matchMedia(breakpoint);
    const onChange = (evt) => setMatches(evt.matches);

    // set the initial value
    setMatches(mqList.matches);

    // attach the listener
    mqList.addListener(onChange);

    return () => mqList.removeListener(onChange);
  }, [breakpoint]);

  return matches;
}
