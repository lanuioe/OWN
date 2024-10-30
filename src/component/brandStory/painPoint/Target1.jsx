import { Section } from "./TargetStyle";
import TargetTitle from "./TargetTitle";
import TargetContent from "./TargetContent";
import painPoint1_1 from "../../../assets/brandStory/painPoint1_1.png";
import painPoint1_2 from "../../../assets/brandStory/painPoint1_2.png";

const titleStyles = {
  pretendard48MarginTop: 320,
  poppins350Top: 349,
  secondWordMarginTop: -55,
  secondWordMarginLeft: 424,
  targetCircleTop: 734,
  targetCircleLeft: 69,
};

const contentStyles = {
  imgBoxWrapperMarginTop: -30,
  imgBoxWrapperMarginLeft: 948,
  textWrapperGap: 84,
  textWrapperCol: true,
};

const info = {
  targetNum: 1,
  koTitle: "프리터족",
  enTitleWord1: "the",
  enTitleWord2: "freeters",
};

const images = [
  { src: painPoint1_1, alt: "뒤돌아 누워있는 여자", width: 503, height: 598 },
  { src: painPoint1_2, alt: "누워있는 고양이", width: 538, height: 345 },
];

const painPoint = `그냥 흘러가는 자신의 잉여 시간이 아까워 
알차고 의미있는 하루를 보내고 싶은데, 
자신이 좋아하는 것이 무엇인지 또한, 
어떤 활동을 해야 할 지도 모르겠고 
어떤 의지도, 의욕도 생기지 않습니다.`;

const needs = `현재는 알바로 생계를 이어나가고 있지만, 
미래에 현재 생활이 유지가 가능할지 두렵고, 
또한 지금의 시간들이 그냥 지나가는게 
아까워 자신의 잉여 시간을 생산성 있게 보내 
미래에는 더 안정적이길 원합니다.`;

const Target1 = () => {
  const { targetNum, koTitle, enTitleWord1, enTitleWord2 } = info;
  return (
    <Section $paddingRight={464}>
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
    </Section>
  );
};

export default Target1;
