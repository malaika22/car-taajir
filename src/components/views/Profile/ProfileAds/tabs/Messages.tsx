import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';

const Messages = () => {
  return (
    <div className='flex justify-between space-x-10 items-center'>
      <div className='flex max-w-xl items-start'>
        <div className='w-80 h-28 relative mr-4'>
          <Image
            src='/images/adMock/messageAvatar.png'
            layout='fill'
            alt='avatar'
            objectFit='contain'
          />
        </div>
        <div>
          <h2 className='text-[#444343] font-bold text-lg mb-2'>Anonymous</h2>
          <p className='text-[#444343] font-bold text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            facilisis mattis elementum purus ultricies et, tristique. Vel
            suspendisse integer nulla arcu.
          </p>
        </div>
      </div>
      <div className='bg-white w-96 p-6 py-4'>
        <div className='border-b-[1px] border-[#D1D1D1] flex justify-between pb-4'>
          <div className='flex relative'>
            <div className='w-32 h-[112px] relative'>
              <Image src='/images/adMock/ad.png' layout='fill' alt='Car ad' />
            </div>
            <AiFillHeart className='text-red-500 absolute top-3  inline-block text-lg' />
          </div>
          <div className='flex flex-col justify-between text-end'>
            <h2 className='text-[#0C45B2] text-lg font-bold'>Honda Civic</h2>
            <div className='text-sm text-[#0C45B2]'>
              Last Updated:11 April 22
            </div>
          </div>
        </div>
        <div className='flex justify-between pt-3'>
          <div>
            <div>Reviews</div>
            <div className='text-[#0C45B2] text-sm'>Karachi, Pakistan</div>
          </div>
          <div className='text-[#444343] font-bold'>0 Total Views</div>
        </div>
      </div>
    </div>
  );
};

export default Messages;
