import styled from "styled-components";
import { useState } from "react";
import vwCalc from "../../../util/vwCalc";
import { BasePoppins150 } from "../../style/BasePoppins";
import ImgBox from "../../ImgBox";

const Poppins150 = styled(BasePoppins150)`
  font-weight: 400;
  color: #bbbbb8;
  line-height: ${vwCalc(150)};
  text-align: center;
  letter-spacing: ${vwCalc(-4.5)};
  transition: color 0.3s ease-in-out;

  &:hover {
    position: relative;
    color: #f0f0f0;
    mix-blend-mode: difference;
    z-index: 1;
    cursor: pointer;
  }
`;

const KeywordImgBox = styled(ImgBox)`
  position: absolute;
  top: ${(props) => vwCalc(props.$top)};
  left: ${(props) => vwCalc(props.$left)};
  opacity: ${(props) => (props.$isHovering ? 1 : 0)};
  transition: opacity 0.3s ease-in-out;
`;

const KeywordCommon = ({ keyword, images = [] }) => {
  const [isHovering, setIsHovering] = useState(false);

  const onMouseOver = () => setIsHovering(true);
  const onMouseOut = () => setIsHovering(false);

  return (
    <>
      <Poppins150 onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
        {keyword}
      </Poppins150>

      {images.map((images, index) => (
        <KeywordImgBox
          key={index}
          src={images.src}
          alt={images.alt}
          width={images.width}
          height={images.height}
          $top={images.top}
          $left={images.left}
          $isHovering={isHovering}
        />
      ))}
    </>
  );
};

export default KeywordCommon;
