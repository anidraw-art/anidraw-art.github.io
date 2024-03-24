/* eslint-disable camelcase */
import {Swiper, SwiperSlide} from 'swiper/react';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

import {useState} from 'react';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';
import slide_image_1 from './assets/images/img_1.jpg';
import slide_image_2 from './assets/images/img_2.jpg';
import slide_image_3 from './assets/images/img_3.jpg';
import slide_image_4 from './assets/images/img_4.jpg';
import slide_image_5 from './assets/images/img_5.jpg';
import slide_image_6 from './assets/images/img_6.jpg';
import slide_image_7 from './assets/images/img_7.jpg';

import './index.scss';
import styles from './styles.module.scss';
function App() {
  const [activeSlide, setActiveSlide] = useState(0);
  return (
    <div className={styles.homeContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          // rotate: -10,
          rotate: -5,
          stretch: 0,
          depth: 150,
          // modifier: 2.5,
          modifier: 0.5,
          // modifier: 0.001,
        }}
        onSlideChange={(swiper) => {
          console.log('activeSlide', swiper.activeIndex);
          setActiveSlide(swiper.activeIndex);
        }}
        pagination={{el: '.swiper-pagination', clickable: true}}
        navigation={{
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {[
          slide_image_1,
          slide_image_2,
          slide_image_3,
          slide_image_4,
          slide_image_5,
          slide_image_6,
          slide_image_7,
        ].map((image, index) => (
          <SwiperSlide key={index}>
            <div
              className={
                `${styles.card}
                 ${index === activeSlide ? styles.activeSlide : ''}`
              }
              style={{backgroundImage: `url(${image})`}}
            >
              {/* Content */}
            </div>
          </SwiperSlide>
        ))}

        <div className="slider-controller">

          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
            <div className={styles.arrow}>
              ◀
            </div>
          </div>

          <div className="swiper-pagination"></div>

          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
            <div className={styles.arrow}>
              ▶
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
