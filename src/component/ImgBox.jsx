import styled from "styled-components";
import vwCalc from "../util/vwCalc";

const Figure = styled.figure`
  width: ${(props) => (props.width ? vwCalc(props.width) : "auto")};
  height: ${(props) => (props.height ? vwCalc(props.height) : "auto")};
`;

const Img = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const Figcaption = styled.figcaption`
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip-path: inset(50%);
  border: 0;
  clip: rect(0 0 0 0);
`;

const ImgBox = ({
  src,
  alt = "",
  width,
  height,
  hideScreenReader = false,
  ...props
}) => {
  return (
    <Figure width={width} height={height} {...props}>
      <Img
        src={src}
        alt={hideScreenReader ? undefined : alt}
        aria-hidden={hideScreenReader ? true : undefined}
        role={hideScreenReader ? "presentation" : undefined}
      />
      {!hideScreenReader && <Figcaption>{alt}</Figcaption>}
    </Figure>
  );
};

export default ImgBox;
