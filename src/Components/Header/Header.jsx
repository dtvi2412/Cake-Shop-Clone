import React, { useEffect, useLayoutEffect, useState } from 'react';
import './Header.scss';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import ReorderIcon from '@material-ui/icons/Reorder';
function Header() {
  let logoImage =
    'data:image/webp;base64,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';
  //Handle Open List Menu
  const [list, setList] = useState(false);
  // const [size, setSize] = useState([0, 0]);
  // useLayoutEffect(() => {
  //   function updateSize() {
  //     setSize([window.innerWidth, window.innerHeight]);
  //   }
  //   window.addEventListener('resize', updateSize);
  //   updateSize();
  //   console.log(size);
  //   return () => window.removeEventListener('resize', updateSize);
  // }, [list]);
  // useEffect(() => {
  //   let domNav = document.querySelector('.openNav');
  //   if (size[0] > 980) {
  //     domNav.setAttribute(
  //       'style',
  //       'display:inline-block;   align-items: center;'
  //     );
  //   }
  // }, [list]);
  const handleOpenList = () => {
    let domNav = document.querySelector('.openNav');
    if (window.screen.width < 980) {
      if (list === false) {
        domNav.setAttribute('style', 'display:flex');

        setList(true);
      }
      if (list === true) {
        domNav.setAttribute('style', 'display:none');
        setList(false);
      }
    }
    //DONE
  };
  return (
    <header className="header">
      <div className="header__top">
        <div className="header__top__social">
          <div className="header__top__social__icon">
            <FacebookIcon />
          </div>
          <div className="header__top__social__icon">
            <InstagramIcon />
          </div>
          <div className="header__top__social__icon">
            <TwitterIcon />
          </div>
        </div>
        <div className="header__top__logo">
          <img src={logoImage} alt="logo-cakeShop" />
        </div>
        <div className="header__top__info">
          <a href="#Phone">Call Us: +10 783 346 4378</a>
        </div>
      </div>
      <div className="header__bottom">
        <nav className="header__bottom__nav">
          <div className="header__bottom__nav__menu">
            <div
              className="header__bottom__nav__menu__button"
              onClick={() => handleOpenList()}
            >
              <p>MENU</p> <ReorderIcon />
            </div>
          </div>
          {/* Open nav responesive */}
          <div className="openNav">
            <ul className="header__bottom__nav__list">
              <li className="header__bottom__nav__list__item">
                <a
                  className="header__bottom__nav__list__item__link"
                  href="#HOME"
                >
                  Home
                </a>
              </li>
              <li className="header__bottom__nav__list__item">
                <a
                  className="header__bottom__nav__list__item__link"
                  href="#CAKES"
                >
                  Cakes
                </a>
              </li>
              <li className="header__bottom__nav__list__item">
                <a
                  className="header__bottom__nav__list__item__link"
                  href="ABOUT"
                >
                  About
                </a>
              </li>
              <li className="header__bottom__nav__list__item">
                <a
                  className="header__bottom__nav__list__item__link"
                  href="#BLOG"
                >
                  Blog
                </a>
              </li>
              <li className="header__bottom__nav__list__item">
                <a
                  className="header__bottom__nav__list__item__link"
                  href="#CONTACT"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    </header>
  );
}

export default Header;
