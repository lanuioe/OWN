import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { BasePoppins150 } from "../../style/BasePoppins";
import { BasePretendard26 } from "../../style/BasePretendard";
import ImgBox from "../../ImgBox";
import solution from "../../../assets/brandStory/solution_big.png";

const Poppins315 = styled(BasePoppins150)`
  margin-top: ${vwCalc(148)};
  margin-bottom: ${vwCalc(138)};
  font-size: ${vwCalc(315)};
  text-align: center;
  letter-spacing: ${vwCalc(-2)};
`;

const Flex = styled.ul`
  position: relative;
  // display: flex;
  padding-left: ${vwCalc(25)};
  // padding-right: ${vwCalc(20)};
  // justify-content: space-between;
`;

const Pretendard30 = styled(BasePretendard26)`
  position: absolute;
  left: ${(props) => vwCalc(props.left)};
  right: ${(props) => vwCalc(props.right)};
  font-size: ${vwCalc(30)};
`;

const CoreValue = () => {
  return (
    <>
      <ImgBox
        src={solution}
        alt="일출을 보며 양팔을 벌리고 앉아 명상하는 사람의 뒷모습"
      />
      <Poppins315>core value</Poppins315>
      <Flex>
        <Pretendard30 as="li">we</Pretendard30>
        <Pretendard30 as="li" left={920}>
          have
        </Pretendard30>
        <Pretendard30 as="li" right={25}>
          establish
        </Pretendard30>
      </Flex>
    </>
  );
};

export default CoreValue;
