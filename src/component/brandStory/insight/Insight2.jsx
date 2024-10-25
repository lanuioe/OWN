import InsightCommon from "./InsightCommon";

const EnParagraph = `proper 
resting state`;

const KoParagraph = `적절한 휴식 단계`;

const Insight2 = () => {
  return (
    <>
      <InsightCommon
        num={2}
        enParagraph={EnParagraph}
        koParagraph={KoParagraph}
      />
    </>
  );
};

export default Insight2;
