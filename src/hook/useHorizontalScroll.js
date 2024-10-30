import { useLayoutEffect } from "react";

export function useHorizontalScroll(ref, scrollSpeed = 1) {
  useLayoutEffect(() => {
    const el = ref.current;
    if (!el) return;

    const onWheel = (e) => {
      if (e.deltaY === 0) return;
      e.preventDefault();
      el.scrollTo({
        left: el.scrollLeft + e.deltaY * scrollSpeed,
      });
    };

    el.addEventListener("wheel", onWheel, { passive: false });

    return () => el.removeEventListener("wheel", onWheel, { passive: false });
  }, [ref, scrollSpeed]);
}
