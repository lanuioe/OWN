import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";
import GraphCircle from "../../../assets/brandStory/graph_circle.gif";
import ImgBox from "../../ImgBox";

const Wrapper = styled.div`
  position: relative;
  padding-right: ${vwCalc(1062)};
  // background-color: lightyellow;
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
`;

const GraphImgBox = styled(ImgBox)`
  position: absolute;
  top: ${vwCalc(270)};
  left: ${vwCalc(541)};
`;

const Survey3 = () => {
  return (
    <Wrapper>
      <Section>
        <SurveyTitle
          title="fritters increase"
          percentage={76}
          marginTop={223}
        />
        <SurveyInfo
          keyword="프리터족 증가"
          year={16}
          source="알바몬"
          participantNum="2,006"
        />
      </Section>
      <GraphImgBox
        src={GraphCircle}
        alt="76% 원형 그래프 모션"
        width={848}
        height={848}
      />
    </Wrapper>
  );
};

export default Survey3;
