import styled from "styled-components";
import Typo from "./brandStory/solution/Typo";
import CoreValue from "./brandStory/solution/CoreValue";
import Keyword from "./brandStory/solution/Keyword";

const Section = styled.section`
  text-transform: uppercase;
`;

const Solution = () => {
  return (
    <Section>
      <Typo />
      <CoreValue />
      <Keyword />
    </Section>
  );
};

export default Solution;
