import Image from 'next/image';
import { ICarCategory } from 'types/general.types';
import { shopByBrand } from 'utils/constant';

interface ICarBrand {
  category: ICarCategory;
}

const BrandCategory = () => {
  return (
    <div className='px-5'>
      <h2 className='text-[#444343] text-lg font-bold mb-5'>Shop by Brand</h2>
      <div className='grid  sm:grid-cols-3 md:grid-cols-5 gap-y-4 gap-x-6  '>
        {shopByBrand.map((category) => (
          <BrandCard category={category} key={category.title} />
        ))}
      </div>
    </div>
  );
};

export default BrandCategory;

const BrandCard = ({ category }: ICarBrand) => {
  return (
    <div className='bg-white border-2 border-[#B5B5B5] rounded-2xl py-5 flex items-center px-5'>
      <div className='w-24 h-24 relative mx-auto flex items-center'>
        {category.src ? (
          <Image
            src={category.src}
            layout='fill'
            objectFit='contain'
            alt={category.title}
          />
        ) : (
          <span className='text-[#444343] font-bold text-sm cursor-pointer'>
            See all Brands
          </span>
        )}
      </div>
    </div>
  );
};
