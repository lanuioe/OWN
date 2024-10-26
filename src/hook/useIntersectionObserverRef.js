import { useEffect, useRef } from "react";

const useIntersectionObserverRef = ({
  callback,
  options = { root: null, rootMargin: "0px", threshold: 0 },
  type = "ref",
}) => {
  const observerRef = useRef(null);
  const elementRef = useRef(null);

  useEffect(() => {
    if (!observerRef.current) {
      observerRef.current = new IntersectionObserver((entries, observer) => {
        if (entries.some((entry) => entry.isIntersecting)) {
          callback(entries, observer);
        }
      }, options);
    }

    if (type === "ref" && elementRef.current) {
      observerRef.current.observe(elementRef.current);
    }

    return () => {
      observerRef.current?.disconnect();
      observerRef.current = null;
    };
  }, [callback, options, type]);

  if (type === "callback") {
    return (element) => {
      if (element) observerRef.current?.observe(element);
    };
  }

  return elementRef;
};

export default useIntersectionObserverRef;
