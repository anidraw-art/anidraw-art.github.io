import {Swiper, SwiperSlide} from 'swiper/react';
import {EffectCoverflow, Pagination, Navigation} from 'swiper/modules';

import {MinimalCard} from '../../global';
import members from './assets/members';

import 'swiper/css';
import 'swiper/css/effect-coverflow';
import './swiper.scss';
import styles from './styles.module.scss';

function App() {
  return (
    <div className={styles.homeContainer}>
      <Swiper
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={'auto'}
        coverflowEffect={{
          rotate: -5,
          stretch: 0,
          depth: 150,
          // modifier: 2.5,
          modifier: 0.5,
          // modifier: 0.001,
        }}
        pagination={{el: '.swiperPagination', clickable: true}}
        navigation={{
          nextEl: '.swiperButtonNext',
          prevEl: '.swiperButtonPrev',
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation]}
        className={styles.swiperContainer}
      >
        {members.map((member, index) => (
          <SwiperSlide key={index}>
            <MinimalCard member={member} />
          </SwiperSlide>
        ))}

        <div className="sliderContoller">

          <div className="swiperButtonPrev sliderButton">
            <div className={styles.arrowContainer}>
              <div className={styles.arrow}>◀</div>
            </div>
          </div>

          <div className="swiperPagination"></div>

          <div className="swiperButtonNext sliderButton">
            <div className={styles.arrowContainer}>
              <div className={styles.arrow}>▶</div>
            </div>
          </div>
        </div>
      </Swiper>
    </div>
  );
}

export default App;
