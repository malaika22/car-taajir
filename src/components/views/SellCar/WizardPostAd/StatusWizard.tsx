import { AiOutlineLoading3Quarters } from 'react-icons/ai';
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
      title: data ? data.title : 'Loading..',
      subtitle: data ? data.subtitle : 'Loading..',
      Icon: () => (
        <div className='p-4 rounded-full bg-slate-100 '>
          {data?.Icon}
          {/* <Icon className=' text-5xl sm:text-6xl text-slate-400  animate-bounce   ' /> */}
        </div>
      ),
    },
    [STATUS.success]: {
      title: 'Your ad was submitted successfully',
      subtitle: 'Please while we prepare your ad preview',

      Icon: () => (
        <div className='p-4 rounded-full bg-green-400'>
          <AiOutlineLoading3Quarters className='animate-spin' />
          <FiCheck className=' text-5xl sm:text-7xl text-green-900   animate-pulse ' />
        </div>
      ),
    },
    [STATUS.error]: {
      title: 'Something went wrong',
      subtitle:
        'Please try again and if the issues persists, Try contacting us.',
      Icon: () => (
        <div className='p-4 rounded-full bg-amber-200'>
          <FiX className=' text-5xl sm:text-7xl text-amber-900   animate-pulse ' />
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
    <div>
      <div>{headings[status].title}</div>
      <div>{headings[status].subtitle}</div>
      <Icon />
    </div>
  );
};

export default StatusWizard;
