import styled from "styled-components";
import React, { forwardRef, useRef } from "react";
import { useHorizontalScroll } from "../hook/useHorizontalScroll";

const ScrollContainer = styled.div`
  display: flex;
  overflow-x: auto;
  overflow-y: hidden;
  width: 100vw;
  height: 100vh;
`;

const HorizontalScroll = forwardRef(({ children }, ref) => {
  const internalRef = useRef(null);
  const scrollRef = ref || internalRef;
  useHorizontalScroll(scrollRef);

  return <ScrollContainer ref={scrollRef}>{children}</ScrollContainer>;
});

export default HorizontalScroll;
