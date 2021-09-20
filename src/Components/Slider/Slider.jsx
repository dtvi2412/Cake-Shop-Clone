import React from 'react';
import './Slider.scss';
function Slider() {
  let linkBg =
    'https://preview.colorlib.com/theme/cakeshop/assets/img/hero/xh1_hero1.jpg.pagespeed.ic.k6lTpnWOqy.jpg';
  return (
    <section className="slider">
      <img className="silder__bgImage" src={linkBg} alt="bg-slider" />
      <div className="slider__text">
        <h1>Healthy Made</h1>
        <h1>Delicious Cake</h1>
      </div>
      <a className="slider__order" href="#ORDER">
        ORDER NOW
      </a>
    </section>
  );
}

export default Slider;
