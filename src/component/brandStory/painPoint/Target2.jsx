import { Section } from "./TargetStyle";
import TargetTitle from "./TargetTitle";
import TargetContent from "./TargetContent";
import painPoint2_1 from "../../../assets/brandStory/painPoint2_1.png";
import painPoint2_2 from "../../../assets/brandStory/painPoint2_2.png";

const titleStyles = {
  pretendard48MarginTop: 800,
  poppins350Top: 430,
  firstWordMarginLeft: -6,
  secondWordMarginTop: -724,
  secondWordMarginLeft: 346,
  targetCircleTop: 141,
};

const contentStyles = {
  flexCol: true,
  imgBoxWrapperMarginTop: -540,
  imgBoxWrapperMarginLeft: 780,
  textWrapperMarginLeft: 1322,
  textWrapperGap: 42,
};

const info = {
  targetNum: 2,
  koTitle: "청년번아웃",
  enTitleWord1: "youth",
  enTitleWord2: "burnout",
};

const images = [
  {
    src: painPoint2_1,
    alt: "침대에 엎드려 있는 여자",
    width: 1018,
    height: 412,
  },
  {
    src: painPoint2_2,
    alt: "풀밭에 엎드려 있는 여자",
    width: 482,
    height: 321,
  },
];

const painPoint = `취직을 목표로 열심히 달려왔는데 목표에 달성한 
후의 성취감은 잠시 뿐이고, 일과 휴식의 밸런스
붕괴로 무언가 하나가 빠진 것처럼 우울함에 빠져
번아웃 초기 증상이 생겼습니다.`;

const needs = `삶에 지쳐 무의식적으로 일과 휴식의 
밸런스를 찾고 있지만 휴식이라는 것
자체에도 불안함을 느껴 어떤
방식으로 쉬는 건지 어려워합니다.`;

const Target2 = ({ $rotation }) => {
  const { targetNum, koTitle, enTitleWord1, enTitleWord2 } = info;
  return (
    <Section $paddingRight={500}>
      <TargetTitle
        targetNum={targetNum}
        koTitle={koTitle}
        enTitleWord1={enTitleWord1}
        enTitleWord2={enTitleWord2}
        titleStyles={titleStyles}
        $rotation={$rotation}
      />
      <TargetContent
        images={images}
        painPoint={painPoint}
        needs={needs}
        contentStyles={contentStyles}
      />
    </Section>
  );
};

export default Target2;
