import { ProfileAds, ProfileInfo } from '@views';


const ProfilePage = () => {
  return (
    <div className='bg-[#E5E5E5] py-7'>
      <div className='max-w-7xl mx-auto space-y-12'>
        <ProfileInfo />
        <ProfileAds />
      </div>
    </div>
  );
};

export default ProfilePage;
