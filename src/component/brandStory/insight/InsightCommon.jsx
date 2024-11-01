import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { colors } from "../../../styles";
import { BasePoppins100 } from "../../style/BasePoppins";
import { BasePretendard20, BasePretendard35 } from "../../style/BasePretendard";

const MAIN_ORANGE = colors.mainOrange;
const GRAY = "#555555";
const WHITE = "#ffffff";

const Section = styled.section`
  position: relative;
  width: calc(100vw / 3);
  height: 100vh;
  border-left: 1px solid ${GRAY};
  border-right: 1px solid ${GRAY};

  &:hover {
    background-image: url(${(props) => props.$image});
    background-size: cover;
    cursor: pointer;
  }
`;

const H3 = styled(BasePoppins100)`
  padding-top: ${vwCalc(157)};
  font-size: ${vwCalc(24)};
  font-weight: 500;
  color: ${MAIN_ORANGE};
  text-transform: uppercase;
  text-align: center;
`;

const TextWrapper = styled.div`
  position: absolute;
  left: ${vwCalc(30)};
  bottom: ${vwCalc(78)};
`;

const Pretendard35 = styled(BasePretendard35)`
  color: ${WHITE};
  text-transform: capitalize;
  white-space: pre-wrap;
`;

const Pretendard24 = styled(BasePretendard20)`
  margin-top: ${vwCalc(18)};
  font-size: ${vwCalc(24)};
  color: ${MAIN_ORANGE};
`;

const InsightCommon = ({ num, enParagraph, koParagraph }) => {
  const imagePath = require(`../../../assets/brandStory/insight${num}.png`);

  return (
    <>
      <li>
        <Section $image={imagePath}>
          <H3>insight 0{num}</H3>
          <TextWrapper>
            <Pretendard35>{enParagraph}</Pretendard35>
            <Pretendard24>{koParagraph}</Pretendard24>
          </TextWrapper>
        </Section>
      </li>
    </>
  );
};

export default InsightCommon;
