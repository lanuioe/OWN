import styled from "styled-components";
import { BasePretendard20 } from "../../style/BasePretendard";
import vwCalc from "../../../util/vwCalc";

const Pretendard20 = styled(BasePretendard20)`
  display: flex;
  gap: ${vwCalc(12)};
  margin-top: ${vwCalc(5)};

  li {
    position: relative;

    &:not(:last-child)::after {
      content: "|";
      margin-left: ${vwCalc(12)};
    }
  }
`;

const SurveyInfo = ({ keyword, year, source, participantNum }) => {
  return (
    <Pretendard20 as="ul">
      <li>{keyword}</li>
      <li>{year}년</li>
      <li>{source}</li>
      <li>{participantNum}명</li>
    </Pretendard20>
  );
};

export default SurveyInfo;
