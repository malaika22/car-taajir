import { Dialog, Transition } from '@headlessui/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, Fragment, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';
import { IoIosArrowBack } from 'react-icons/io';
import { STATUS } from 'types/general.types';
import * as yup from 'yup';

import TextField from '../FormUtils/TextField';

interface IForgetPassword {
  email: string;
}

const ForgetPasswordModal = ({
  visible,
  onClose,
}: {
  visible: boolean;
  onClose: Dispatch<SetStateAction<boolean>>;
}) => {
  const forgetPasswordSchema = yup.object({
    email: yup.string().email().required('Email is required!'),
  });
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IForgetPassword>({
    resolver: yupResolver(forgetPasswordSchema),
  });
  const [successStatus, setSuccessStatus] = useState({ status: STATUS.idle });

  const handleForgetPassword = (values: IForgetPassword) => {
    try {
      setSuccessStatus({ status: STATUS.loading });
      //Call API
      setTimeout(() => {
        setSuccessStatus({ status: STATUS.success });
      }, 5000);
    } catch (err) {
      setSuccessStatus({ status: STATUS.error });
    }
  };
  if (successStatus.status === STATUS.success) {
    return (
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => onClose(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='h-[400px] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                    <div className='inline-block cursor-pointer'>
                      <IoIosArrowBack
                        className='text-2xl'
                        onClick={() => onClose(false)}
                      />
                    </div>
                  </Dialog.Title>

                  <div className='mt-10 text-center'>
                    <h2 className='text-2xl text-[#444343] font-bold mb-3'>
                      Email Sent!
                    </h2>
                    <p className='text-sm text-gray-500 px-8 my-10'>
                      In order to reset your password we have sent an email,
                      Kindly Check!
                    </p>
                  </div>

                  <div className='mt-4 text-center'>
                    <button
                      className='bg-[#3C9E00] hover:bg-[#2C7400] transition-all duration-300  font-bold text-white rounded-lg h-12 w-52 '
                      onClick={() => onClose(false)}
                    >
                      Done
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  } else if (successStatus.status === STATUS.loading) {
    return (
      <div>
        <Transition appear show={true} as={Fragment}>
          <Dialog
            as='div'
            className='relative z-10'
            onClose={() => console.log('close')}
          >
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0'
              enterTo='opacity-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100'
              leaveTo='opacity-0'
            >
              <div className='fixed inset-0 bg-black bg-opacity-25' />
            </Transition.Child>

            <div className='fixed inset-0 overflow-y-auto'>
              <div className='flex min-h-full items-center justify-center p-4 text-center'>
                <Transition.Child
                  as={Fragment}
                  enter='ease-out duration-300'
                  enterFrom='opacity-0 scale-95'
                  enterTo='opacity-100 scale-100'
                  leave='ease-in duration-200'
                  leaveFrom='opacity-100 scale-100'
                  leaveTo='opacity-0 scale-95'
                >
                  <Dialog.Panel className='w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                    <div className='flex items-center justify-center p-[100px] flex-col'>
                      <AiOutlineLoading3Quarters className='animate-spin text-[130px]' />
                      <div className='mt-10 text-xl'>Loading...</div>
                    </div>
                  </Dialog.Panel>
                </Transition.Child>
              </div>
            </div>
          </Dialog>
        </Transition>
      </div>
    );
  } else if (successStatus.status === STATUS.error) {
    return <div>Error</div>;
  } else {
    return (
      <Transition appear show={true} as={Fragment}>
        <Dialog
          as='div'
          className='relative z-10'
          onClose={() => onClose(false)}
        >
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <div className='fixed inset-0 bg-black bg-opacity-25' />
          </Transition.Child>

          <div className='fixed inset-0 overflow-y-auto'>
            <div className='flex min-h-full items-center justify-center p-4 text-center'>
              <Transition.Child
                as={Fragment}
                enter='ease-out duration-300'
                enterFrom='opacity-0 scale-95'
                enterTo='opacity-100 scale-100'
                leave='ease-in duration-200'
                leaveFrom='opacity-100 scale-100'
                leaveTo='opacity-0 scale-95'
              >
                <Dialog.Panel className='h-[400px] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                  <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                    <div className='inline-block cursor-pointer'>
                      <IoIosArrowBack
                        className='text-2xl'
                        onClick={() => onClose(false)}
                      />
                    </div>
                  </Dialog.Title>
                  <form onSubmit={handleSubmit(handleForgetPassword)}>
                    <div className='mt-10'>
                      <h2 className='text-2xl text-[#444343] font-bold mb-3'>
                        Forgot Password?
                      </h2>
                      <p className='text-sm text-gray-500 mb-6'>
                        Type your email below to reset your password.
                      </p>
                      <TextField
                        id='email'
                        placeholder='Enter email'
                        required
                        title='Email'
                        error={errors.email?.message}
                        type='text'
                        register={register}
                      />
                    </div>

                    <div className='mt-4'>
                      <button className='bg-[#3C9E00] hover:bg-[#2C7400] transition-all duration-300  font-bold text-white rounded-lg h-12 w-52 '>
                        Continue
                      </button>
                    </div>
                  </form>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    );
  }
};

export default ForgetPasswordModal;

// bg-gradient-to-r from-[#3C9E00] to-[#2C7400]
