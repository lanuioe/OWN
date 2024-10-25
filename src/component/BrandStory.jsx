import styled from "styled-components";
import { useState } from "react";
import { SectionsContainer, Section } from "react-fullpage";
import { colors } from "../styles";
import MainHome from "./MainHome";
import Overflow1 from "./brandStory/Overflow1";
import Overflow2 from "./brandStory/Overflow2";
import Overflow3 from "./brandStory/Overflow3";
import Survey from "./brandStory/Survey";
import Needs from "./brandStory/Needs";
import PainPoint from "./brandStory/PainPoint";
import InsightIntro from "./brandStory/InsightInro";
import Insight from "./brandStory/Insight";
import InsightResult from "./brandStory/InsightResult";
import Solution from "./Solution";
import Outro from "./Outro";
import vwCalc from "../util/vwCalc";

const backgroundColors = {
  0: "transparent",
  7: colors.smallBlack,
  8: colors.smallBlack,
  9: colors.smallBlack,
  default: colors.mainIvory,
};

const SectionWrapper = styled.div`
  position: relative;
  overflow-y: ${(props) => (props.isScrollable ? "auto" : "hidden")};
  height: 100vh;
  background-color: ${(props) =>
    backgroundColors[props.index] || backgroundColors.default};
`;

const StyledNavigation = styled.div`
  .Navigation {
    right: ${vwCalc(5)} !important;
  }

  .Navigation a {
    margin: ${vwCalc(16)} !important;
    padding: ${vwCalc(5.5)} !important;
    background-color: ${colors.mainBeige} !important;
    opacity: 0.6;

    &:hover {
      background-color: ${colors.mainOrange} !important;
      opacity: 1;
    }
  }

  .Navigation a[style*="scale"] {
    background-color: ${colors.mainOrange} !important;
    opacity: 1;
  }
`;

const BrandStory = () => {
  const [initialActiveSection, setInitialActiveSection] = useState(0);

  const onScroll = (p) => {
    if (initialActiveSection === 0) setInitialActiveSection(p.activeSection);
  };

  const scrollToTop = () => {
    setInitialActiveSection(0);
  };

  const sections = [
    { content: <MainHome /> },
    { content: <Overflow1 /> },
    { content: <Overflow2 /> },
    { content: <Overflow3 /> },
    { content: <Survey /> },
    { content: <Needs /> },
    { content: <PainPoint /> },
    { content: <InsightIntro /> },
    { content: <Insight /> },
    { content: <InsightResult /> },
    { content: <Solution />, isScrollable: true },
    { content: <Outro scrollToTop={scrollToTop} /> },
  ];

  const options = {
    scrollCallback: onScroll,
    sectionClassName: "section",
    anchors: [
      "mainhome",
      "overflow1",
      "overflow2",
      "overflow3",
      "survey",
      "needs",
      "painPoint",
      "insight_intro",
      "insight",
      "insight_result",
      "solution",
      "outro",
    ],
    scrollBar: false,
    navigation: true,
    arrowNavigation: true,
    verticalAlign: false,
    scrollingSpeed: 700,
  };

  return (
    <StyledNavigation activeColor={colors.mainOrange}>
      <SectionsContainer {...options} activeSection={initialActiveSection}>
        {sections.map((section, index) => (
          <Section key={index} className={`section${index + 1}`}>
            <SectionWrapper
              index={index}
              isScrollable={section.isScrollable || false}
            >
              {section.content}
            </SectionWrapper>
          </Section>
        ))}
      </SectionsContainer>
    </StyledNavigation>
  );
};

export default BrandStory;
