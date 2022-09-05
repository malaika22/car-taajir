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
      <div className='relative'>
        <CarBackground
          title='Shop the nation’s largest'
          subtitle='New car inventory'
        />
        <div className='top-[386px] absolute  right-0 left-0 max-w-7xl mx-auto px-5 sm:block hidden'>
          <CarModelFilter route='find-new-cars' />
        </div>
      </div>
      <CarCategory />
      <ShopByStyle />
      <ShopByLocation />
    </>
  );
};

export default NewCars;
