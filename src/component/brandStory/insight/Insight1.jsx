import InsightCommon from "./InsightCommon";

const EnParagraph = `the goal of 
user preference`;

const KoParagraph = `사용자 취향에 맞는 목표 설정`;

const Insight1 = () => {
  return (
    <>
      <InsightCommon
        num={1}
        enParagraph={EnParagraph}
        koParagraph={KoParagraph}
      />
    </>
  );
};

export default Insight1;
