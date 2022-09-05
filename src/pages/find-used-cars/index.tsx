import { FeaturedCars } from '@views';

import {
  CarBackground,
  CarCategory,
  CarModelFilter,
  ShopByLocation,
} from '@/modules';

const UsedCars = () => {
  return (
    <>
      <div className='relative'>
        <CarBackground
          title='Shop the nation’s largest'
          subtitle='Used car inventory'
        />
        <div className='top-[386px] absolute  right-0 left-0 max-w-7xl mx-auto px-5 sm:block hidden'>
          <CarModelFilter route='find-used-cars' />
        </div>
      </div>
      <CarCategory />
      <FeaturedCars />
      <ShopByLocation />
    </>
  );
};

export default UsedCars;
