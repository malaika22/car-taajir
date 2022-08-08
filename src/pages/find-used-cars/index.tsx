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
      <CarBackground
        title='Shop the nation’s largest'
        subtitle='Used car inventory'
      />
      <CarModelFilter className='py-5 px-10  top-[386px] absolute  right-0 left-0 ' />
      <CarCategory />
      <FeaturedCars />
      <ShopByLocation />
    </>
  );
};

export default UsedCars;
