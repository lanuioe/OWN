import styled from "styled-components";
import vwCalc from "../../../util/vwCalc";
import Keyword1 from "./Keyword1";
import Keyword2 from "./Keyword2";
import Keyword3 from "./Keyword3";

const Section = styled.section`
  position: relative;
  padding-top: ${vwCalc(214)};
  padding-bottom: ${vwCalc(450)};
`;

const Keyword = () => {
  return (
    <Section>
      <Keyword1 />
      <Keyword2 />
      <Keyword3 />
    </Section>
  );
};

export default Keyword;
