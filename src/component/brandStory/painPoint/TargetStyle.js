import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { colors } from "../../../styles";
import { BasePretendard, BasePretendard26 } from "../../style/BasePretendard";
import { BasePoppins } from "../../style/BasePoppins";

export const Section = styled.section`
  position: relative;
  padding-right: ${(props) => vwCalc(props.paddingRight) || 0};
`;

/* ------- TargetTitle 스타일 */

export const Pretendard48 = styled(BasePretendard)`
  margin-top: ${(props) => vwCalc(props.marginTop) || 0};
  margin-left: ${(props) => vwCalc(props.marginLeft) || 0};
  font-family: "Pretendard";
  font-size: ${vwCalc(48)};
  color: ${colors.bigBlack};
  text-transform: uppercase;
  letter-spacing: ${vwCalc(-2)};
  width: max-content;
`;

export const Poppins350 = styled(BasePoppins)`
  position: absolute;
  top: ${(props) => vwCalc(props.top) || 0};
  font-size: ${vwCalc(350)};
  color: #f0f0f0;
  text-transform: uppercase;
  letter-spacing: ${vwCalc(-14)};
  z-index: 1;
  mix-blend-mode: difference;
`;

export const FirstWord = styled.div`
  margin-top: ${(props) => vwCalc(props.marginTop || 0)};
  margin-left: ${(props) => vwCalc(props.marginLeft || 0)};
`;

export const SecondWord = styled.div`
  margin-top: ${(props) => vwCalc(props.marginTop || 0)};
  margin-left: ${(props) => vwCalc(props.marginLeft || 0)};
`;

export const TargetCircle = styled.div`
  position: absolute;
  top: ${(props) => vwCalc(props.top || 0)};
  left: ${(props) => vwCalc(props.left || 0)};
  padding-top: ${vwCalc(131)};
  width: ${vwCalc(300)};
  height: ${vwCalc(300)};
  font-family: "Poppins";
  font-size: ${vwCalc(32)};
  color: #ffffff;
  background-color: ${colors.mainOrange};
  border-radius: 50%;
  text-align: center;
  letter-spacing: ${vwCalc(-0.96)};
  text-transform: uppercase;
`;

export const TargetNum = styled.span`
  font-weight: 600;
`;

/* ------- TargetContent 스타일 */

export const Flex = styled.div`
  display: flex;
  gap: ${(props) => vwCalc(props.gap || 50)};
  flex-direction: ${(props) => (props.col ? "column" : "row")};
`;

export const ImgBoxWrapper = styled.div`
  display: flex;
  margin-top: ${(props) => vwCalc(props.marginTop || 0)};
  margin-left: ${(props) => vwCalc(props.marginLeft || 0)};
  gap: ${(props) => vwCalc(props.gap || 50)};
  flex-direction: ${(props) => (props.col ? "column" : `row`)};
  ${(props) => (props.col ? "align-items: flex-end" : ``)};
`;

export const TextWrapper = styled.section`
  display: flex;
  width: max-content;
  margin-top: ${(props) => vwCalc(props.marginTop || 0)};
  margin-left: ${(props) => vwCalc(props.marginLeft || 0)};
  gap: ${(props) => vwCalc(props.gap || 0)};
  flex-direction: ${(props) => (props.col ? `column` : "row")};
`;

export const Description = styled(BasePretendard26)`
  margin-top: ${vwCalc(13)};
  white-space: pre;
`;
