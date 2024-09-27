import styled from "styled-components";
import { useState } from "react";
import RandomBg from "./RandomBg";

const PADDING_SIDE = "calc((80 / 1920) * 100vw)";

const MainWrapper = styled.section`
  position: relative;
  color: ${(props) => props.$textColor};
`;

const Slogan = styled.div`
  font-size: calc((140 / 1920) * 100vw);
  text-transform: uppercase;
  white-space: nowrap;
`;

const Strong = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const TextPos1 = styled.div`
  padding-top: calc((303 / 1920) * 100vw);
  margin-left: calc((349 / 1920) * 100vw);
`;

const TextPos2 = styled.div`
  margin-left: calc((198 / 1920) * 100vw);
`;

const TextPos3 = styled.span`
  margin-left: calc((359 / 1920) * 100vw);
`;

const TextPos4 = styled.div`
  margin-left: calc((984 / 1920) * 100vw);
`;

const ServiceIntroduction = styled.p`
  position: absolute;
  top: calc((630 / 1920) * 100vw);
  left: calc((217 / 1920) * 100vw);
  width: calc((502 / 1920) * 100vw);
  font-size: calc((21 / 1920) * 100vw);
  font-weight: 400;
  line-height: 150%;
`;

const Flex = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 ${PADDING_SIDE};
  margin-top: 24vh;
  text-transform: uppercase;
`;

const ServiceKeyword = styled.li`
  font-size: calc((20 / 1920) * 100vw);
`;

const MainHome = () => {
  const [textColor, setTextColor] = useState("#FFFFFF");
  return (
    <MainWrapper $textColor={textColor}>
      <Slogan>
        <TextPos1>you can own</TextPos1>
        <TextPos2>
          <Strong>a rest</Strong>
          <TextPos3>and find</TextPos3>
        </TextPos2>
        <TextPos4>
          <Strong>yourself</Strong>
        </TextPos4>
      </Slogan>
      <ServiceIntroduction>
        사람들은 바쁘게 흘러가는 현대사회로 인해, 쉴 수 없어지면서 점점 휴식을
        잊어버리게 되었습니다. 오운은 여러분이 휴식을 취하면서 스스로를 찾아
        나갈 수 있도록 돕습니다.
      </ServiceIntroduction>
      <Flex>
        <ServiceKeyword>to own a rest</ServiceKeyword>
        <ServiceKeyword>with an analog kit</ServiceKeyword>
        <ServiceKeyword>different experience</ServiceKeyword>
      </Flex>
      <RandomBg setTextColor={setTextColor} />
    </MainWrapper>
  );
};

export default MainHome;
