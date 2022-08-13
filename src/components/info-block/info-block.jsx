import * as React from 'react';
import * as style from '../info-block/info-block.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import InfoCard from '../info-card/info-card';

const InfoBlock = () => {
    return (
      <div className={style.carusel}>
        <Carousel
          infiniteLoop={true}
          emulateTouch={true}
          autoPlay={false}
          interval={7000}
          showStatus={false}
          showThumbs={false}
          showArrows={false}
        >
          <InfoCard />
          <InfoCard />
        </Carousel>
      </div> 
  )
};

export default InfoBlock