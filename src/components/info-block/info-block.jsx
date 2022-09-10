import * as React from 'react';
import * as style from '../info-block/info-block.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import { Carousel } from 'react-responsive-carousel';
import InfoCard from '../info-card/info-card';
import palletsImg from '../../images/carusel/pallety_derevyannye.jpg';
import deliveryImg from '../../images/carusel/delivery.jpg';

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
          <InfoCard img={palletsImg}>
            <p>Широкий выбор высококачественных паллетов. <br /> Новые и б/у.
            </p>
          </InfoCard>
          <InfoCard img={deliveryImg}>
          <p>Бесплатная доставка по СПб и области!
                </p>
          </InfoCard>
        </Carousel>
      </div> 
  )
};

export default InfoBlock