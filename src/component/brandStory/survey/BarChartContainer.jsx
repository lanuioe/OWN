import { useState } from "react";
import useIntersectionObserverRef from "../../../hook/useIntersectionObserverRef";
import BarChart from "./BarChart";

const BarChartContainer = ({ color, targetHeight, children }) => {
  const [isVisible, setIsVisible] = useState(false);

  const ref = useIntersectionObserverRef({
    callback: (entries) => {
      if (entries.some((entry) => entry.isIntersecting)) {
        setIsVisible(true);
      }
    },
    options: { threshold: 0.1 },
  });

  return (
    <BarChart
      ref={ref}
      color={color}
      targetHeight={targetHeight}
      isVisible={isVisible}
    >
      {children}
    </BarChart>
  );
};

export default BarChartContainer;
