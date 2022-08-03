import { DetailedHTMLProps, TextareaHTMLAttributes } from 'react';
import { UseFormRegister } from 'react-hook-form';

interface ITextAreaProps
  extends DetailedHTMLProps<
    TextareaHTMLAttributes<HTMLTextAreaElement>,
    HTMLTextAreaElement
  > {
  placeholder: string;
  register?: UseFormRegister<any>;
  id: string;
  title: string;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value?: string;
}

const TextArea = ({
  id,
  placeholder,
  title,
  disabled,
  error,
  register,
  required,
  value,
  ...props
}: ITextAreaProps) => {
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
        {register ? (
          <textarea
            {...register(id)}
            placeholder={placeholder}
            disabled={disabled}
            className='$ bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]'
            id={id}
            {...props}
          />
        ) : (
          <textarea
            value={value}
            className={` bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]`}
            id={id}
            {...props}
          />
        )}

        {error && <div className='text-[#F6000F] text-sm'>{error}</div>}
      </div>
    </div>
  );
};

export default TextArea;
