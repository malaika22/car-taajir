import { BiMessageDetail } from 'react-icons/bi';
import { BsCheck2Circle, BsFlag } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';

import {
  Comment,
  Features,
  ImagesCarousel,
  Specifications,
  UserProfile,
  VehicleInformation,
} from '@/modules';

const CarPage = () => {
  return (
    <div className=' bg-[#E5E5E5] '>
      <div className='max-w-6xl mx-auto py-10 pb-32'>
        <h2 className='text-2xl font-bold'>2015 Toyota Corolla LE</h2>
        <div className='flex items-center text-sm mt-1 mb-6'>
          <IoLocationSharp className='text-[#5E5E5E] mr-1' />{' '}
          <span className='text-[#B5B5B5]'>Karachi, Pakistan</span>
        </div>
        <div className='flex justify-between gap-x-4 '>
          <div className='w-[70%] min-h-[500px]'>
            <ImagesCarousel />
          </div>

          <div className='w-[30%] space-y-4'>
            <UserProfile className='bg-white' />
            <div className='bg-white  border-[#D8D5D5] text-center border-[1px] rounded-2xl border-solid '>
              <div className='text-[#B5B5B5] flex items-center justify-center  my-5 text-lg cursor-pointer'>
                <BsCheck2Circle className='text-[#8B8B8B] mr-3' />
                Notify As Sold
              </div>
              <div className='text-[#B5B5B5] flex items-center justify-center text-lg my-5 cursor-pointer'>
                <BsFlag className='text-red-600 mr-3' />
                Report This Ad
              </div>
            </div>
          </div>
        </div>
        <Specifications className='bg-white' />
        <VehicleInformation className='bg-white' />

        <div className='grid grid-cols-2 gap-x-5'>
          <Features className='bg-white' />
          <div className='relative'>
            <Comment className='bg-white' />
            <p className='bubble speech bg-[#EF6212]  cursor-pointer text-white justify-center text-sm font-bold flex items-center absolute bottom-[-80px] right-[50px]'>
              <BiMessageDetail className='mr-3 text-lg' />
              Start A Conversation
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarPage;
