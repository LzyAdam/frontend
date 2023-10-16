import Title2 from "../main-page-components/Title2";
import Texts from "../main-page-components/Texts";
import Cards from "../main-page-components/Cards";
import '../../css/event.css';
import Panels from '../main-page-components/Panels'

function EventPage({ eventPageData, useCards, usePanels }) {
  return (
    <div className="event">
      <Title2 title2={eventPageData['title']}></Title2>
      <Texts texts={eventPageData['text']}></Texts>
      {useCards && <Cards cardsData={eventPageData['cards']}></Cards>}
      {usePanels && <Panels panelsData={eventPageData['panels']}></Panels>}
    </div>
  )
}

export default EventPage;