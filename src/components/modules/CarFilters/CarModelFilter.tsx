import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';

interface IModelFilterProps {
  className?: string;
}

const CarModelFilter = ({ className }: IModelFilterProps) => {
  const router = useRouter();
  const filterTabs = ['Make', 'Body Style'];
  const [selectedTab, setSelectedTab] = useState('Make');
  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };

  const handleSearch = () => {
    router.push('/find-new-cars/abc?foo=bar');
  };
  return (
    <div className='bg-white ring-1 ring-offset-2 ring-slate-50 w-full mx-auto rounded-2xl py-7 px-7'>
      <div className='filter-tabs flex w-full relative text-center mb-5'>
        {filterTabs.map((tab) => (
          <div
            className={`pb-3 tab w-28 cursor-pointer ${
              selectedTab === tab && 'active'
            }`}
            onClick={() => handleSelectTab(tab)}
            key={tab}
          >
            {tab}
          </div>
        ))}
        <div className='slider'></div>
      </div>
      <div className='flex items-center justify-between'>
        <div className='flex'>
          <div>Car Make or Model</div>
          <div>All Cities</div>
          <div>Price Rang</div>
        </div>
        <button
          className='bg-gradient-to-r from-[#EF6212] to-[#BD2D00] py-4 px-8 rounded-md flex items-center'
          onClick={handleSearch}
        >
          <span className='mr-5 flex'>
            <Image
              src='/images/icons/search-icon.png'
              width={15}
              height={15}
              objectFit='contain'
              alt='search-icon'
            />
          </span>

          <span className='text-white font-semibold'>Search</span>
        </button>
      </div>
    </div>
  );
};

export default CarModelFilter;
