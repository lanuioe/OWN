import styled, { keyframes, css } from "styled-components";
import vwCalc from "../../../util/vwCalc";

const increaseGraph = (targetHeight) => keyframes`
  from { height: 0; }
  to { height: ${targetHeight}; }
`;

const BarChart = styled.li`
  display: flex;
  flex-direction: column;
  width: ${vwCalc(215)};
  height: ${(props) => vwCalc(props.height)};
  padding-bottom: ${vwCalc(28)};
  background-color: ${(props) => props.color};
  justify-content: flex-end;
  font-family: Pretendard;
  text-align: center;
  text-transform: uppercase;

  ${({ $targetHeight, $isVisible }) =>
    $isVisible &&
    css`
      animation: ${increaseGraph($targetHeight)} 2s ease-out forwards;
    `}
`;

export default BarChart;
