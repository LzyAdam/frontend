import '../../css/main-page-components/accordions.css'
import Accordion from './Accordion';

function Accordions({ accordionsData }) {

  return (
    <div className="accordions">
      {accordionsData.map(({ title, content }) => (
        <Accordion title={title} content={content} key={title} />
      ))}
    </div>
  );


}

export default Accordions;