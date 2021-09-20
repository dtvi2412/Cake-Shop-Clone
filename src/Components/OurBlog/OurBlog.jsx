import React from 'react';
import './OurBlog.scss';
function OurBlog() {
  return (
    <section className="blog">
      <div className="blog__title">
        <h1>Our Blogs</h1>
        <button>More Blog</button>
      </div>
      <div className="blog__card">
        <div className="blog__card__item">
          <img
            src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xblog1.jpg.pagespeed.ic.I8InqMtKRD.webp"
            alt="blog1"
          />
          <div className="blog__card__item__text">
            <h1>Tomato, black olive, feta & anchovy tart ulla mco laboris</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip.
            </p>
            <a href="#LEARNMORE">learn more</a>
          </div>
        </div>
        <div className="blog__card__item">
          <img
            src="https://preview.colorlib.com/theme/cakeshop/assets/img/gallery/xblog2.jpg.pagespeed.ic.kwTFqKjCrz.webp"
            alt="blog1"
          />
          <div className="blog__card__item__text">
            <h1>Tomato, black olive, feta & anchovy tart ulla mco laboris</h1>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
              minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
              aliquip.
            </p>
            <a href="#LEARNMORE">learn more</a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default OurBlog;
