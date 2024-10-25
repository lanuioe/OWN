import styled from "styled-components";
import Insight1 from "./insight/Insight1";
import Insight2 from "./insight/Insight2";
import Insight3 from "./insight/Insight3";

const Ol = styled.ol`
  display: flex;
  color: white;
  justify-content: space-between;
`;
const Insight = () => {
  return (
    <>
      <Ol>
        <Insight1 />
        <Insight2 />
        <Insight3 />
      </Ol>
    </>
  );
};

export default Insight;
