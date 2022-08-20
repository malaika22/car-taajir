import Image from 'next/image';
import { FiEdit } from 'react-icons/fi';

const ProfileAvatar = () => {
  return (
    <div className='flex xs:flex-row flex-col gap-y-6 items-center'>
      <div className='w-24 h-24 relative mr-6'>
        <Image src='/images/profile/avatar.png' layout='fill' alt='Avatar' />
      </div>
      <div>
        <div className='text-[#444343] font-bold text-xl mb-2 xs:text-start text-center'>
          Yusra Tahir
        </div>
        <div className='text-[#0C45B2] flex items-center text-sm cursor-pointer'>
          <FiEdit className='mr-2' />
          <span className='text-sm'>Change Profile Picture</span>
        </div>
        <div className='text-[#0C45B2] text-center xs:text-end text-sm font-semibold mt-2'>
          Resent Verification Email
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
