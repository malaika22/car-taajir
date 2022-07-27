import { Anchor, ForgetPasswordModal, TextField } from '@/components/modules';
import { ILogin } from '@/types/credentials.types';
import { yupResolver } from '@hookform/resolvers/yup';
import { Dispatch, SetStateAction, useState } from 'react';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

const DefaultLogin = () => {
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

  const [forgetPassword, setForgetPassword] = useState(false);
  const handleLogin = (values: ILogin) => {};
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
          <button className='mt-6 bg-gradient-to-r from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg h-12 w-52 '>
            Sign In
          </button>
          <div className='mb-10 text-sm mt-3 text-[#444343] font-bold'>
            Don’t have an account?
            <Anchor href='/sign-up' className='text-[#0C45B2] ml-2'>
              Sign Up
            </Anchor>
          </div>
        </form>
        <div className='text-xs'>
          By Signing In you agree to the{' '}
          <Anchor href='#' className='text-[#0C45B2] font-bold'>
            Terms of Services
          </Anchor>{' '}
          and{' '}
          <Anchor href='#' className='text-[#0C45B2] font-bold'>
            Privacy Policy
          </Anchor>
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
