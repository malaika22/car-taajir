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
      <CarModelFilter />
      <CarCategory />
      <FeaturedCars />
      <ShopByLocation />
    </>
  );
};

export default UsedCars;
