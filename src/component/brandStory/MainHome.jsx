import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { BasePretendard20 } from "../style/BasePretendard";

const PADDING_SIDE = vwCalc(80);

const MainWrapper = styled.section`
  position: relative;
  color: ${(props) => props.$color};
  text-transform: uppercase;
`;

const Slogan = styled.div`
  font-size: ${vwCalc(140)};
  white-space: nowrap;
`;

const Strong = styled.span`
  font-weight: 700;
  font-style: italic;
`;

const TextPos = styled.div`
  margin-left: ${(props) => vwCalc(props.$marginLeft) || 0};
  padding-top: ${(props) => vwCalc(props.$paddingTop) || 0};
`;

const ServiceIntroduction = styled.p`
  position: absolute;
  top: ${vwCalc(630)};
  left: ${vwCalc(217)};
  width: ${vwCalc(502)};
  font-size: ${vwCalc(21)};
  font-weight: 400;
  line-height: 1.5;
`;

const Flex = styled.ul`
  display: flex;
  justify-content: space-between;
  padding: 0 ${PADDING_SIDE};
  margin-top: 24vh;
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-image: url(${(props) => props.$backgroundImage});
  background-size: cover;
  background-position: center;
  z-index: -1;
`;

const textData = [
  { text: "you can own", marginLeft: 349, paddingTop: 303 },
  { text: "a rest", marginLeft: 198, isInline: true, isStrong: true },
  { text: "and find", marginLeft: 359, isInline: true },
  { text: "yourself", marginLeft: 984, isStrong: true },
];

const keywordData = [
  "to own a rest",
  "with an analog kit",
  "different experience",
];

const MainHome = ({ color, backgroundImage }) => {
  return (
    <MainWrapper $color={color}>
      <Slogan>
        {textData.map(
          ({ text, marginLeft, paddingTop, isStrong, isInline }, index) => (
            <TextPos
              key={index}
              $marginLeft={marginLeft}
              $paddingTop={paddingTop}
              as={isInline ? "span" : "div"}
            >
              {isStrong ? <Strong>{text}</Strong> : text}
            </TextPos>
          )
        )}
      </Slogan>

      <ServiceIntroduction>
        사람들은 바쁘게 흘러가는 현대사회로 인해, 쉴 수 없어지면서 점점 휴식을
        잊어버리게 되었습니다. 오운은 여러분이 휴식을 취하면서 스스로를 찾아
        나갈 수 있도록 돕습니다.
      </ServiceIntroduction>

      <Flex>
        {keywordData.map((text, index) => (
          <BasePretendard20 key={index} as="li" $color={color}>
            {text}
          </BasePretendard20>
        ))}
      </Flex>
      <Background $backgroundImage={backgroundImage} />
    </MainWrapper>
  );
};

export default MainHome;
