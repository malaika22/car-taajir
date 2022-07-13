import Image from "next/image";
import { useState } from "react";

const CarModelFilter = () => {
  const filterTabs = ["Make", "Body Style"];
  const [selectedTab, setSelectedTab] = useState("Make");
  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div className='bg-white drop-shadow-[0_4px_4px_rgba(0,0,0,0.25)] max-w-5xl rounded-2xl py-5 px-10  top-[386px] absolute w-full right-0 left-0 mx-auto'>
      <div className='filter-tabs flex w-full relative text-center mb-5'>
        {filterTabs.map((tab) => (
          <div
            className={`pb-3 tab w-28 ${selectedTab === tab && "active"}`}
            onClick={() => handleSelectTab(tab)}
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
        <button className='bg-gradient-to-r from-[#EF6212] to-[#BD2D00] py-4 px-8 rounded-md flex items-center'>
          <span className='mr-5 flex'>
            <Image
              src={"/images/icons/search-icon.png"}
              width={15}
              height={15}
              objectFit='contain'
            />
          </span>

          <span className='text-white font-semibold'>Search</span>
        </button>
      </div>
    </div>
  );
};

export default CarModelFilter;
