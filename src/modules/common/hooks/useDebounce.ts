import { useCallback } from "react";

export const useDebouce = () => {
  const debounce = useCallback((callback: any, delay: number) => {
    let timeoutId: any;

    return (...args: any) => {
      clearTimeout(timeoutId);
      timeoutId = setTimeout(() => {
        callback(...args);
      }, delay);
    };
  }, []);

  return debounce;
};
