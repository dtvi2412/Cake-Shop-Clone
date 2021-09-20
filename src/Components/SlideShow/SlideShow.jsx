import React from 'react';
import './SlideShow.scss';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
function SlideShow() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    margin: 5,
  };
  let arrImage = [
    {
      id: 0,
      link: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra1.jpg.pagespeed.ic.Oprq8U7fLo.webp',
      name: 'Sweet Suprise',
      price: 98,
    },
    {
      id: 1,
      link: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra2.jpg.pagespeed.ic.PYyDEdzkD9.webp',
      name: 'Chocolate',
      price: 198,
    },
    {
      id: 2,
      link: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra3.jpg.pagespeed.ic.OAmXJmHyZ9.webp',
      name: 'Sweet Dream',
      price: 58,
    },
    {
      id: 3,
      link: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra4.jpg.pagespeed.ic.0TvhEUconE.webp',
      name: 'Sweet Suprise',
      price: 98,
    },
    {
      id: 4,
      link: 'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xitems1.jpg.pagespeed.ic.6dmE-qTqMS.webp',
      name: 'Delightful-Lemon',
      price: 88,
    },
  ];
  //Handle Render Image
  const renderImage = () => {
    return arrImage.map((item, index) => {
      return (
        <div className="slideShow__item" key={item.id}>
          <div className="slideShow__item__image">
            <img src={item.link} alt={`slide-${item.id}`} />
            <a className="addToCart" href="#ADDTOCART">
              Add to cart
            </a>
          </div>
          <div className="slideShow__item__label">
            <h1>{item.name}</h1>
            <span>
              {item.price.toLocaleString('en-US', {
                style: 'currency',
                currency: 'USD',
              })}
            </span>
          </div>
        </div>
      );
    });
  };
  return (
    <section className="slideShow">
      <Slider {...settings}>{renderImage()}</Slider>
    </section>
  );
}

export default SlideShow;
