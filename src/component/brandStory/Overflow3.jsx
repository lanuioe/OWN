import styled, { keyframes } from "styled-components";
import vwCalc from "../../util/vwCalc";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import breakCircle from "../../assets/brandStory/break_circle.gif";
import { useState } from "react";
import useIntersectionObserverRef from "../../hook/useIntersectionObserverRef";

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const Poppins100 = styled(BasePoppins100)`
  position: relative;
  margin-top: ${vwCalc(334)};
  margin-bottom: ${vwCalc(60)};
  text-transform: uppercase;
  line-height: 115%;
  text-align: center;
  z-index: 1;
`;

const Pretendard20 = styled(BasePretendard20)`
  position: relative;
  text-align: center;
  z-index: 1;
`;

const CircleImgBox = styled(ImgBox)`
  position: absolute;
  top: 0;
  opacity: 0;
  animation: ${(props) => props.$isVisible && fadeIn} 0.5s ease-in forwards;
`;

const Overflow3 = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleIntersection = () => {
    setIsVisible(true);
  };

  const sectionRef = useIntersectionObserverRef({
    callback: handleIntersection,
    options: { threshold: 0.2 },
  });

  return (
    <section ref={sectionRef}>
      <Poppins100>
        in a busy life, <br />
        people are forgetting <br />
        something <br />
        they need most
      </Poppins100>
      <Pretendard20>
        사람들은 바쁘게 흘러가는 현대사회로 가장 필요한 무언가를 잊어갔습니다.
      </Pretendard20>
      {isVisible && (
        <CircleImgBox
          src={breakCircle}
          alt="원 깨지는 모션"
          width={1920}
          height={1080}
          $isVisible={isVisible}
        />
      )}
    </section>
  );
};

export default Overflow3;
