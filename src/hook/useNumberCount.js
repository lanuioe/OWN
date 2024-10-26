import { useEffect, useState } from "react";

export const useNumberCount = (targetNumber, duration) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = null;

    const animate = (timestamp) => {
      if (!start) start = timestamp;
      const progress = Math.min((timestamp - start) / duration, 1);
      setCount(parseFloat((targetNumber * progress).toFixed(1)));

      if (progress < 1) {
        requestAnimationFrame(animate);
      }
    };

    requestAnimationFrame(animate);

    return () => setCount(targetNumber);
  }, [targetNumber, duration]);

  return count;
};
