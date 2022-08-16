import BrandCategory from './BrandCategory';
import TypeCategory from './TypeCategory';

const CarCategories = () => {
  return (
    <div className='bg-[#E5E5E5] pt-28 pb-20'>
      <div className='max-w-5xl mx-auto'>
        <TypeCategory />
        <BrandCategory />
      </div>
    </div>
  );
};

export default CarCategories;
