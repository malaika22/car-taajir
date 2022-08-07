import { BreadCrumbs, CarCard, CarModelFilter, Sort } from '@/modules';

const FindCarsSearch = () => {
  return (
    <div className='bg-[#E5E5E5] py-8'>
      <div className='max-w-6xl mx-auto '>
        <CarModelFilter />
        <div className='py-14'>
          <h2 className='text-2xl text-black font-bold'>Find Used Cars</h2>
          <BreadCrumbs
            pagesLinks={[
              {
                title: 'Home',
                href: '/',
              },
              {
                title: 'Find Used Cars',
                href: 'find-used-cars',
              },
            ]}
          />
          <div className='grid grid-cols-4 gap-x-6 mt-10'>
            <div className='col-span-1'>
              <Sort />
            </div>

            <div className='col-span-3 '>
              {Array(10)
                .fill({})
                .map((_, i) => (
                  <CarCard key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FindCarsSearch;
