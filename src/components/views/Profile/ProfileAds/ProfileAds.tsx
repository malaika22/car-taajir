import AdTabs from './tabs/AdTabs';

const ProfileAds = () => {
  return (
    <div className='bg-white py-12 px-4 xs:px-8 rounded-[18px] shadow-[0px_4px_4px_0rem_rgb(0,0,0,0.25)]'>
      <h2 className='text-center grow text-[#444343] font-bold text-2xl'>
        My Ads
      </h2>
      <div className=' px-0 mdLg:px-16'>
        <AdTabs />
      </div>
    </div>
  );
};

export default ProfileAds;
