import { UseFormRegister } from 'react-hook-form';
import { FiChevronDown } from 'react-icons/fi';
interface ITextFieldProps {
  // eslint-disable-next-line @typescript-eslint/ban-types
  register?: UseFormRegister<any> | (() => {});
  id: string;
  disabled?: boolean;
  title: string;
  required?: boolean;
  error?: string;
  options: { title: string; value: any; checked?: boolean }[];
}

const Select = ({
  id,
  options,
  title,
  disabled,
  error,
  register = () => ({}),
  required,
}: ITextFieldProps) => {
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
        <select
          {...register(id)}
          className='bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]'
        >
          {options.map((option) => (
            <option
              key={option.value}
              id={option.value}
              disabled={disabled}
              value={option.value}
              defaultChecked={option.checked}
            >
              {option.title}
            </option>
          ))}
        </select>
        <div className='absolute right-0 top-0 bottom-0 m-auto items-center flex pr-3'>
          <FiChevronDown className='text-[20px]' />
        </div>

        {error && <div className='text-[#F6000F] text-sm'>{error}</div>}
      </div>
    </div>
  );
};

export default Select;
