import { Children } from '@/types/general.types';
import Image from 'next/image';

interface IAuthContainer {
  children: Children;
  pageTitle: string;
}

const AuthContainer = ({ children, pageTitle }: IAuthContainer) => {
  return (
    <div className='bg-[#E5E5E5] py-12 px-6 '>
      <div className='max-w-6xl mx-auto flex gap-x-20 items-center'>
        <div className='sm:w-[40%] px-10 py-6 min-h-[635px] bg-white drop-shadow-[0_2.29px_2.29px_rgba(0,0,0,0.25)] rounded-xl'>
          <div>
            <h2 className='text-[#444343] text-xl font-bold mb-7'>
              {pageTitle}
            </h2>
            <div>{children}</div>
          </div>
        </div>
        <div className='w-[60%]'>
          <div className=' h-[500px] w-full relative'>
            <Image
              src='/images/authentication/authentication-banner.png'
              layout='fill'
              objectFit='contain'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthContainer;
