import { myAds } from 'lib/dummyData';

import AdCard from '../AdCard';

const SavedAds = () => {
  return (
    <>
      <div className='text-[#8B8B8B] text-end mb-3 text-md font-bold'>
        Showing 01 Ads
      </div>

      <div className='space-y-7'>
        {myAds.map((ad, index) => (
          <AdCard status='Make it Active Again' ad={ad} key={index} />
        ))}
      </div>
    </>
  );
};

export default SavedAds;
