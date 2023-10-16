import Title2 from "../main-page-components/Title2";
import Accordions from "../main-page-components/Accordions";
import MainData from "../data/MainData";

function Knowledge({ knowledgeData }) {
  return (
    <div className="knowledge">
      <Title2 title2={'Great Universitys Located in Boston'}></Title2>
      <Accordions accordionsData={knowledgeData['accordionsData']}></Accordions>
    </div>
  )

}

export default Knowledge;