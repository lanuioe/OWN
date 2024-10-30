import { useState, useEffect, useRef } from "react";
import HorizontalScroll from "../HorizontalScroll";
import Ask from "./painPoint/Ask";
import Target1 from "./painPoint/Target1";
import Target2 from "./painPoint/Target2";
import Target3 from "./painPoint/Target3";

const PainPoint = () => {
  const [rotation, setRotation] = useState(0);
  const scrollRef = useRef(null);

  const handleScroll = () => {
    if (scrollRef.current) {
      const scrollLeft = scrollRef.current.scrollLeft;
      setRotation(scrollLeft / 10);
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener("scroll", handleScroll);
    return () =>
      el.removeEventListener("scroll", handleScroll, { passive: false });
  }, []);

  return (
    <HorizontalScroll ref={scrollRef}>
      <Ask />
      <Target1 $rotation={rotation} />
      <Target2 $rotation={rotation} />
      <Target3 $rotation={rotation} />
    </HorizontalScroll>
  );
};

export default PainPoint;
