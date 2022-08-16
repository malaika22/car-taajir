import { useRouter } from 'next/router';
import { useState } from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import { FiChevronDown } from 'react-icons/fi';

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
    <div
      className={`bg-white ring-1 ring-offset-2 ring-slate-50 w-full mx-auto rounded-2xl py-7 px-7 ${className}`}
    >
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
        <div className='grid-cols-3 grid w-[700px]'>
          <div className='border-2 border-r-0 border-[#B5B5B5]  w-full'>
            <FilterDropdown />
          </div>
          <div className='border-2 border-r-0 border-[#B5B5B5] w-full'>
            <FilterDropdown />
          </div>
          <div className='border-2 border-[#B5B5B5] w-full'>
            <FilterDropdown />
          </div>
        </div>
        <button
          className='bg-gradient-to-r from-[#EF6212] to-[#BD2D00] py-4 px-10 rounded-md flex items-center cursor-pointer'
          onClick={handleSearch}
        >
          <AiOutlineSearch className='text-white mr-3 font-semibold text-lg' />

          <span className='text-white font-semibold'>Search</span>
        </button>
      </div>
    </div>
  );
};

export default CarModelFilter;

const FilterDropdown = () => {
  const options = [
    'Model one',
    'Model Two',
    'Model Three',
    'Model Four',
    'Model Five',
  ];

  return (
    <div className='w-full relative'>
      <select
        className='bg-white relative p-3 py-4 w-full focus-visible:outline-none'
        placeholder='Car Make or Model'
        id='selectFilter'
      >
        {options.map((option) => (
          <option key={option} id={option} value={option}>
            {option}
          </option>
        ))}
      </select>
      <label htmlFor='selectFilter'>
        <div className='absolute right-0 top-0 bottom-0 m-auto items-center flex pr-3'>
          <FiChevronDown className='text-[20px]' />
        </div>
      </label>
    </div>
  );
};
