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
        marginTop={pretendard48MarginTop}
        marginLeft={pretendard48MarginLeft}
      >
        &#40;0{targetNum}&#41; {koTitle} &#45; {enTitleWord1} {enTitleWord2}
      </Pretendard48>

      <Poppins350 top={poppins350Top}>
        <FirstWord
          marginTop={firstWordMarginTop}
          marginLeft={firstWordMarginLeft}
        >
          {enTitleWord1}
        </FirstWord>
        <SecondWord
          marginTop={secondWordMarginTop}
          marginLeft={secondWordMarginLeft}
        >
          {enTitleWord2}
        </SecondWord>
      </Poppins350>

      <TargetCircle top={targetCircleTop} left={targetCircleLeft}>
        target.<TargetNum>0{targetNum}</TargetNum>
      </TargetCircle>
    </>
  );
};

export default TargetTitle;
