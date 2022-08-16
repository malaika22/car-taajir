import Image from 'next/image';

const FeaturedCars = () => {
  return (
    <div className="bg-[url('/images/findCars/featured-cars/featured-background.png')] bg-cover bg-no-repeat min-h-[570px] py-20 px-5">
      <h2 className='text-white text-2xl font-bold text-center mb-12'>
        Featured Used Cars For Sale
      </h2>
      <div className='grid gap-y-5 sm:grid-cols-2 max-w-5xl mx-auto gap-x-5'>
        <div className='grid grid-cols-2 flex-1'>
          <div className='w-full h-[150px] relative'>
            <Image
              src='/images/findCars/featured-cars/featured-one.png'
              layout='fill'
              alt='Featured car'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src='/images/findCars/featured-cars/featured-two.png'
              layout='fill'
              alt='feature'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src='/images/findCars/featured-cars/featured-three.png'
              layout='fill'
              alt='Featured car'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src='/images/findCars/featured-cars/featured-four.png'
              layout='fill'
              alt='Featured car'
            />
          </div>
        </div>
        <div className='min-h-[300px] bg-black rounded-3xl px-5 sm:px-9 py-7'>
          <div className='flex text-white justify-between items-start'>
            <div className='font-bold sm:text-lg'>
              Honda BR-V 2017
              <div className='text-sm'>Karachi</div>
            </div>
            <div className='text-xs sm:text-lg'>PKR 2,875,000</div>
          </div>
          <div className='grid grid-cols-4 gap-y-6 gap-x-4 text-white py-8'>
            <div className='flex flex-col justify-end text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/speedometer.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>92,000 km</div>
            </div>
            <div className='text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/gas-station.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>Petrol</div>
            </div>
            <div className='text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/gear-box.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>Automatic</div>
            </div>
            <div className='text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/planner.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>2017</div>
            </div>
            <div className='text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/air-bag.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>Air bag</div>
            </div>
            <div className='text-center'>
              <div className='w-[35px] h-[35px] relative mx-auto mb-3'>
                <Image
                  src='/images/findCars/featured-cars/steerig-wheel.png'
                  layout='fill'
                  alt='Featured car'
                />
              </div>
              <div className='text-[12px]'>Power Steering</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturedCars;
