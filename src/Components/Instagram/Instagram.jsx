import React from 'react';
import './Instagram.scss';
import InstagramIcon from '@material-ui/icons/Instagram';
import ListImageInstagram from '../ListImageInstagram/ListImageInstagram';
function Instagram() {
  const listImage = [
    {
      id: 0,
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra2.jpg.pagespeed.ic.PYyDEdzkD9.webp',
    },
    {
      id: 1,
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra1.jpg.pagespeed.ic.Oprq8U7fLo.webp',
    },
    {
      id: 2,
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra3.jpg.pagespeed.ic.OAmXJmHyZ9.webp',
    },
    {
      id: 3,
      linkImage:
        'https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xinstra4.jpg.pagespeed.ic.0TvhEUconE.webp',
    },
  ];
  return (
    <section className="instagram">
      <h1>Follow us on Instagram</h1>
      <div className="instagram__link">
        <a href="#Cakeshop">
          <InstagramIcon />
          Cakeshop
        </a>
      </div>
      <div className="instagram__listImage">
        {listImage.map((item, index) => {
          return (
            <ListImageInstagram
              key={item.id}
              id={item.id}
              link={item.linkImage}
            />
          );
        })}
      </div>
    </section>
  );
}

export default Instagram;
