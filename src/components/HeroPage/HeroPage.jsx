import React from 'react';
import heroStyles from '../HeroPage/HeroPage.module.scss';
import Navigation from '../Navigation/Navigation';

const HeroPage = () => {
  return (
    <div className={heroStyles.heroPage}>
        <div className={heroStyles.logo}>
          nique.
        </div>

        <div className={heroStyles.hero__box}>
          <div className={heroStyles.hero__firstTitle}>
            Discover the essence of
          </div>

          <div className={heroStyles.hero__secondTitle}>
            Thailand
          </div>

          <div className={heroStyles.hero__description}>
          Relish our exquisite selection of Thai delicacies <br />
          <span style={{ marginLeft: '1ch' }}></span>expertly prepared to delight your senses
          </div>
        </div>
      <Navigation />
    </div>
  );
};

export default HeroPage;
