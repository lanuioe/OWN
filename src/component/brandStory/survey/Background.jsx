import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { BasePoppins150 } from "../../style/BasePoppins";
import { BasePretendard26 } from "../../style/BasePretendard";

const Section = styled.section`
  display: inline-block;
  padding-left: ${vwCalc(80)};
  padding-right: ${vwCalc(760)};
`;

const Poppins150 = styled(BasePoppins150)`
  display: block;
  margin-top: ${vwCalc(223)};
  letter-spacing: ${vwCalc(-4.5)};
  text-transform: uppercase;
`;

const FirstPretendard26 = styled(BasePretendard26)`
  font-family: Pretendard;
  margin-top: ${vwCalc(86)};
  margin-bottom: ${vwCalc(34)};
  width: max-content;
`;

const SecondPretendard26 = styled(BasePretendard26)`
  width: max-content;
`;

const Background = () => {
  return (
    <Section>
      <Poppins150>
        society,
        <br /> rest is
      </Poppins150>
      <FirstPretendard26>
        OWN은 심각한 현 상황을 파악하기 위해 2030대 사용자 60명을
        <br />
        대상으로 설문조사를 진행했습니다.
      </FirstPretendard26>
      <SecondPretendard26>
        설문 조사 결과, 사용자들은 모두 휴식이 필요했지만 실제로 휴식을
        <br />
        취할 수 있는 비율은 67.5%밖에 되지 않았으며 사람들 대부분 짧은
        <br />
        휴식시간을 이용해 디지털 매체를 이용하고 있었습니다.
      </SecondPretendard26>
    </Section>
  );
};

export default Background;
