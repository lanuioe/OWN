import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import papers from "../../assets/brandStory/papers.png";

const MAIN_ORANGE = colors.mainOrange;

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
`;

const Overflow2 = () => {
  return (
    <>
      <PaperImgBox src={papers} alt="뭉쳐진 종이들" />
      <Poppins100>
        i always
        <br /> had to do something.
      </Poppins100>
      <Pretendard20>
        우리는 어릴적부터 바빴습니다. 늘 항상 무언가를 해야만 했습니다.
        <br /> 성인이 되어서도 여전히 바쁘게 살아야 하는 우리는 문제가 있는지도
        몰랐습니다.
      </Pretendard20>
    </>
  );
};

export default Overflow2;
