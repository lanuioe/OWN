import styled from "styled-components";
import { useState } from "react";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import useIntersectionObserverRef from "../../hook/useIntersectionObserverRef";
import papers from "../../assets/brandStory/papers.png";
import papersGif from "../../assets/brandStory/papers.gif";

const MAIN_ORANGE = colors.mainOrange;
const IMAGE_CHANGE_DELAY = 1000;

const Poppins100 = styled(BasePoppins100)`
  padding-top: ${vwCalc(392)};
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  color: ${MAIN_ORANGE};
  text-transform: capitalize;
`;

const Pretendard20 = styled(BasePretendard20)`
  position: absolute;
  top: ${vwCalc(434)};
  left: ${vwCalc(872)};
`;

const PaperImgBox = styled(ImgBox)`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 1;
`;

const Overflow2 = () => {
  const [currentImg, setCurrentImg] = useState(papers);

  const ImageChangeTimer = () => {
    setTimeout(() => {
      setCurrentImg(papersGif);
    }, IMAGE_CHANGE_DELAY);
  };

  const sectionRef = useIntersectionObserverRef({
    callback: ImageChangeTimer,
    options: { threshold: 0.5 },
  });

  return (
    <div ref={sectionRef}>
      <PaperImgBox
        src={currentImg}
        alt="뭉쳐진 종이들"
        width={1920}
        height={1080}
      />
      <Poppins100>
        i always
        <br /> had to do something.
      </Poppins100>
      <Pretendard20>
        우리는 어릴적부터 바빴습니다. 늘 항상 무언가를 해야만 했습니다.
        <br /> 성인이 되어서도 여전히 바쁘게 살아야 하는 우리는 문제가 있는지도
        몰랐습니다.
      </Pretendard20>
    </div>
  );
};

export default Overflow2;
