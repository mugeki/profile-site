import { MutableRefObject, Ref, useEffect } from "react";

export function useOnOutsideClick(ref: Ref<HTMLElement>, callback: () => void) {
  const castedRef = ref as MutableRefObject<HTMLElement>;
  useEffect(() => {
    const handleClick = (e: any) => {
      if (castedRef.current && !castedRef.current.contains(e.target)) {
        callback();
      }
    };

    document.addEventListener("mousedown", handleClick);

    return () => {
      document.removeEventListener("mousedown", handleClick);
    };
  }, [ref]);
}
