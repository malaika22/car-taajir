import Image from 'next/image';
import { AiFillHeart, AiOutlineEye } from 'react-icons/ai';
interface IAdCardProps {
  ad: {
    id: number;
    title: string;
    reviews: number;
    city: string;
    views: number;
    updatedOn: string;
    status: string;
  };
  status?: string;
}

const AdCard = ({ ad, status }: IAdCardProps) => {
  return (
    <div className='bg-white p-4 rounded-lg'>
      <div className='flex flex-col sm:flex-row items-center gap-x-8'>
        <div className='flex relative'>
          <div className='w-32 h-[112px] relative'>
            <Image src='/images/adMock/ad.webp' layout='fill' alt='Car ad' />
          </div>
          <AiFillHeart className='text-red-500 absolute top-3  inline-block text-lg' />
        </div>
        <div className=' w-full '>
          <div className='flex justify-between  xs:flex-row flex-col gap-y-3    pb-4 border-b-[1px] border-[#D1D1D1]'>
            <div className='xs:text-start text-center'>
              <h2 className='text-[#0C45B2] font-bold text-lg mb-2'>
                {ad.title}
              </h2>
              <div>
                {ad.reviews}{' '}
                <span className='text-[#444343] text-sm'>Reviews</span>
              </div>
              <div className='text-[#0C45B2] text-xs'>{ad.city}, Pakistan</div>
            </div>
            <div className='xs:text-end flex flex-col justify-between text-center'>
              <div className='w-fit ml-auto'>
                {status && (
                  <div
                    className={`font-bold cursor-pointer text-sm navItems ${
                      status === 'Make it Active Again'
                        ? 'text-green-700'
                        : status === 'Remove Ad' && 'text-[#F6000F] '
                    }`}
                  >
                    {status}
                  </div>
                )}
                <div
                  className={`borderAnimation h-[1px] w-0  ${
                    status === 'Make it Active Again'
                      ? 'bg-green-700'
                      : status === 'Remove Ad' && 'bg-[#F6000F] '
                  } transition-all duration-300`}
                ></div>
              </div>

              <div className='text-[#0C45B2] text-xs mt-2 xs:mt-0'>
                Last Updated: {ad.updatedOn}
              </div>
            </div>
          </div>
          <div className='flex xs:justify-start justify-center items-center mt-3'>
            <AiOutlineEye />{' '}
            <span className='text-sm ml-2 font-semibold '>0 Total Views</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AdCard;
