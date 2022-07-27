import {
  CarBackground,
  CarCategory,
  CarModelFilter,
} from '@/components/modules';
import { ShopByLocation } from '@/components/modules/CarsHomeLayout';
import { FeaturedCars } from '@/components/views';

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
