// Import Swiper React components
import { Pagination } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
// eslint-disable-next-line
import 'swiper/css/bundle';

import NewCarsSlide from './NewCarsSlide/NewCarsSlide';
import PostAdSlide from './PostAdSlide/PostAdSlide';
import UsedCarsSlide from './UsedCarsSlide/UsedCarsSlide';

const HomeCarousel = () => {
  const pagination = {
    clickable: true,
    renderBullet: function (index: number, className: string) {
      return (
        '<div class="inline-block h-[20px] w-[10px] ' + className + '"></div>'
      );
    },
  };
  return (
    <div className='h-full max-w-7xl mx-auto '>
      <Swiper
        breakpoints={{ 640: { direction: 'vertical' } }}
        direction='horizontal'
        className='home-swiper'
        pagination={pagination}
        modules={[Pagination]}
      >
        <SwiperSlide>
          <NewCarsSlide />
        </SwiperSlide>
        <SwiperSlide>
          <UsedCarsSlide />
        </SwiperSlide>
        <SwiperSlide>
          <PostAdSlide />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HomeCarousel;
