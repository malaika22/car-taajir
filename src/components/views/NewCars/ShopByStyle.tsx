import Image from 'next/image';

const ShopByStyle = () => {
  return (
    <div className='bg-gradient-to-r from-[#FF5C00] to-[#D44D01] min-h-[400px] py-10'>
      <h2 className='text-white text-2xl font-bold text-center'>
        Shop by lifestyle
      </h2>
      <div className='grid-cols-4 grid gap-x-4 max-w-7xl mx-auto py-14'>
        <div className='w-full h-[180px] relative flex items-center mx-auto'>
          <Image
            src='/images/findCars/newCars/commuter.png'
            layout='fill'
            objectFit='contain'
            alt='Commuter'
          />
        </div>
        <div className='w-full h-[180px] relative flex items-center mx-auto'>
          <Image
            src='/images/findCars/newCars/eco-friendly.png'
            layout='fill'
            objectFit='contain'
            alt='Friendly'
          />
        </div>
        <div className='w-full h-[180px] relative flex items-center mx-auto'>
          <Image
            src='/images/findCars/newCars/family.png'
            layout='fill'
            objectFit='contain'
            alt='Family'
          />
        </div>
        <div className='w-full h-[180px] relative flex items-center mx-auto'>
          <Image
            src='/images/findCars/newCars/outdoor.png'
            layout='fill'
            objectFit='contain'
            alt='Outdoor'
          />
        </div>
      </div>
    </div>
  );
};

export default ShopByStyle;
