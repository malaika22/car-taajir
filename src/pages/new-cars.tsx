import {
  CarModelFilter,
  CarCategory,
  CarBackground,
} from '@/components/modules';
import { ShopByLocation } from '@/components/modules/CarsHomeLayout';
import { ShopByStyle } from '@/components/views';

const NewCars = () => {
  return (
    <>
      <CarBackground
        title='Shop the nation’s largest'
        subtitle='New car inventory'
      />
      <CarModelFilter />
      <CarCategory />
      <ShopByStyle />
      <ShopByLocation />
    </>
  );
};

export default NewCars;
