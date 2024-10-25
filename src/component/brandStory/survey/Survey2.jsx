import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";
import { colors } from "../../../styles";
import { BasePretendard20 } from "../../style/BasePretendard";

const GRAY = "#DFDFDF";
const MAIN_ORANGE = colors.mainOrange;
const WHITE = "#FFFFFF";

const Wrapper = styled.div`
  position: relative;
  padding-right: ${vwCalc(1195)};
`;

const BarChartWrapper = styled(BasePretendard20)`
  position: absolute;
  left: ${vwCalc(500)};
  bottom: 0;
  display: flex;
  gap: ${vwCalc(44)};
  align-items: flex-end;
`;

const BarChart = styled.ol`
  display: flex;
  flex-direction: column;
  width: ${vwCalc(215)};
  padding-bottom: ${vwCalc(28)};
  justify-content: flex-end;
  font-family: Pretendard;
  text-align: center;
  text-transform: uppercase;
`;

const BarChart1 = styled(BarChart)`
  background-color: ${GRAY};
  height: ${vwCalc(346)};
`;

const BarChart2 = styled(BarChart)`
  background-color: ${GRAY};
  height: ${vwCalc(503)};
`;

const BarChart3 = styled(BarChart)`
  background-color: ${MAIN_ORANGE};
  height: ${vwCalc(914)};
  color: ${WHITE};
`;

const Survey2 = () => {
  return (
    <Wrapper>
      <section>
        <SurveyTitle
          title="dopamine addiction"
          percentage={27.4}
          marginTop={84}
        />
        <SurveyInfo
          keyword="도파민 중독"
          year={24}
          source="인크루드"
          participantNum="870"
        />
      </section>
      <BarChartWrapper as="ul">
        <BarChart1>1 to 10 minutes </BarChart1>
        <BarChart2>10 to 30 minutes</BarChart2>
        <BarChart3>
          30 minutes
          <br />
          to 1 hour
        </BarChart3>
      </BarChartWrapper>
    </Wrapper>
  );
};

export default Survey2;
