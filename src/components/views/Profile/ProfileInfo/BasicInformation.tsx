import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { BsFillPatchCheckFill } from 'react-icons/bs';
import * as yup from 'yup';

import { DateInput, Select, TextField } from '@/modules';

const gender = ['Male', 'Female', 'Other'];
const country = ['Pakistan', 'Canada', 'Whatever'];
const city = ['Karachi', 'Lahore', 'Islamabad'];

interface IProfile {
  fullname: string;
  username: string;
  email: string;
  gender: string;
  dateOfBirth: Date;
  country: string;
  city: string;
}

const BasicInformation = () => {
  const profileSchema = yup.object({
    fullname: yup
      .string()
      .min(5, 'Full name is too short')
      .required('Required!!'),
    gender: yup.string().oneOf(gender).required('Full name is required!'),
    dateOfBirth: yup.date().required('Date of birth is required!'),
    country: yup.string().oneOf(country).required('Country is required!'),
    city: yup.string().oneOf(city).required('City is required!'),
    username: yup
      .string()
      .min(5, 'Username is too short')
      .required('Username is required!'),
    email: yup.string().email('Invalid Email').required('Email is required!'),
  });
  const {
    formState: { errors },
    register,
  } = useForm<IProfile>({
    resolver: yupResolver(profileSchema),
  });
  return (
    <div className='pt-10'>
      <div className='text-xl font-bold'>Basic Information</div>
      <div className='mt-9 mb-4'>
        <div className='grid sm:grid-cols-3 gap-x-5'>
          <TextField
            id='fullname'
            placeholder='Enter full name'
            title='Fullname'
            type='text'
            error={errors.fullname?.message}
            register={register}
            required
          />
          <TextField
            title='Username'
            id='username'
            placeholder='Enter user name'
            type='text'
            error={errors.username?.message}
            register={register}
            required
          />
          <TextField
            title='Email'
            id='email'
            placeholder='Enter email'
            type='text'
            register={register}
            required
            error={errors.email?.message}
          />
        </div>
        <div className='sm:w-[349px]'>
          <Select
            id='gender'
            options={gender.map((gender, index) => ({
              title: gender,
              value: gender,
              checked: index === 0,
            }))}
            title='Gender'
            required
            error={errors.gender?.message}
            register={register}
          />
        </div>
        <div className='sm:w-[349px]'>
          <DateInput
            id='date'
            placeholder='Date of birth'
            title='Date of Birth'
            error={errors.dateOfBirth?.message}
            register={register}
            required
          />
        </div>
        <div className='sm:w-[349px]'>
          <Select
            options={country.map((country, index) => ({
              title: country,
              value: country,
              checked: index === 0,
            }))}
            id='country'
            title='Country'
            error={errors.country?.message}
            register={register}
            required
          />
        </div>
        <div className='sm:w-[349px]'>
          <Select
            options={city.map((city, index) => ({
              title: city,
              value: city,
              checked: index === 0,
            }))}
            id='city'
            title='City'
            error={errors.city?.message}
            register={register}
            required
          />
        </div>
      </div>
      <div>
        <div className='text-[#8B8B8B] font-bold mb-4'>Mobile Number</div>
        <div className='bg-[#F3F3F3] py-5  px-4 lg:px-8 pt-6 rounded-xl'>
          <div className='grid gap-y-6 sm:grid-cols-5'>
            <div className='text-center'>
              <div className='text-[#8B8B8B] font-bold mb-3 '>Number</div>
              <div className='text-[#8B8B8B] text-sm  md:text-base'>
                +92 300 000 0000
              </div>
            </div>
            <div className='text-center'>
              <div className='text-[#8B8B8B] font-bold mb-3 '>Status</div>
              <div className='text-[#8B8B8B] flex   justify-center items-start text-sm  md:text-base'>
                Verified{' '}
                <BsFillPatchCheckFill className='text-[#159954] mt-[4px] ml-2 text-sm  md:text-base' />
              </div>
            </div>

            <div className='text-center'>
              <div className='text-[#8B8B8B] font-bold mb-3 '>Remove</div>
              <div className='w-fit mx-auto'>
                <div className='text-[#F6000F] font-bold cursor-pointer text-sm  md:text-base navItems '>
                  Remove this number
                </div>
                <div className='borderAnimation h-[1px] w-0 bg-[#F6000F] transition-all duration-300'></div>
              </div>
            </div>
            <div className='text-center'>
              <div className='text-[#8B8B8B] font-bold mb-3 opacity-0 hidden sm:block'>
                ds
              </div>
              <div className='w-fit mx-auto'>
                <div className='text-[#0C45B2] font-bold cursor-pointer text-sm  md:text-base navItems'>
                  Save as Primary
                </div>
                <div className='borderAnimation h-[1px] w-0 bg-[#0C45B2] transition-all duration-300'></div>
              </div>
            </div>
            <div className='text-center'>
              <button className=' font-bold bg-[#3C9E00] hover:bg-[#2C7400]  transition-all duration-300 text-white rounded-lg h-12 text-sm  px-8 sm:px-0 sm:w-full  md:text-base'>
                Add Numbers
              </button>
            </div>
          </div>
        </div>
      </div>
      <button className=' mt-8 font-bold bg-[#2F69DA] hover:bg-[#0C45B2] transition-all duration-300  text-white rounded-lg h-12 w-52 '>
        Save Changes
      </button>
    </div>
  );
};

export default BasicInformation;

// bg-gradient-to-r from-[#3C9E00] to-[#2C7400]

// bg-gradient-to-r from-[#2F69DA] to-[#0C45B2]
