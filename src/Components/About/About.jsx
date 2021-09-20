import React from 'react';
import './About.scss';
import linkImage from '../../Assets/Images/xabout1.jpg.pagespeed.ic.Q8jbhT8BVC.webp';
function About() {
  return (
    <section className="about">
      <div className="about__title">
        <h1>This is Schilers. Awesome Food Theme.</h1>
        <h1>Purchase it and eat Burgers.</h1>
      </div>
      <div className="about__content">
        <div className="about__content__left">
          <h2>
            This is Schilers. Awesome Food Theme. Purchase it and eat Burgers.
          </h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor dunt ut labore et dolore magna aliqua. Ut enim ad
            minim veniam, quis nostrud exercita tion ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute dolor in reprehen derit
            in voluptate velit esse cillum.
          </p>
          <p>
            Consectetur adipiscing elit, sed do eiusmod tempor dunt ut labore et
            dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercita
            tion ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis
            aute dolor in reprehen derit in voluptate velit esse cillum.
          </p>
        </div>
        <div className="about__content__right">
          <img src={linkImage} alt="cake" />
        </div>
      </div>
    </section>
  );
}

export default About;
