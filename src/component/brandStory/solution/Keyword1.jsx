import KeywordCommon from "./KeywordCommon";
import rest1 from "../../../assets/brandStory/solution_rest1.png";
import rest2 from "../../../assets/brandStory/solution_rest2.png";
import rest3 from "../../../assets/brandStory/solution_rest3.png";

const images = [
  {
    src: rest1,
    alt: "",
    width: 245,
    height: 336,
    top: 93,
    left: 606,
  },
  {
    src: rest2,
    alt: "",
    width: 359,
    height: 262,
    top: 297,
    left: 1386,
  },
  {
    src: rest3,
    alt: "",
    width: 435,
    height: 392,
    top: 571,
    left: 250,
  },
];

const Keyword1 = () => {
  return (
    <>
      <KeywordCommon keyword="rest" images={images} />
    </>
  );
};

export default Keyword1;
