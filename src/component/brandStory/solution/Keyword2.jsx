import KeywordCommon from "./KeywordCommon";
import kit1 from "../../../assets/brandStory/solution_kit1.png";
import kit2 from "../../../assets/brandStory/solution_kit2.png";
import kit3 from "../../../assets/brandStory/solution_kit3.png";

const images = [
  {
    src: kit1,
    alt: "",
    width: 245,
    height: 337,
    top: 34,
    left: 526,
  },
  {
    src: kit2,
    alt: "",
    width: 344,
    height: 472,
    top: 298,
    left: 80,
  },
  {
    src: kit3,
    alt: "",
    width: 517,
    height: 402,
    top: 470,
    left: 1258,
  },
];

const Keyword2 = () => {
  return (
    <>
      <KeywordCommon keyword="analogue kit" images={images} />
    </>
  );
};

export default Keyword2;
