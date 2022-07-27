import { Anchor } from '@/components/modules';
import Image from 'next/image';

const PostAdSlide = () => {
  return (
    <div className='w-full h-full mx-auto flex items-center'>
      <div className='text-white  flex-2'>
        <h2 className='font-bold text-[60px] w-[400px] leading-snug carousel-text'>
          Want to Sell your car?
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
          Post an Ad
        </Anchor>
      </div>
      <div className=' w-[300px] h-[500px] relative mx-auto flex-1'>
        <div className='z-[99] right-[14px] absolute top-[105px] h-[400px] w-[400px]'>
          <Image
            src={'/images/landingPage/homeCarousel/postAd.png'}
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='w-full carousel-text text-white  font-[700] absolute top-0 text-center'>
          <div className='text-[200px] leading-[1.1]'>SOLD OUT</div>
        </div>
      </div>
    </div>
  );
};

export default PostAdSlide;
