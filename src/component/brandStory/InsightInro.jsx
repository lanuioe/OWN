import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard26 } from "../style/BasePretendard";

const Poppins80 = styled(BasePoppins100)`
  margin-top: ${vwCalc(446)};
  font-size: ${vwCalc(80)};
  color: ${colors.mainOrange};
  text-transform: uppercase;
  text-align: center;
`;

const Pretendard26 = styled(BasePretendard26)`
  margin-top: ${vwCalc(26)};
  color: #ffffff;
  text-align: center;
`;

const InsightIntro = () => {
  return (
    <>
      <Poppins80>we were able to insight</Poppins80>
      <Pretendard26>우리는 인사이트를 얻을 수 있었습니다.</Pretendard26>
    </>
  );
};

export default InsightIntro;
