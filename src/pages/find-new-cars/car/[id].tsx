import Image from 'next/image';
import { AiOutlineDislike, AiOutlineLike } from 'react-icons/ai';
import { IoLocationSharp } from 'react-icons/io5';
import ReactStars from 'react-rating-stars-component';

import { ImagesCarousel } from '@/modules';

const specifications = [
  {
    value: '11-14 km/litre',
    icon: '/images/previewMock/icons/specifications/odometer.png',
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
];

const info = {
  pros: [
    'Turbo Engine Options Across all Variants',
    'Build Quality is improved from previous Generations',
    'Longest Car in C-Segment',
  ],
  cons: [
    'Overpriced',
    'Relatively Subdued Styling Compared to Civic X',
    'Only 2 Airbags, even in top of the line RS Variant',
    'Parking Sensors are not present',
    'Wireless Charging not present',
  ],
};

const NewCar = () => {
  return (
    <div className='bg-[#E5E5E5] flex relative'>
      <div className='max-w-6xl mx-auto py-10 pb-32 '>
        <div className='pl-[60px]'>
          <h2 className='text-2xl font-bold'>2015 Toyota Corolla LE</h2>
          <div className='flex items-center text-sm mt-1 mb-6'>
            <IoLocationSharp className='text-[#5E5E5E] mr-1' />{' '}
            <span className='text-[#B5B5B5]'>Karachi, Pakistan</span>
          </div>
        </div>
        <div className='w-full min-h-[500px] h-[500px] pl-[60px]'>
          <ImagesCarousel />
        </div>
        {/* Specification */}
        <div className='grid grid-cols-6 px-7 py-10 my-10 max-w-3xl mx-auto bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          {specifications.map((specification, index) => (
            <div key={index} className='text-center'>
              <div className='h-10 w-10 relative mx-auto'>
                <Image
                  src={specification.icon}
                  alt={specification.value}
                  layout='fill'
                />
              </div>
              <div className='font-sm font-bold mt-2'>
                {specification.value}
              </div>
            </div>
          ))}
        </div>
        {/* Specification */}

        {/* Car Information */}
        <div className='my-10 py-12 px-8 bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          <h2 className='text-[#444343] font-bold text-2xl text-center mb-11'>
            Honda Civic 2022 price in Pakistan
          </h2>
          <div className='grid grid-cols-3 gap-x-6'>
            {Array(3)
              .fill({})
              .map((_, i) => (
                <CarVarient key={i} />
              ))}
          </div>
        </div>
        {/* Car Information */}

        {/* Pros Cons */}
        <div className='my-10 py-12 px-8 bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          <h2 className='text-[#444343] font-bold text-2xl text-center mb-11'>
            Pros & Cons
          </h2>
          <div className='grid grid-cols-2'>
            <div className='w-[300px] mx-auto'>
              <AiOutlineLike className='mx-auto text-5xl text-[#3C9E00] mb-7' />

              <ul className='list-disc leading-7 text-sm'>
                {info['pros'].map((info, index) => (
                  <li key={index} className='text-[#444343] font-medium'>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
            <div className='w-[300px] mx-auto '>
              <AiOutlineDislike className='mx-auto text-5xl text-[#F6000F] mb-7' />

              <ul className='list-disc  leading-7 text-sm'>
                {info['cons'].map((info, index) => (
                  <li key={index} className='text-[#444343] font-medium'>
                    {info}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
        {/* Pros Cons */}

        {/* Overview */}
        <div className='my-10 py-12 px-8 bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          <h2 className='text-[#444343] font-bold text-2xl text-center mb-11'>
            Overview
          </h2>
          <div className='font-bold'>
            <div className='max-w-3xl mx-auto'>
              <div>
                Honda Civic is manufactured by the Pakistani automobile
                manufacturer and Honda subsidiary Atlas Honda in Pakistan.
                <br /> The first Honda Civic was launched globally in 1972 and
                had a 1,169 cc four-cylinder water-cooled engine along with
                front power disc brakes. It was available in different options
                such as a two- or four-door fastback sedan, three- and a
                five-door hatchback, as well as a five-door station wagon. The
                second-generation Honda Civic was launched in 1979 and was
                branded as a 1980 model. It had an angular shape, had more
                interior space and its engine power was better. This generation
                of Honda Civic was available in three transmissions: a 4-speed
                and 5-speed manual, and a 2-speed semi-automatic which Honda
                used to call “Hondamatic”. Previously a subcompact, since 2000
                the Civic has been categorized as a compact car.
              </div>
              <div className='text-end mt-6 '>
                <span className='cursor-pointer text-blue-500'>Show more</span>
              </div>
            </div>
          </div>
        </div>
        {/* Overview */}

        {/* Review */}
        <div className='my-10 py-12 px-8 bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          <Reviews />
        </div>
        {/* Review */}

        {/* Colors */}
        <div className='mt-10 py-12 px-8 bg-white ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
          <h2 className='text-[#444343] font-bold text-2xl text-center mb-11'>
            Colors
          </h2>
          <Colors />
        </div>
        {/* Colors */}
      </div>
      <SideMenu />
    </div>
  );
};

export default NewCar;

const CarVarient = () => {
  const variants = [
    {
      value: '1500CC',
      icon: '/images/previewMock/icons/variants/engine.png',
    },
    {
      value: 'Petrol',
      icon: '/images/previewMock/icons/variants/gas-station.png',
    },
    {
      value: 'Automatic',
      icon: '/images/previewMock/icons/variants/gear-box.png',
    },
  ];
  return (
    <div className='bg-[#F4F4F4] ring-1 ring-offset-2 ring-slate-50 rounded-lg text-center py-10'>
      <div className='text-[#0C45B2] font-semibold mb-4'>
        Honda Civic Standard
      </div>
      <div className='text-[#444343] font-bold '>
        This variant Ex-Factory Price is{' '}
      </div>
      <div className='text-[#2C7400] text-2xl font-semibold my-3'>
        PKR 5,399,000
      </div>
      <div className='grid grid-cols-3 mt-10'>
        {variants.map((variant, index) => (
          <div key={index}>
            <Image
              width={40}
              height={40}
              src={variant.icon}
              alt={variant.value}
            />
            <div className='text-sm font-bold text-[#0C45B2]'>
              {variant.value}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const Reviews = () => {
  return (
    <div className='grid grid-cols-2'>
      <div className='w-full mx-auto min-h-[300px] relative'>
        <Image
          src='/images/new-cars/carMock.png'
          layout='fill'
          alt='car'
          objectFit='contain'
        />
      </div>
      <div>
        <h2 className='text-[#444343] font-bold text-2xl  mb-5'>Reviews</h2>
        <div className='text-[#0C45B2] font-bold '>Honda Civic Oriel</div>
        <ReactStars
          count={5}
          size={24}
          activeColor='#ffd700'
          edit={false}
          value={3}
        />
        <div className='flex space-x-10'>
          <p className='font-bold pt-5'>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pretium
            viverra nunc, gravida neque turpis diam aliquet. Netus aliquam magna
            arcu, suspendisse vitae eget. Risus vitae nunc, pharetra quis
            phasellus ut in nunc. Nunc, ornare augue amet vitae sem vel nunc
            diam nibh. - Anonymous
          </p>
          <div className='w-[600px] h-[150px] relative'>
            <Image src='/images/new-cars/quotes.png' layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
};

const Colors = () => {
  const colors = [
    {
      name: 'Carnelian Red Pearl',
      value: '#B80000',
    },
    {
      name: 'Crystal Black Pearl',
      value: '#232323',
    },
    {
      name: 'Lunar Silver Metallic',
      value: '#DFDFDF',
    },
    {
      name: 'Meteoroid Gray Metalic',
      value: '#929292',
    },
    {
      name: 'Morning Mist Blue Metallic',
      value: '#85AEFD',
    },
    {
      name: 'Teffeta White',
      value: '#FFFFFF',
    },
    {
      name: 'Urban Titanium Metallic',
      value: '#DDDDDD',
    },
  ];
  return (
    <div className='grid grid-cols-7 gap-x-6'>
      {colors.map((color, index) => (
        <div key={index}>
          <div
            className='h-[134px] w-full rounded-[50%] shadow-[0px_4px_4px_0rem_rgb(0,0,0,0.25)]'
            style={{ backgroundColor: color.value }}
          ></div>
          <div className='text-center text-[#444343] font-bold mt-3'>
            {color.name}
          </div>
        </div>
      ))}
    </div>
  );
};

const SideMenu = () => {
  return (
    <div className='w-[200px] h-[350px] bg-black text-center absolute top-12 rounded-r-[20px] py-6'>
      <div className=' text-white text-lg mb-6'>Honda Civic</div>
      <div className='font-bold text-white my-4'>Price</div>
      <div className='font-bold text-white my-4'>Pros & Cons</div>
      <div className='font-bold text-white my-4'>Overview</div>
      <div className='font-bold text-white my-4'>Reviews</div>
      <div className='font-bold text-white my-4'>Colors</div>
    </div>
  );
};
