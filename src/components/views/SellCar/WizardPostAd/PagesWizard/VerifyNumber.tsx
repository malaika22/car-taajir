import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { BiCommentError } from 'react-icons/bi';
import { STATUS } from 'types/general.types';
import * as yup from 'yup';

interface IVerifyNumber {
  verificationCode: number;
}

const VerifyNumber = ({
  setFormState,
}: {
  setFormState: Dispatch<
    SetStateAction<{
      status: STATUS;
      data?: {
        title: string;
        subtitle: string;
        Icon?: JSX.Element;
      };
    }>
  >;
}) => {
  const verifyCodeSchema = yup.object({
    verificationCode: yup
      .string()
      .matches(/^[0-9]+$/, 'Must be only digits')
      .min(4, 'Verification code cant be less than 4 digits')
      .max(4, 'Verification code is invalid')
      .required('Verification code is required!!'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IVerifyNumber>({
    resolver: yupResolver(verifyCodeSchema),
  });

  const onSubmit = (values: IVerifyNumber) => {
    try {
      setFormState({
        status: STATUS.loading,
        data: {
          title: 'Wait while we are verifying your code',
          subtitle: 'Making a preview for your ad',
          Icon: <AiOutlineLoading3Quarters className='animate-spin' />,
        },
      });
      setTimeout(() => {
        setFormState({
          status: STATUS.preview,
        });
      }, 3000);
    } catch (err) {
      setFormState({
        status: STATUS.error,
        data: {
          title: 'There was an error in verifying your code',
          subtitle: 'Errorr...',
          Icon: <BiCommentError />,
        },
      });
    }
  };

  return (
    <div className='text-center py-8'>
      <h2 className='text-2xl text-[#444343] font-bold'>Verify Your Number</h2>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className='mt-8'>
          <div className='text-[#444343]'>
            Enter the code sent on your number
          </div>
          <div className=' my-10'>
            <label className='w-[200px] inline-block bg-[#F2F4F6]  h-[60px] relative'>
              <input
                {...register('verificationCode')}
                placeholder='0000'
                className='text-[#0C45B2] w-[100px] text-center absolute inline-block h-[60px] left-0 right-0 m-auto px-[15px] outline-none bg-[#F2F4F6]'
              />
            </label>
            {errors.verificationCode?.message && (
              <span className='text-[#F6000F] text-sm block mb-4'>
                {errors.verificationCode?.message}
              </span>
            )}
          </div>

          <button className='bg-gradient-to-r h-12 w-44 from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg mb-6'>
            Verify
          </button>
          <div className='text-[#444343] text-sm '>
            Didn’t receive your code?{' '}
            <span className='text-[#0C45B2] font-bold cursor-pointer block mt-2'>
              Retry
            </span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default VerifyNumber;
