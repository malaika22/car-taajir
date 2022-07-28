import { ShopByStyle } from '@views';

import {
  CarBackground,
  CarCategory,
  CarModelFilter,
  ShopByLocation,
} from '@/modules';

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
