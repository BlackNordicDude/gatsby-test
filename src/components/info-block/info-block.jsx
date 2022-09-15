import * as React from 'react';
import * as style from '../info-block/info-block.module.css';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import InfoCard from '../info-card/info-card';
import { useStaticQuery, graphql } from "gatsby"


const InfoBlock = () => {
  const data = useStaticQuery(graphql`
  query {
    allContentfulCaruselSlides {
      edges {
        node {
          text1
          text2
          image1 {
            gatsbyImageData
          }
          image2 {
            gatsbyImageData
          }
        }
      }
    }
  }
`)

  const slides = data.allContentfulCaruselSlides.edges[0].node

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
        <InfoCard img={slides.image1}>
          <p>{slides.text1}
          </p>
        </InfoCard>
        <InfoCard img={slides.image2}>
          <p>{slides.text2}
          </p>
        </InfoCard>
      </Carousel>
    </div>
  )
};

export default InfoBlock