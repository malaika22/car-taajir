import { yupResolver } from '@hookform/resolvers/yup';
import useUser from 'hooks/useUser';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { FiLoader } from 'react-icons/fi';
import { MdOutlineMailOutline } from 'react-icons/md';
import { IPhone, ISignup } from 'types/credentials.types';
import * as yup from 'yup';
import 'yup-phone';

import { Anchor, PhoneNumberInput, TextField } from '@/modules';

const SignUp = () => {
  const [signUpType, setSignUpType] = useState<string>('default');
  const renderSignupView = () => {
    switch (signUpType) {
      case 'default':
        return <DefaultSignup />;
      case 'phoneNumber':
        return <PhoneNumberView />;
    }
  };

  return (
    <>
      {renderSignupView()}
      <div>
        <div className='my-2 text-[#444343] font-bold text-lg'>Or Sign Up</div>
        <div className='flex items-center mb-2'>
          <div className='w-[24px] h-[24px] relative mr-[20px] '>
            <Image
              src='/images/authentication/google-icon.png'
              layout='fill'
              objectFit='contain'
              alt='Google icon'
            />
          </div>
          <div>
            <div className='text-[#0C45B2] text-sm navItems cursor-pointer'>
              Sign Up with Google
            </div>
            <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
          </div>
        </div>
        {signUpType !== 'phoneNumber' ? (
          <div className='flex items-center mb-2'>
            <div className='w-[24px] h-[24px] relative  mr-[20px]'>
              <Image
                src='/images/authentication/phone-icon.png'
                layout='fill'
                objectFit='contain'
                alt='Phone Icon'
              />
            </div>
            <div>
              <div
                className='text-[#0C45B2] text-sm navItems cursor-pointer'
                onClick={() => setSignUpType('phoneNumber')}
              >
                Sign Up with Number
              </div>
              <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
            </div>
          </div>
        ) : (
          <div className='flex items-center mb-2'>
            <div className='w-[24px] h-[24px] relative  mr-[20px] '>
              <MdOutlineMailOutline className='text-2xl text-green-600' />
            </div>
            <div>
              <div
                className='text-[#0C45B2] text-sm navItems cursor-pointer'
                onClick={() => setSignUpType('default')}
              >
                Sign Up with email
              </div>
              <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SignUp;

const PhoneNumberView = () => {
  const [codeStep, setCodeStep] = useState(false);
  const phoneSchema = yup.object({
    phoneNumber: yup
      .string()
      .phone('PK', true, 'Phone number is invalid')
      .required('Phone number is required'),
  });
  const [error, setError] = useState('');
  const [processing, setProcessing] = useState(false);
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm<IPhone>({
    resolver: yupResolver(phoneSchema),
  });
  const phoneRegister = (values: IPhone) => {
    setCodeStep(true);
    try {
      //call signup API
    } catch (err) {
      setError('API Error');
    } finally {
      setProcessing(false);
    }
  };
  return (
    <>
      <div className='my-7 mb-10 text-sm text-[#0C45B2]'>
        Please enter a valid number where an SMS can be sent to verify your
        number. This number will be used to log you into{' '}
        <Anchor href='/' className='text-black cursor-pointer font-bold'>
          Car Taajir
        </Anchor>
        .
      </div>
      <form onSubmit={handleSubmit(phoneRegister)}>
        <PhoneNumberInput
          control={control}
          placeholder='Enter phone number'
          id='phoneNumber'
          required
          title='Phone number'
          error={errors.phoneNumber?.message}
        />
        <button className=' bg-gradient-to-r from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg h-12 w-52 '>
          Next
        </button>
      </form>
      {codeStep && (
        <div className='my-6'>
          <p className='text-[#444343] text-sm mb-3'>
            Enter the code sent on your number
          </p>
          <div className='flex items-center '>
            <label className='w-[130px] bg-[#F2F4F6] h-[50px] relative'>
              <input
                max={4}
                type='number'
                placeholder='0000'
                className='text-[#0C45B2] w-[80px] absolute inline-block h-[50px] left-0 right-0 m-auto px-[15px] outline-none bg-[#F2F4F6]'
              />
            </label>

            <div className='text-[#444343] text-sm ml-3 flex items-center'>
              Didn’t receive your code?{' '}
              <div className='w-fit ml-1 cursor-pointer'>
                <span className='text-[#0C45B2] font-bold navItems'>Retry</span>
                <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className='mb-10 text-sm mt-3 text-[#444343]'>
        Already a member?{' '}
        <div className='w-fit inline-block ml-1'>
          <Anchor href='/login' className='text-[#0C45B2] navItems'>
            Sign In
          </Anchor>
          <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
        </div>
      </div>
    </>
  );
};

const DefaultSignup = () => {
  const schema = yup
    .object({
      fullName: yup
        .string()
        .min(5, 'Full name is too short')
        .required('Full name is required!'),
      email: yup.string().email('Invalid Email').required('Email is required!'),
      newPassword: yup
        .string()
        .min(3, 'Password must be at least 8 characters')
        .required('Password is required!'),
      confirmPassword: yup
        .string()
        .min(3, 'Password must be at least 8 characters')
        .oneOf([yup.ref('newPassword'), null], 'Password must match')
        .required('Confirm password is required!'),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(schema),
  });

  const router = useRouter();

  const { signIn, signUp } = useUser();
  const [processing, setProcessing] = useState<boolean>(false);
  const [error, setError] = useState<string>('');

  const handleSignup = (values: ISignup) => {
    console.log('in handle signup', values);
    try {
      //call signup API
      setProcessing(true);
      console.log('processing');
      setTimeout(() => {
        signUp(values);
        setProcessing(false);
        router.push('/');
      }, 3000);
    } catch (err) {
      setError('API Error');
    } finally {
      // setProcessing(false);
    }
  };

  console.log('set processing', processing);

  return (
    <form onSubmit={handleSubmit(handleSignup)}>
      <TextField
        placeholder='Enter full name'
        id='fullName'
        title='Fullname'
        type='text'
        required
        error={errors.fullName?.message}
        register={register}
      />
      <TextField
        placeholder='Enter email'
        id='email'
        title='Email'
        type='text'
        required
        error={errors.email?.message}
        register={register}
      />
      <TextField
        placeholder='Enter password'
        id='newPassword'
        title='Password'
        type='password'
        required
        toggleVisibility
        error={errors.newPassword?.message}
        register={register}
      />
      <TextField
        placeholder='Confirm password'
        id='confirmPassword'
        title='Confirm Password'
        type='password'
        required
        toggleVisibility
        error={errors.confirmPassword?.message}
        register={register}
      />

      <button className='font-bold text-white rounded-lg h-12 w-52 bg-[#3C9E00] hover:bg-[#2C7400] transition-all duration-300'>
        {processing ? (
          <FiLoader className='text-xl animate-spin mx-auto' />
        ) : (
          <span>Sign up</span>
        )}
      </button>

      <div className='text-sm mt-3 text-[#444343] flex'>
        Already a member?{' '}
        <div className='w-fit ml-1'>
          <Anchor href='/login' className='text-[#0C45B2]  navItems'>
            Sign In
          </Anchor>
          <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
        </div>
      </div>
    </form>
  );
};

// bg-gradient-to-r from-[#3C9E00] to-[#2C7400]
