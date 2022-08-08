/* eslint-disable @typescript-eslint/ban-ts-comment */
import Image from 'next/image';
import { useRef, useState } from 'react';
import { AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';
import { Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
const ImagesCarousel = () => {
  const [selectImage, setSelectedImage] = useState<string>();
  const prevRef = useRef(null);
  const nextRef = useRef(null);

  return (
    <div className='w-full h-full  relative'>
      <div className='h-full'>
        <Image
          src='/images/previewMock/imageOne.png'
          layout='fill'
          objectFit='cover'
          alt='car'
          className='rounded-3xl'
        />
      </div>
      <div className='flex items-center  absolute w-[90%] m-auto bottom-[25px] h-[100px] left-0 right-0'>
        <div
          className='nav-previous w-7 mr-2  relative cursor-pointer'
          ref={prevRef}
        >
          <AiOutlineLeft className='text-2xl text-white' />
        </div>
        <Swiper
          spaceBetween={10}
          slidesPerView={4}
          modules={[Navigation]}
          className='h-[100px] w-full'
          loop={true}
          lazy={true}
          onInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
            swiper.update();
          }}
        >
          <SwiperSlide>
            <div className='w-full relative h-full'>
              <Image
                layout='fill'
                src='/images/previewMock/imageTwo.png'
                alt='car'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full relative h-full'>
              <Image
                layout='fill'
                src='/images/previewMock/imageThree.png'
                alt='car'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full relative h-full'>
              <Image
                layout='fill'
                src='/images/previewMock/imageFour.png'
                alt='car'
              />
            </div>
          </SwiperSlide>
          <SwiperSlide>
            <div className='w-full relative h-full'>
              <Image
                layout='fill'
                src='/images/previewMock/imageFive.png'
                alt='car'
              />
            </div>
          </SwiperSlide>
        </Swiper>
        <div
          className='w-7 ml-2 nav-previous  h-4 relative cursor-pointer mr-2'
          ref={nextRef}
        >
          <AiOutlineRight className='text-2xl text-white' />
        </div>
      </div>
    </div>
  );
};

export default ImagesCarousel;
