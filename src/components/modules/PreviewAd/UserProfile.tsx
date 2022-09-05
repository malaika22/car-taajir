import Image from 'next/image';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { MdMessage } from 'react-icons/md';

const carData = {
  title: '2015 toyota Corolla LE',
  location: 'Karachi',
  images: [],
  price: '2,875,000',
  sellerInfo: {
    name: 'Ahmed',
    joiningDate: 'Oct 17, 2016',
    contactNumber: '0300 4883238',
  },
};

const UserProfile = ({ className }: { className?: string }) => {
  return (
    <div
      className={`w-full h-fit  border-[#D8D5D5] text-center border-[1px] rounded-2xl border-solid py-5 px-2 sm:p-5 ${className}`}
    >
      <div className='text-[#3C9E00] pb-3 text-2xl font-bold border-b-2'>
        PKR {carData.price}
      </div>
      <div className='px-4 pt-2'>
        <span className='text-[#B5B5B5] underline text-lg'>
          Seller Information
        </span>
        <div className='flex my-6 items-start'>
          <div className='relative w-20 h-20'>
            <Image
              src='/images/previewMock/avatar.png'
              layout='fill'
              alt='car'
              objectFit='contain'
            />
          </div>
          <div className='text-start ml-3'>
            <div className='text-[#444343] font-bold'>
              {carData.sellerInfo.name}
            </div>
            <div className='text-[#5E5E5E] text-[12px]'>
              Member Since {carData.sellerInfo.joiningDate}
            </div>
            <div className='text-[#0C45B2] mt-3 font-bold cursor-pointer text-[12px]'>
              More Ads by {carData.sellerInfo.name}
            </div>
          </div>
        </div>
        <div>
          <button className=' h-14 w-full text-lg rounded-lg  mb-5  bg-[#3C9E00] hover:bg-[#2C7400]  transition-all duration-300  text-white flex items-center justify-center shadow-[2px_4px_10px_0rem_rgb(0,0,0,0.25)]'>
            <BsFillTelephoneFill className='text-white ' />
            <span className='ml-3'>0300 4883238</span>
          </button>
          <button className='border-[#3C9E00] hover:bg-[#3C9E00]  transition-all duration-300 flex mb-5  text-lg items-center justify-center border-[1px] h-14 rounded-lg w-full shadow-[2px_4px_10px_0rem_rgb(0,0,0,0.25)]'>
            <MdMessage className='text-[#2C7400] ' />
            <span className='text-[#2C7400] ml-3 '>Send Message</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default UserProfile;

// bg-gradient-to-r from-[#3C9E00] to-[#2C7400]
