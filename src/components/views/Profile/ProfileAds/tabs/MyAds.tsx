import { myAds } from 'lib/dummyData';
import { useState } from 'react';

import AdCard from '../AdCard';

interface IAdsStatusProps {
  data: {
    id: number;
    title: string;
    reviews: number;
    city: string;
    views: number;
    updatedOn: string;
    status: string;
  }[];
  status?: string;
}

const MyAds = () => {
  const [selectedOption, setSelectedOption] = useState('Active');
  const tabs = ['Active', 'Pending', 'Removed'];
  return (
    <>
      <div className='text-[#8B8B8B] text-end mb-3 text-md font-bold'>
        Showing 01 Ads
      </div>
      <div className='flex items-start space-x-12'>
        <div>
          {tabs.map((tab) => (
            <button
              key={tab}
              onClick={() => setSelectedOption(tab)}
              className={`border-[#326bd9] border-[1px]  cursor-pointer w-40 h-12 rounded-lg font-bold block mb-4 ${
                tab === selectedOption &&
                'bg-gradient-to-r from-[#0C45B2] to-[#3C74E2] text-white'
              }`}
            >
              {tab} (1)
            </button>
          ))}
        </div>
        <div className='grow'>
          <MyAdsStatus data={myAds} status={selectedOption} />
        </div>
      </div>
    </>
  );
};

export default MyAds;

const MyAdsStatus = ({ data, status }: IAdsStatusProps) => {
  const cta =
    status === 'Active'
      ? 'Remove Ad'
      : status === 'Removed'
      ? 'Make it Active Again'
      : status === 'Pending'
      ? 'Make it Active Again'
      : '';
  return (
    <div className='space-y-7'>
      {data.map((ad, index) => (
        <AdCard status={cta} ad={ad} key={index} />
      ))}
    </div>
  );
};
