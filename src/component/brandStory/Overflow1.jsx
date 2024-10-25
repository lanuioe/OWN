import styled from "styled-components";
import { useState } from "react";
import vwCalc from "../../util/vwCalc";
import { colors } from "../../styles";
import { BasePoppins100 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import people from "../../assets/brandStory/people.png";
import peopleEmotion from "../../assets/brandStory/people_emotion.gif";
import ownStar from "../../assets/icon/ownStar_orange_small.svg";

const MAIN_ORANGE = colors.mainOrange;

const Flex = styled.div`
  display: flex;
  padding-top: ${vwCalc(152)};
  align-items: flex-end;
  gap: ${vwCalc(164)};
`;

const Poppins100 = styled(BasePoppins100)`
  width: ${vwCalc(694)};
  margin-top: ${vwCalc(43)};
  margin-left: ${vwCalc(68)};
  margin-bottom: ${vwCalc(56)};
  color: ${MAIN_ORANGE};
  text-transform: capitalize;
`;

const Pretendard20 = styled(BasePretendard20)`
  margin-left: ${vwCalc(82)};
  margin-bottom: ${vwCalc(5)};
`;

const OwnStarImgBox = styled(ImgBox)`
  margin-left: ${vwCalc(59)};
`;

const PeopleImgBox = styled(ImgBox)`
  cursor: pointer;
`;

const Overflow1 = () => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseOver = () => setIsHovering(true);
  const onMouseOut = () => setIsHovering(false);

  return (
    <Flex>
      <div>
        <OwnStarImgBox
          src={ownStar}
          hideScreenReader={true}
          width={53}
          height={47}
        />

        <Poppins100>
          people are always busy. since when did it start?
        </Poppins100>
        <Pretendard20>
          사람들은 언제나 바빴습니다. 언제부터였을까요?
        </Pretendard20>
      </div>
      <div>
        <PeopleImgBox
          src={isHovering ? peopleEmotion : people}
          alt="횡단보도를 건너는 사람들"
          width={914}
          height={848}
          onMouseOver={onMouseOver}
          onMouseOut={onMouseOut}
        />
      </div>
    </Flex>
  );
};

export default Overflow1;
