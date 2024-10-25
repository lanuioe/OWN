import { useRef, useLayoutEffect } from "react";

export function useHorizontalScroll(scrollSpeed = 1) {
  const elRef = useRef();

  useLayoutEffect(() => {
    const el = elRef.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * scrollSpeed,
      });
    };

    el.addEventListener("wheel", onWheel);

    return () => el.removeEventListener("wheel", onWheel);
  }, [scrollSpeed]);

  return elRef;
}
