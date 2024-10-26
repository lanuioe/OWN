import styled from "styled-components";
import { colors } from "../../../styles";
import vwCalc from "../../../util/vwCalc";
import { BasePretendard20 } from "../../style/BasePretendard";
import SurveyTitle from "./SurveyTitle";
import SurveyInfo from "./SurveyInfo";
import BarChartContainer from "./BarChartContainer";

const GRAY = "#DFDFDF";
const MAIN_ORANGE = colors.mainOrange;

const barChartData = [
  { color: GRAY, targetHeight: vwCalc(346), label: "1 to 10 minutes" },
  { color: GRAY, targetHeight: vwCalc(503), label: "10 to 30 minutes" },
  {
    color: MAIN_ORANGE,
    targetHeight: vwCalc(914),
    label: "30 minutes to 1 hour",
  },
];

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
        {barChartData.map((data, index) => (
          <BarChartContainer
            key={index}
            color={data.color}
            targetHeight={data.targetHeight}
            label={data.label}
          />
        ))}
      </BarChartWrapper>
    </Wrapper>
  );
};

export default Survey2;
