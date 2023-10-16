import Title2 from "../main-page-components/Title2";
import Carousel from "../main-page-components/Carousel";
import Texts from "../main-page-components/Texts";
import Cards from "../main-page-components/Cards";

function Home({ data }) {

  return (
    <div className="home">
      <Title2 title2={'Welcome to Boston!'}></Title2>
      <Carousel carouselData={data['HomeCarouselImages']}></Carousel>
      <Texts texts={data['HomeTexts']}></Texts>

    </div>
  )
}

export default Home;