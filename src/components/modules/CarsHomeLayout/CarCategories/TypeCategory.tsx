/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from 'next/image';
import { useRef } from 'react';
import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { ICarCategory } from 'types/general.types';
import { shopByType } from 'utils/constant';
import 'swiper/css';
import 'swiper/css/navigation';

interface ICarType {
  category: ICarCategory;
}

const TypeCategory = () => {
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='mb-14 px-5'>
      <h2 className='text-[#444343] text-lg font-bold mb-5 sm:text-start text-center'>
        Shop by Type
      </h2>
      <div className='flex items-center space-x-4'>
        <div
          className='nav-previous w-6 h-4 relative cursor-pointer'
          ref={prevRef}
        >
          <AiFillCaretLeft className='text-xl' />
        </div>
        <Swiper
          spaceBetween={20}
          slidesPerView={1}
          modules={[Navigation]}
          className='type-swiper'
          breakpoints={{
            425: { slidesPerView: 2 },
            600: { slidesPerView: 4 },
            768: { slidesPerView: 5 },
          }}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {shopByType.map((category) => (
            <SwiperSlide key={category.title}>
              <TypeCard category={category} />
            </SwiperSlide>
          ))}
        </Swiper>
        {/* <div className='navigation-buttons'> */}
        <div
          className='nav-previous w-6 h-4 relative cursor-pointer'
          ref={nextRef}
        >
          <AiFillCaretRight className='text-xl' />
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default TypeCategory;

const TypeCard = ({ category }: ICarType) => {
  return (
    <div className='flex flex-col items-center border-2 border-[#B5B5B5] rounded-2xl bg-white min-h-[100px] justify-center py-5 '>
      <div className='w-20 h-14 relative'>
        <Image src={category.src} layout='fill' />
      </div>

      <h6 className='text-[#444343] mt-3 font-semibold'>{category.title}</h6>
    </div>
  );
};
