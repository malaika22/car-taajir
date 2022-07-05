// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import NewCarsSlide from "./NewCarsSlide/NewCarsSlide";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// eslint-disable-next-line
import "swiper/css/bundle";
import PostAdSlide from "./PostAdSlide/PostAdSlide";
import UsedCarsSlide from "./UsedCarsSlide/UsedCarsSlide";

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
    <div className='h-[500px] px-32 '>
      <Swiper
        direction={"vertical"}
        className='home-swiper'
        pagination={pagination}
        modules={[Pagination]}
        onSlideChange={() => console.log("slide change")}
        onSwiper={(swiper) => console.log(swiper)}
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
