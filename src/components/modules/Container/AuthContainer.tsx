import { Children } from "@/types/general.types";
import Image from "next/image";

interface IAuthContainer {
  children: Children;
  pageTitle: string;
}

const AuthContainer = ({ children, pageTitle }: IAuthContainer) => {
  return (
    <div className='bg-[#E5E5E5] py-9 px-6'>
      <div className='max-w-5xl mx-auto grid grid-cols-3'>
        <div className='col-span-1 bg-white'>
          <div>
            <h2 className='text-[#444343]'>{pageTitle}</h2>
            <div>{children}</div>
          </div>
        </div>
        <div className='col-span-2'>
          <div className='w-full h-[200px] relative'>
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
