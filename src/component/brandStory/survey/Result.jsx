import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import { colors } from "../../../styles";
import { BasePoppins100 } from "../../style/BasePoppins";
import { BasePretendard20 } from "../../style/BasePretendard";
import ImgBox from "../../ImgBox";
import OwnStar from "../../../assets/icon/ownStar_orange_big.svg";

const Section = styled.section`
  // background-color: lightyellow;
  position: relative;
  padding-right: ${vwCalc(1048)};
`;

const Poppins85 = styled(BasePoppins100)`
  display: block;
  margin-top: ${vwCalc(124)};
  margin-bottom: ${vwCalc(50)};
  font-size: ${vwCalc(85)};
  font-weight: 500;
  line-height: 125%;
  text-transform: uppercase;
  width: max-content;
`;

const Strong = styled.span`
  font-weight: 600;
`;

const Accent = styled(Strong)`
  color: ${colors.mainOrange};
`;

const OwnStarImgBox = styled(ImgBox)`
  position: absolute;
  top: ${vwCalc(116)};
  left: ${vwCalc(1720)};
`;

const Result = () => {
  return (
    <Section>
      <Poppins85>
        we realized the seriousness.
        <br />
        so i wanted to <Accent>help people</Accent>
        <br />
        who <Strong>don't know how to rest</Strong> even if
        <br />
        they ard given a break
        <br />
        and{" "}
        <Strong>
          those who
          <br />
          lost themselves
        </Strong>{" "}
        in
        <br />a fierce life to rest properly.
      </Poppins85>

      <BasePretendard20>
        우리는 그 심각성을 깨달았습니다. 그래서 우리는 휴식이 쥐어져도 제대로 쉴
        줄 모르는
        <br />
        사람들과 치열한 삶 속에서 자신을 잃은 사람들이 제대로 휴식할 수 있도록
        돕고 싶었습니다.
      </BasePretendard20>

      <OwnStarImgBox
        src={OwnStar}
        hideScreenReader={true}
        width={917}
        height={847}
      />
    </Section>
  );
};

export default Result;
