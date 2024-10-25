import KeywordCommon from "./KeywordCommon";
import experience1 from "../../../assets/brandStory/solution_experience1.png";
import experience2 from "../../../assets/brandStory/solution_experience2.png";
import experience3 from "../../../assets/brandStory/solution_experience3.png";

const images = [
  {
    src: experience1,
    alt: "",
    width: 245,
    height: 336,
    top: 16,
    left: 1172,
  },
  {
    src: experience2,
    alt: "",
    width: 344,
    height: 472,
    top: 350,
    left: 264,
  },
  {
    src: experience3,
    alt: "",
    width: 517,
    height: 401,
    top: 602,
    left: 1228,
  },
];

const Keyword2 = () => {
  return (
    <>
      <KeywordCommon keyword="experience" images={images} />
    </>
  );
};

export default Keyword2;
