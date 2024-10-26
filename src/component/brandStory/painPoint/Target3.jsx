import styled from "styled-components";
import { Section } from "./TargetStyle";
import TargetTitle from "./TargetTitle";
import TargetContent from "./TargetContent";
import vwCalc from "../../../util/vwCalc";
import ImgBox from "../../ImgBox";
import painPoint3_1 from "../../../assets/brandStory/painPoint3_1.png";
import painPoint3_2 from "../../../assets/brandStory/painPoint3_2.png";
import ownStar from "../../../assets/icon/ownStar_black.svg";

const titleStyles = {
  pretendard48MarginTop: 320,
  pretendard48MarginLeft: 20,
  poppins350Top: 358,
  secondWordMarginTop: -74,
  secondWordMarginLeft: 394,
  targetCircleTop: 734,
  targetCircleLeft: 32,
};

const contentStyles = {
  imgBoxWrapperGap: 55,
  imgBoxWrapperMarginTop: -290,
  imgBoxWrapperMarginLeft: 770,
  imgBoxWrapperCol: true,
  textWrapperMarginTop: -184,
  textWrapperGap: 64,
  textWrapperCol: true,
};

const info = {
  targetNum: 3,
  koTitle: "디지털번아웃",
  enTitleWord1: "digital",
  enTitleWord2: "addiction",
};

const images = [
  { src: painPoint3_1, alt: "바위에 걸터앉은 남자", width: 260, height: 330 },
  { src: painPoint3_2, alt: "핸드폰을 하는 손", width: 810, height: 290 },
];

const painPoint = `하루종일 핸드폰만 보고 있으며 한 시도 
가만히 있지 못하고, 더 자극적인 반응만 
찾게되는 디지털 중독으로 인해 일상이 
붕괴되어 이를 탈피하길 원합니다.`;

const needs = `핸드폰을 아예 강압적으로 사용하지 못하게 
하는 것이 아닌 느긋하고 평화로운 아날로그 
활동을 통해 자연스럽게 핸드폰 사용량을 줄여 
일상의 여유를 찾고 싶어합니다.`;

const OwnStarImgBox = styled(ImgBox)`
  position: absolute;
  bottom: ${vwCalc(268)};
  right: ${vwCalc(187)};
`;

const Target3 = () => {
  const { targetNum, koTitle, enTitleWord1, enTitleWord2 } = info;
  return (
    <Section paddingRight={904}>
      <TargetTitle
        targetNum={targetNum}
        koTitle={koTitle}
        enTitleWord1={enTitleWord1}
        enTitleWord2={enTitleWord2}
        titleStyles={titleStyles}
      />
      <TargetContent
        images={images}
        painPoint={painPoint}
        needs={needs}
        contentStyles={contentStyles}
      />
      <OwnStarImgBox
        src={ownStar}
        alt="OWN 별 아이콘 장식"
        width={259}
        height={239}
      />
    </Section>
  );
};

export default Target3;
