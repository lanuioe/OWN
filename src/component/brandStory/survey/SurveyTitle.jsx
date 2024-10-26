import styled from "styled-components";
import { BasePoppins100 } from "../../style/BasePoppins";
import vwCalc from "../../../util/vwCalc";

const Poppins120 = styled(BasePoppins100)`
  display: block;
  margin-top: ${(props) => vwCalc(props.marginTop) || 0};
  font-size: ${vwCalc(120)};
  text-transform: uppercase;
`;

const Poppins230 = styled(BasePoppins100)`
  display: block;
  margin-top: ${vwCalc(6)};
  font-size: ${vwCalc(230)};
  letter-spacing: ${vwCalc(-6.9)};
`;

const SurveyTitle = ({ title, percentage, marginTop }) => {
  return (
    <>
      <Poppins120 marginTop={marginTop}>{title}</Poppins120>
      <Poppins230>{percentage}%</Poppins230>
    </>
  );
};

export default SurveyTitle;
