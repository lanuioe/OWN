import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";
import { colors } from "../../../styles";

const Wrapper = styled.div`
  position: relative;
  padding-right: ${vwCalc(1195)};
`;

const Section = styled.section`
  position: relative;
  z-index: 1;
`;

const RedCircle = styled.div`
  position: absolute;
  width: ${vwCalc(821)};
  height: ${vwCalc(821)};
  top: ${vwCalc(303)};
  left: ${vwCalc(50)};
  background-color: ${colors.mainOrange};
  border-radius: 50%;
`;

const Survey1 = () => {
  return (
    <Wrapper>
      <Section>
        <SurveyTitle
          title="increased burnout"
          percentage={43.9}
          marginTop={420}
        />
        <SurveyInfo
          keyword="번아웃 증가"
          year={22}
          source="동아일보"
          participantNum="1,542"
        />
      </Section>
      <RedCircle></RedCircle>
    </Wrapper>
  );
};

export default Survey1;
