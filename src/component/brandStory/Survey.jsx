import HorizontalScroll from "../HorizontalScroll";
import Background from "./survey/Background";
import Result from "./survey/Result";
import Survey1 from "./survey/Survey1";
import Survey2 from "./survey/Survey2";
import Survey3 from "./survey/Survey3";

const Survey = () => {
  return (
    <HorizontalScroll>
      <Background />
      <Survey1 />
      <Survey2 />
      <Survey3 />
      <Result />
    </HorizontalScroll>
  );
};

export default Survey;
