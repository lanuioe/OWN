import styled from "styled-components";
import Typo from "./solution/Typo";
import CoreValue from "./solution/CoreValue";
import Keyword from "./solution/Keyword";

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
