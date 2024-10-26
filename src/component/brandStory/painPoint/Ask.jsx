import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { BasePoppins150 } from "../../style/BasePoppins";
import { BasePretendard26 } from "../../style/BasePretendard";

const Section = styled.section`
  padding-left: ${vwCalc(80)};
  padding-right: ${vwCalc(1022)};
  white-space: wrap;
`;

const Poppins150 = styled(BasePoppins150)`
  margin-top: ${vwCalc(148)};
  margin-bottom: ${vwCalc(21)};
  width: ${vwCalc(980)};
  text-transform: uppercase;
  letter-spacing: ${vwCalc(-4.5)};
`;

const Ask = () => {
  return (
    <Section>
      <Poppins150>we asked who needed some rest</Poppins150>
      <BasePretendard26>
        우리는 어떤 휴식이 필요한지 직접 물어봤습니다.
      </BasePretendard26>
    </Section>
  );
};

export default Ask;
