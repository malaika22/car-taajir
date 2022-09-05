import { yupResolver } from '@hookform/resolvers/yup';
import useUser from 'hooks/useUser';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiLoader } from 'react-icons/fi';
import { ILogin } from 'types/credentials.types';
import * as yup from 'yup';

import { Anchor, ForgetPasswordModal, TextField } from '@/modules';

const DefaultLogin = () => {
  const router = useRouter();
  const loginSchema = yup.object({
    email: yup.string().email().required('Email is required!'),
    password: yup.string().required('Password is required!'),
  });

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ILogin>({
    resolver: yupResolver(loginSchema),
  });

  const { signIn } = useUser();
  const [forgetPassword, setForgetPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleLogin = (values: ILogin) => {
    console.log('values', values);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      signIn(values);
      router.push('/');
    }, 3000);
  };
  return (
    <>
      <div>
        <form onSubmit={handleSubmit(handleLogin)}>
          <TextField
            id='email'
            placeholder='Enter email'
            required
            title='Email'
            error={errors.email?.message}
            type='text'
            register={register}
          />
          <TextField
            toggleVisibility
            register={register}
            id='password'
            placeholder='Password'
            title='Password'
            type='password'
            error={errors?.password?.message}
            required
          />
          <div
            className='underline text-[#0C45B2] cursor-pointer text-sm'
            onClick={() => setForgetPassword(true)}
          >
            Forget Password?
          </div>
          <button className='mt-6  font-bold bg-[#3C9E00] hover:bg-[#2C7400] transition-all duration-300 text-white rounded-lg h-12 w-52 relative flex items-center justify-center'>
            {loading ? (
              <FiLoader className='animate-spin text-lg mx-auto' />
            ) : (
              <span>Sign In</span>
            )}
          </button>
          <div className='mb-10 text-sm mt-3 text-[#444343] font-bold flex items-center'>
            Don’t have an account?
            <div className='w-fit ml-2'>
              <Anchor href='/sign-up' className='text-[#0C45B2]  navItems'>
                Sign Up
              </Anchor>
              <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
            </div>
          </div>
        </form>
        <div className='text-xs'>
          By Signing In you agree to the{' '}
          <div className='w-fit inline-block mx-1'>
            <Anchor href='#' className='text-[#0C45B2] font-bold navItems'>
              Terms of Services
            </Anchor>
            <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
          </div>{' '}
          and{' '}
          <div className='w-fit inline-block mx-1'>
            <Anchor href='#' className='text-[#0C45B2] font-bold navItems'>
              Privacy Policy
            </Anchor>
            <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
          </div>
          .
        </div>
      </div>
      {forgetPassword && (
        <ForgetPasswordModal
          visible={forgetPassword}
          onClose={setForgetPassword}
        />
      )}
    </>
  );
};

export default DefaultLogin;

// bg-gradient-to-r from-[#3C9E00] to-[#2C7400]
