import { Controller } from 'react-hook-form';
import Input from 'react-phone-number-input/input';

interface IPhoneNumberProps {
  placeholder: string;
  id: string;
  title: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  control?: any;
}

const PhoneNumberInput = ({
  placeholder,
  id,
  title,
  disabled,
  error,
  required,
  control,
}: IPhoneNumberProps) => {
  return (
    <div className='min-h-[80px]'>
      <div className='w-full relative'>
        <label
          htmlFor={id}
          className='absolute top-[-10px] px-[5px] left-[20px] text-[#8B8B8B] bg-white z-10 text-sm'
        >
          {title}
          {required && <span className='text-[#F6000F]'>*</span>}
        </label>

        <Controller
          render={({ field }) => (
            <Input
              {...field}
              placeholder={placeholder}
              disabled={disabled}
              className={` bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]`}
            />
          )}
          name={id}
          control={control}
        />
        {error && <div className='text-[#F6000F] text-sm'>{error}</div>}
      </div>
    </div>
  );
};

export default PhoneNumberInput;
