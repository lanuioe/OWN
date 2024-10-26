import styled from "styled-components";
import { useState } from "react";
import vwCalc from "../../../util/vwCalc";
import { BasePoppins100 } from "../../style/BasePoppins";
import { useNumberCount } from "../../../hook/useNumberCount";
import useIntersectionObserverRef from "../../../hook/useIntersectionObserverRef";

const Poppins120 = styled(BasePoppins100)`
  display: block;
  margin-top: ${(props) => vwCalc(props.marginTop) || 0};
  font-size: ${vwCalc(120)};
  text-transform: uppercase;
`;

const Poppins230 = styled(BasePoppins100)`
  display: block;
  margin-top: ${vwCalc(6)};
  font-size: ${vwCalc(230)};
  letter-spacing: ${vwCalc(-6.9)};
`;

const SurveyTitle = ({ title, percentage, marginTop }) => {
  const [startCounting, setStartCounting] = useState(false);
  const animatedPercentage = useNumberCount(
    startCounting ? percentage : 0,
    2000
  );

  const ref = useIntersectionObserverRef({
    callback: ([entry], observer) => {
      if (entry.isIntersecting) {
        setStartCounting(true);
        observer.unobserve(entry.target);
      }
    },
    options: { threshold: 0.1 },
  });

  return (
    <div ref={ref}>
      <Poppins120 marginTop={marginTop}>{title}</Poppins120>
      <Poppins230>{animatedPercentage}%</Poppins230>
    </div>
  );
};

export default SurveyTitle;
