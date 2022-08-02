import Image from 'next/image';
import { FiEdit } from 'react-icons/fi';

const ProfileAvatar = () => {
  return (
    <div className='flex items-center'>
      <div className='w-24 h-24 relative mr-6'>
        <Image src='/images/profile/avatar.png' layout='fill' alt='Avatar' />
      </div>
      <div>
        <div className='text-[#444343] font-bold text-xl mb-2'>Yusra Tahir</div>
        <div className='text-[#0C45B2] flex items-center text-sm cursor-pointer'>
          <FiEdit className='mr-2' />
          <span className='text-sm'>Change Profile Picture</span>
        </div>
      </div>
    </div>
  );
};

export default ProfileAvatar;
