import { Flex, ImgBoxWrapper, TextWrapper, Description } from "./TargetStyle";
import { BasePretendard35 } from "../../style/BasePretendard";
import ImgBox from "../../ImgBox";

const TargetContent = ({ images, painPoint, needs, contentStyles = {} }) => {
  const {
    flexGap,
    flexCol,
    imgBoxWrapperGap,
    imgBoxWrapperCol,
    imgBoxWrapperMarginTop,
    imgBoxWrapperMarginLeft,
    textWrapperGap,
    textWrapperCol,
    textWrapperMarginTop,
    textWrapperMarginLeft,
  } = contentStyles;

  return (
    <Flex $gap={flexGap} $col={flexCol}>
      <ImgBoxWrapper
        $gap={imgBoxWrapperGap}
        $col={imgBoxWrapperCol}
        $marginTop={imgBoxWrapperMarginTop}
        $marginLeft={imgBoxWrapperMarginLeft}
      >
        {images.map((img, index) => (
          <ImgBox
            key={index}
            src={img.src}
            alt={img.alt}
            width={img.width}
            height={img.height}
          />
        ))}
      </ImgBoxWrapper>

      <TextWrapper
        $gap={textWrapperGap}
        $col={textWrapperCol}
        $marginTop={textWrapperMarginTop}
        $marginLeft={textWrapperMarginLeft}
      >
        <dl>
          <BasePretendard35 as="dt">Pain point</BasePretendard35>
          <Description as="dd">{painPoint}</Description>
        </dl>
        <dl>
          <BasePretendard35 as="dt">Needs</BasePretendard35>
          <Description as="dd">{needs}</Description>
        </dl>
      </TextWrapper>
    </Flex>
  );
};

export default TargetContent;
