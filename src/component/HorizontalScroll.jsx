import styled from "styled-components";
import { useHorizontalScroll } from "../hook/useHorizontalScroll";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

const HorizontalScroll = ({ children }) => {
  const scrollRef = useHorizontalScroll();

  return <ScrollContainer ref={scrollRef}>{children}</ScrollContainer>;
};

export default HorizontalScroll;
