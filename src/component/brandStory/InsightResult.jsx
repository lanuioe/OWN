import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import line from "../../assets/icon/line_drawing_insight.gif";
import ownStar from "../../assets/icon/ownStar_orange_fill.svg";

const MAIN_ORANGE = colors.mainOrange;
const MAIN_IVORY = colors.mainIvory;
const WHITE = "#ffffff";

const Wrapper = styled.div`
  padding-top: ${vwCalc(294)};
`;

const EnWrapper = styled.div`
  margin-bottom: ${vwCalc(72)};
  padding-left: ${vwCalc(192)};
  text-transform: uppercase;
  word-spacing: ${vwCalc(8)};
`;

const Poppins120 = styled(BasePoppins100)`
  color: ${MAIN_IVORY};
  font-size: ${vwCalc(120)};
  font-weight: 500;
`;

const Italic = styled.span`
  font-style: italic;
`;

const StrongTypo = styled.strong`
  display: inline-block;
  padding-top: ${vwCalc(44)};
  padding-left: ${vwCalc(368)};
  padding-bottom: ${vwCalc(44)};
  color: ${MAIN_ORANGE};
`;

const And = styled.span`
  padding-right: ${vwCalc(54)};
`;

const Pretendard20 = styled(BasePretendard20)`
  color: ${WHITE};
  text-align: center;
`;

const InsightImgBox = styled(ImgBox)`
  position: absolute;
  top: 0;
  left: 0;
`;

const OwnStarImgBox = styled(ImgBox)`
  position: absolute;
  right: ${vwCalc(172)};
  bottom: ${vwCalc(266)};
`;

const InsightResult = () => {
  return (
    <Wrapper>
      <EnWrapper>
        <Poppins120>
          we help people <Italic>who</Italic> are
        </Poppins120>
        <Poppins120>
          <StrongTypo>tired of life relax</StrongTypo>
        </Poppins120>
        <Poppins120>
          <And>and,</And> find themselves.
        </Poppins120>
      </EnWrapper>

      <Pretendard20>
        우리는 삶에 지친 사람들이 휴식을 소유하며, 자신을 찾아나갈 수 있도록
        돕습니다.
      </Pretendard20>

      <InsightImgBox
        src={line}
        hideScreenReader={true}
        width={1920}
        height={1080}
      />
      <OwnStarImgBox
        src={ownStar}
        hideScreenReader={true}
        width={88}
        height={80}
      />
    </Wrapper>
  );
};

export default InsightResult;
