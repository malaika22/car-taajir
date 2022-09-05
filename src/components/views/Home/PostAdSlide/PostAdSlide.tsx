import Image from 'next/image';

import { Anchor } from '@/modules';

const PostAdSlide = () => {
  return (
    <div className='w-full min-h-[750px] sm:min-h-[600px] mx-auto sm:grid flex flex-col   sm:grid-cols-3 items-center justify-center'>
      <div className='text-white  col-span-1 order-last sm:order-first  sm:h-auto'>
        <h2 className='font-bold leading-snug carousel-text text-[50px] sm:text-start text-center  sm:text-[60px]'>
          Want to Sell your car?
        </h2>
        <p className='text-sm my-8 px-4 sm:px-0 text-center sm:text-start'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tempor
          amet tincidunt nunc quam. Quam massa consectetur enim, justo sapien.
          Lectus eu diam orci augue arcu ante in enim penatibus. Egestas egestas
          arcu fames sit justo, sed aliquet auctor.
        </p>
        <div className='text-center sm:text-start'>
          <Anchor
            href='/find-new-cars'
            className='inline-block hover:bg-[#A71E00] transition-all duration-1000 ease-in-out bg-[#F62C00] rounded-xl px-9 py-4'
          >
            Post an Ad
          </Anchor>
        </div>
      </div>
      <div className='w-full h-[300px] sm:h-[500px] relative mx-auto col-span-1 sm:col-span-2'>
        <div className='z-[99] right-[0px] sm:right-[14px] absolute top-[105px] h-[200px] sm:h-[400px] w-[300px] sm:w-[400px]'>
          <Image
            src='/images/landingPage/homeCarousel/postAd.png'
            layout='fill'
            priority={true}
            objectFit='contain'
            alt='Post ad'
          />
        </div>

        <div className='w-full carousel-text text-white  font-bold absolute top-0 text-center'>
          <div className='text-[100px] sm:text-[200px] leading-[1.1]'>
            SOLD OUT
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostAdSlide;
