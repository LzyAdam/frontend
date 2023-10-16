import '../css/main.css'

import Home from './main-pages/Home';
import MainData from './data/MainData';
import Knowledge from './main-pages/Knowledge';
import EventPage from './main-pages/EventPage';
import Join from './main-pages/Join';

function Main({ page }) {
  console.log(MainData['Events']['Yoshino']);
  return (
    <main>
      {page === 'home' && <Home data={MainData['Home']}></Home>}
      {page === 'knowledge' && <Knowledge knowledgeData={MainData['Knowledge']}></Knowledge>}
      {page === 'Boston' && <EventPage eventPageData={MainData['Events']['Boston']} useCards={true} usePanels={false}></EventPage>}
      {page === 'MA' && <EventPage eventPageData={MainData['Events']['MA']} useCards={false} usePanels={true}></EventPage>}
      {page === 'join' && <Join></Join>}
      
    </main>
  )
}

export default Main;