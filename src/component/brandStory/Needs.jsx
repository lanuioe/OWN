import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { BasePoppins150 } from "../style/BasePoppins";
import { BasePretendard20 } from "../style/BasePretendard";
import ImgBox from "../ImgBox";
import needs1 from "../../assets/brandStory/needs1.png";
import needs2 from "../../assets/brandStory/needs2.png";
import needs3 from "../../assets/brandStory/needs3.png";
import line from "../../assets/icon/line_drawing_needs.gif";

const Poppins150 = styled(BasePoppins150)`
  text-transform: uppercase;
`;

const Word = styled.span`
  position: absolute;
  top: ${(props) => vwCalc(props.top)};
  left: ${(props) => vwCalc(props.left)};
`;

const NeedsImgBox = styled(ImgBox)`
  position: absolute;
  top: ${(props) => vwCalc(props.top)};
  left: ${(props) => vwCalc(props.left)};
`;

const Pretendard20 = styled(BasePretendard20)`
  margin-top: ${vwCalc(945)};
  text-align: center;
`;

const words = [
  { text: "what", top: 300, left: 360 },
  { text: "do", top: 300, left: 1189 },
  { text: "they", top: 470, left: 220 },
  { text: "need", top: 670, left: 1252 },
];

const images = [
  {
    src: needs1,
    alt: "두 손으로 얼굴을 가리고 울고 있는 여자의 앞모습",
    width: 278,
    height: 401,
    top: 189,
    left: 882,
  },
  {
    src: needs2,
    alt: "두 손으로 머리를 감싸고 좌절하고 있는 여자의 옆모습",
    width: 209,
    height: 283,
    top: 490,
    left: 663,
  },
  {
    src: needs3,
    alt: "공허하게 창 밖을 바라보고 있는 남자의 뒷모습",
    width: 222,
    height: 191,
    top: 700,
    left: 915,
  },
];

const Needs = () => {
  return (
    <>
      <Poppins150>
        {words.map((word, index) => (
          <Word key={index} top={word.top} left={word.left}>
            {word.text}
          </Word>
        ))}
      </Poppins150>

      {images.map((image, index) => (
        <NeedsImgBox
          key={index}
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          top={image.top}
          left={image.left}
        />
      ))}

      <Pretendard20>
        "그들에게 가장 필요한 것은 무엇일까?" 라는 고민 끝에
      </Pretendard20>

      <NeedsImgBox src={line} hideScreenReader={true} top={0} left={0} />
    </>
  );
};

export default Needs;
