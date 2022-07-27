import { Anchor } from '@/components/modules';
import Image from 'next/image';

const UsedCarsSlide = () => {
  return (
    <div className='w-full h-full mx-auto flex items-center'>
      <div className='w-[300px] h-[300px] relative mx-auto flex-1'>
        <Image
          src={'/images/landingPage/homeCarousel/usedCars.png'}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='text-white  flex-1'>
        <h2 className='font-bold  text-[60px] mr-[50px] leading-snug carousel-text'>
          Upgrade your car with Used Cars
        </h2>
        <p className='text-sm my-8 w-[370px]'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tempor
          amet tincidunt nunc quam. Quam massa consectetur enim, justo sapien.
          Lectus eu diam orci augue arcu ante in enim penatibus. Egestas egestas
          arcu fames sit justo, sed aliquet auctor.
        </p>
        <Anchor
          href='/new-cars'
          className='inline-block bg-gradient-to-r from-[#F62C00] to-[#A71E00] rounded-xl px-9 py-4'
        >
          Browse Used Cars
        </Anchor>
      </div>
    </div>
  );
};

export default UsedCarsSlide;
