import { useState } from "react";

const CarModelFilter = () => {
  const filterTabs = ["Make", "Body Style"];
  const [selectedTab, setSelectedTab] = useState("Make");
  const handleSelectTab = (tab: string) => {
    setSelectedTab(tab);
  };
  return (
    <div className='bg-white'>
      <div className='filter-tabs flex w-full relative text-center'>
        {filterTabs.map((tab) => (
          <div
            className={`tab w-32 ${selectedTab === tab && "active"}`}
            onClick={() => handleSelectTab(tab)}
          >
            {tab}
          </div>
        ))}
        <div className='slider'></div>
      </div>
    </div>
  );
};

export default CarModelFilter;
