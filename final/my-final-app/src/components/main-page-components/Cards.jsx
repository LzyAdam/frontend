import '../../css/main-page-components/cards.css'

function Cards({ cardsData }) {

  return (
    <div className="cards">
      {cardsData.map(({ imgSrc, text }) => {
        return (<div className='card' key={imgSrc}>
          <div className='card__img__container'>
            <img className='card__pic' src={imgSrc} alt="beautiful Boston"></img>
          </div>
          <div className='card__text'>{text}</div>
        </div>);
      })}


    </div>

  );


}

export default Cards;
