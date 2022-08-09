import Image from 'next/image';

import { Anchor } from '@/modules';

const UsedCarsSlide = () => {
  return (
    <div className='w-full h-full mx-auto grid grid-cols-1 sm:grid-cols-2 items-center'>
      <div className='w-full h-[200px] sm:h-[300px] relative mx-auto '>
        <Image
          src='/images/landingPage/homeCarousel/usedCars.png'
          layout='fill'
          objectFit='contain'
          alt='Used cars'
        />
      </div>
      <div className='text-white px-2 sm:px-8'>
        <h2 className='font-bold text-[50px]  sm:text-[60px] text-center sm:text-start sm:mr-[50px] leading-snug carousel-text'>
          Upgrade your car with Used Cars
        </h2>
        <p className='text-sm my-8 sm:w-[370px] px-4 sm:px-0 text-center sm:text-start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tempor
          amet tincidunt nunc quam. Quam massa consectetur enim, justo sapien.
          Lectus eu diam orci augue arcu ante in enim penatibus. Egestas egestas
          arcu fames sit justo, sed aliquet auctor.
        </p>
        <div className='text-center sm:text-start'>
          <Anchor
            href='/find-new-cars'
            className='inline-block bg-gradient-to-r from-[#F62C00] to-[#A71E00] rounded-xl px-9 py-4'
          >
            Browse Used Cars
          </Anchor>
        </div>
      </div>
    </div>
  );
};

export default UsedCarsSlide;
