import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';

const Messages = () => {
  return (
    <div className='grid md:grid-cols-3 gap-y-8  gap-x-4'>
      <div className='md:col-span-2 grid   xs:grid-cols-3 items-center'>
        <div className='col-span-1 xs:mb-0 mb-6 w-full h-28 relative mr-4'>
          <Image
            src='/images/adMock/messageAvatar.webp'
            layout='fill'
            alt='avatar'
            objectFit='contain'
          />
        </div>
        <div className='xs:col-span-2 text-center md:text-start'>
          <h2 className='text-[#444343] font-bold text-lg mb-2'>Anonymous</h2>
          <p className='text-[#444343] font-bold text-sm'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget
            facilisis mattis elementum purus ultricies et, tristique. Vel
            suspendisse integer nulla arcu.
          </p>
        </div>
      </div>
      <div>
        <div className='bg-white col-span-1 p-6 py-4'>
          <div className='border-b-[1px] border-[#D1D1D1] flex mdLg:flex-row flex-col items-center mdLg:items-start justify-between pb-4'>
            <div className='flex relative'>
              <div className='w-32 h-[112px] relative'>
                <Image
                  src='/images/adMock/ad.webp'
                  layout='fill'
                  alt='Car ad'
                />
              </div>
              <AiFillHeart className='text-red-500 absolute top-3  inline-block text-lg' />
            </div>
            <div className='flex flex-col justify-between mdLg:text-end text-center'>
              <h2 className='text-[#0C45B2] text-lg font-bold'>Honda Civic</h2>
              <div className=' text-[#0C45B2] text-xs'>
                Last Updated:11 April 22
              </div>
            </div>
          </div>
          <div className='pt-5'>
            <div className='flex justify-between items-center'>
              <div className='text-sm'>Reviews</div>
              <div className='text-[#444343] font-bold text-xs '>
                0 Total Views
              </div>
            </div>
            <div className='text-[#0C45B2] text-xs'>Karachi, Pakistan</div>
          </div>
        </div>
      </div>
      {/* <div className='flex max-w-xl  mdLg:flex-row flex-col items-center md:col-span-2'>
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
      <div className='bg-white col-span-1 p-6 py-4'>
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
      
      */}
    </div>
  );
};

export default Messages;
