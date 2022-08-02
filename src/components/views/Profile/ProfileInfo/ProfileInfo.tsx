import BasicInformation from './BasicInformation';
import ProfileAvatar from './ProfileAvatar';

const ProfileInfo = () => {
  return (
    <div className='bg-white py-12 px-8 rounded-[18px] shadow-[0px_4px_4px_0rem_rgb(0,0,0,0.25)]'>
      <div className='flex items-center'>
        <h2 className='text-center grow text-[#444343] font-bold text-2xl'>
          My Profile
        </h2>
        <div className='text-[#0C45B2]'>Resent Verification Email</div>
      </div>
      <div className='px-16'>
        <ProfileAvatar />
        <BasicInformation />
      </div>
    </div>
  );
};

export default ProfileInfo;
