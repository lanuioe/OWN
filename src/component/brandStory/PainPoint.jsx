import HorizontalScroll from "../HorizontalScroll";
import Ask from "./painPoint/Ask";
import Target1 from "./painPoint/Target1";
import Target2 from "./painPoint/Target2";
import Target3 from "./painPoint/Target3";

const PainPoint = () => {
  return (
    <HorizontalScroll>
      <Ask />
      <Target1 />
      <Target2 />
      <Target3 />
    </HorizontalScroll>
  );
};

export default PainPoint;
