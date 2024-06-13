import { useState, useEffect } from 'react';

export const SIZE_SM = 640
export const SIZE_MD = 768
export const SIZE_LG = 1024
export const SIZE_XL = 1280

function getWindowDimensions() {
    const { innerWidth: width, innerHeight: height } = window;
    return {
      width,
      height
    };
  }

/** Hook to get the window dimensions. */
export function useWindowDimensions() {
    const [windowDimensions, setWindowDimensions] = useState(getWindowDimensions());

    useEffect(() => {
        function handleResize() {
          setWindowDimensions(getWindowDimensions());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return windowDimensions;
}