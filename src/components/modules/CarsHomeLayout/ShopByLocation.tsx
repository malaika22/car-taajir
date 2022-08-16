import { shopByLocation } from 'utils/constant';

const ShopByLocation = () => {
  return (
    <div className='bg-[#E5E5E5]  px-5'>
      <div className='max-w-5xl mx-auto py-20 '>
        <h2 className='text-[#444343] text-lg font-bold mb-5 text-center sm:text-start'>
          Shop by Location
        </h2>
        <div className='grid grid-cols-1 sm:grid-cols-3 md:grid-cols-5 gap-x-4 gap-y-5 '>
          {shopByLocation.map((location) => (
            <div
              key={location.city}
              style={{ backgroundImage: `url(${location.src})` }}
              className='w-full h-[130px] rounded-[10px] bg-cover flex items-center justify-center cursor-pointer'
            >
              <span className='text-white text-lg font-bold'>
                {location.city}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ShopByLocation;
