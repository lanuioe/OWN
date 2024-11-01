import styled from "styled-components";
import vwCalc from "../../util/vwCalc";
import { colors, fontSize } from "../../styles";

const fontSizes = {
  small: `clamp(8px, ${fontSize.kSizeText20}, 20px)`,
  medium: `clamp(14px, ${fontSize.kSizeHead}, 26px)`,
  large: `clamp(23px, ${vwCalc(35)}, 35px)`,
};

export const BasePretendard = styled.p`
  color: ${(props) => props.$color || colors.smallBlack};
  font-size: ${(props) => props.$fontSize};
  font-weight: ${(props) => props.$fontWeight || 400};
  line-height: ${(props) => props.$lineHeight || "140%"};
`;

export const BasePretendard20 = styled(BasePretendard)`
  font-size: ${(props) => props.$fontSize || fontSizes.small};
`;

export const BasePretendard26 = styled(BasePretendard)`
  font-size: ${(props) => props.$fontSize || fontSizes.medium};
  line-height: ${(props) => props.$lineHeight || "130%"};
`;

export const BasePretendard35 = styled(BasePretendard)`
  font-size: ${(props) => props.$fontSize || fontSizes.large};
  font-weight: ${(props) => props.$fontWeight || 600};
`;
