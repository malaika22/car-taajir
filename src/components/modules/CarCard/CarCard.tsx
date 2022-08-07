import Image from 'next/image';
import { AiFillHeart } from 'react-icons/ai';
import { BsFillTelephoneFill } from 'react-icons/bs';

import Anchor from '../Anchor/Anchor';

const specifications = [
  {
    value: '92,000km',
    icon: '/images/previewMock/icons/specifications/speedometer.png',
  },
  {
    value: 'Petrol',
    icon: '/images/previewMock/icons/specifications/gas-station.png',
  },
  {
    value: 'Automatic',
    icon: '/images/previewMock/icons/specifications/gear-box.png',
  },
  {
    value: '2015',
    icon: '/images/previewMock/icons/specifications/sedan.png',
  },
  {
    value: 'Air bag',
    icon: '/images/previewMock/icons/specifications/air-bag.png',
  },
  {
    value: 'Power Steering',
    icon: '/images/previewMock/icons/specifications/steering-wheel.png',
  },
  {
    value: '2017',
    icon: '/images/previewMock/icons/specifications/calender.png',
  },
];

const CarCard = () => {
  return (
    <div className='bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg mb-10 '>
      <div className='grid grid-cols-3'>
        <div className='w-full relative h-full col-span-1'>
          <Image src='/images/carSearch/car.png' layout='fill' alt='car' />
          <AiFillHeart className='text-red-500 absolute top-3 left-3  inline-block text-lg' />
        </div>
        <div className='w-full py-3 px-5 flex flex-col justify-between col-span-2'>
          <div>
            <div className='flex items-center justify-between'>
              <h2 className='text-[#0C45B2] text-xl font-semibold'>
                2015 Toyota Corolla LE
              </h2>
              <button className='flex h-12 rounded-lg w-48 text-center ring-1 ring-offset-2 ring-slate-50 justify-center items-center bg-gradient-to-r from-[#3C9E00] to-[#2C7400] text-white font-medium'>
                <BsFillTelephoneFill />
                0300 4883238
              </button>
            </div>
            <div className='text-[#444343] text-xl font-bold my-4'>
              PKR 2,875,000
            </div>
            <div className='flex items-center justify-between'>
              <div className='text-[#0C45B2] text-sm font-medium my-4'>
                Karachi, Pakistan
              </div>
              <Anchor
                href='/car/1'
                className='text-[#0C45B2] text-sm font-medium'
              >
                View details
              </Anchor>
            </div>
          </div>
          <div className='grid grid-cols-7 border-t-[1px] border-[#D1D1D1] pt-4'>
            {specifications.map((specification) => (
              <div key={specification.value} className='text-center'>
                <div className='relative w-7 h-7  mx-auto'>
                  <Image
                    src={specification.icon}
                    layout='fill'
                    alt={specification.value}
                  />
                </div>
                <span className='mt-2 inline-block text-sm font-medium '>
                  {specification.value}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
