import { useEffect, useState } from "react";

export function useIsMobile(breakpoint: number = 768) {
  const [isMobile, setIsMobile] = useState<boolean>(window.innerWidth <= breakpoint);

  useEffect(() => {
    const mediaQueryList = window.matchMedia(`(max-width: ${breakpoint}px)`);

    const handleResize = (event: MediaQueryListEvent) => {
      setIsMobile(event.matches);
    }

    mediaQueryList.addEventListener('change', handleResize);
    return () => {
      mediaQueryList.removeEventListener('change', handleResize);
    }; 
  }, [breakpoint]);

  return isMobile;
}

export default useIsMobile;