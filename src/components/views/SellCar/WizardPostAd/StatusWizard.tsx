import { FiCheck, FiX } from 'react-icons/fi';
import { STATUS } from 'types/general.types';

interface IStatusWizard {
  formState: {
    status: STATUS;
    data?: {
      title: string;
      subtitle: string;
      Icon?: JSX.Element;
    };
  };
}

const StatusWizard = ({ formState: { status, data } }: IStatusWizard) => {
  const headings = {
    [STATUS.loading]: {
      title: data?.title ? data.title : 'Loading..',
      subtitle: data?.title ? data.subtitle : 'Loading..',
      Icon: () => (
        <div className='p-9 rounded-full bg-slate-100 '>
          {data?.Icon ? (
            data?.Icon
          ) : (
            <Icon className=' text-5xl sm:text-7xl text-slate-400  animate-bounce   ' />
          )}
        </div>
      ),
    },
    [STATUS.success]: {
      title: data?.title ? data.title : 'Your ad was submitted successfully',
      subtitle: data?.subtitle
        ? data.subtitle
        : 'Please while we prepare your ad preview',

      Icon: () => (
        <div className='p-4 rounded-full bg-green-400'>
          <FiCheck className=' text-5xl sm:text-7xl text-green-900   animate-pulse ' />
        </div>
      ),
    },
    [STATUS.error]: {
      title: data?.title ? data.title : 'Something went wrong',
      subtitle: data?.subtitle
        ? data.subtitle
        : 'Please try again and if the issues persists, Try contacting us.',
      Icon: () => (
        <div className='p-4 rounded-full bg-amber-200'>
          {data?.Icon ? (
            data.Icon
          ) : (
            <FiX className=' text-5xl sm:text-7xl text-amber-900   animate-pulse ' />
          )}
        </div>
      ),
    },
    [STATUS.idle]: {
      title: 'Application has not been submitted yet',
      Icon: FiCheck,
      subtitle: '',
    },
    [STATUS.preview]: {
      title: '',
      Icon: FiCheck,
      subtitle: '',
    },
  };

  const Icon = headings[status].Icon;
  return (
    <div className='min-h-[400px] flex flex-col items-center justify-center px-10 text-center'>
      <div className='text-[#939393] text-2xl mb-10 font-bold'>
        {headings[status].title}
      </div>
      <div className='text-lg font-semibold mb-10'>
        {' '}
        {headings[status].subtitle}
      </div>
      <Icon />
    </div>
  );
};

export default StatusWizard;
