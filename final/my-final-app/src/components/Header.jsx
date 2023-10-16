import '../css/header.css'
import { useState } from 'react';

function Header({ setPage }) {

  const [hideInMobileSize, setHideInMobileSize] = useState(true);

  function go(event, page) {
    event.preventDefault();
    setPage(page);
  }

  function nothingHappen(event) {
    event.preventDefault();
  }

  function toggleMenu() {
    setHideInMobileSize(!hideInMobileSize)
  }

  return (
    <header>
      <h1>Boston</h1>
      <nav>
        <button className='hamburger' onClick={toggleMenu} aria-label="hamburger menu button">
          <div></div>
          <div></div>
          <div></div>
        </button>
        <ul className={hideInMobileSize ? 'globalnav__menu hideInMobileSize' : 'globalnav__menu'}>
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'home')}>Home</a></li>
          
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'knowledge')}>Universitys</a></li>
          <li className='globalnav__menu__item'>
            <a href="" onClick={e => nothingHappen(e)}>Tour &nbsp; </a>
            <ul>
              <li><a href="" onClick={e => go(e, 'Boston')}>Boston</a></li>
              <li><a href="" onClick={e => go(e, 'MA')}>MA</a></li>
            </ul>
          </li>
          <li className='globalnav__menu__item'><a href="" onClick={e => go(e, 'join')}>Reach to Us</a></li>
        </ul>
      </nav>
    </header >
  )
}

export default Header;