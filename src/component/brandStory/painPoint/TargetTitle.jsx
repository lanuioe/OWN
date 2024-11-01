import {
  Pretendard48,
  Poppins350,
  FirstWord,
  SecondWord,
  TargetCircle,
  TargetNum,
} from "./TargetStyle";

const TargetTitle = ({
  targetNum,
  koTitle,
  enTitleWord1,
  enTitleWord2,
  titleStyles = {},
  $rotation,
}) => {
  const {
    pretendard48MarginTop,
    pretendard48MarginLeft,
    poppins350Top,
    firstWordMarginTop,
    firstWordMarginLeft,
    secondWordMarginTop,
    secondWordMarginLeft,
    targetCircleTop,
    targetCircleLeft,
  } = titleStyles;

  return (
    <>
      <Pretendard48
        as="div"
        $marginTop={pretendard48MarginTop}
        $marginLeft={pretendard48MarginLeft}
      >
        &#40;0{targetNum}&#41; {koTitle} &#45; {enTitleWord1} {enTitleWord2}
      </Pretendard48>

      <Poppins350 as="div" $top={poppins350Top}>
        <FirstWord
          $marginTop={firstWordMarginTop}
          $marginLeft={firstWordMarginLeft}
        >
          {enTitleWord1}
        </FirstWord>
        <SecondWord
          $marginTop={secondWordMarginTop}
          $marginLeft={secondWordMarginLeft}
        >
          {enTitleWord2}
        </SecondWord>
      </Poppins350>

      <TargetCircle
        $top={targetCircleTop}
        $left={targetCircleLeft}
        $rotation={$rotation}
      >
        target.<TargetNum>0{targetNum}</TargetNum>
      </TargetCircle>
    </>
  );
};

export default TargetTitle;
