import { useState } from "react";
import { UseFormRegister } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
interface ITextFieldProps {
  placeholder: string;
  register?: UseFormRegister<any>;
  id: string;
  title: string;
  type: string;
  toggleVisibility?: boolean;
  disabled?: boolean;
  required?: boolean;
  error?: string;
  value?: string;
}

const TextField = ({
  placeholder,
  id,
  title,
  disabled,
  register,
  value,
  required,
  error,
  toggleVisibility,
  type = "text",
}: ITextFieldProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div className='min-h-[80px]'>
      <div className='w-full relative'>
        <label
          htmlFor={id}
          className='absolute top-[-10px] px-[5px] left-[20px] text-[#8B8B8B] bg-white z-50 text-sm'
        >
          {title}
          {required && <span className='text-[#F6000F]'>*</span>}
        </label>
        {register ? (
          <input
            {...register(id)}
            placeholder={placeholder}
            disabled={disabled}
            type={type === "password" && visibility ? "password" : "text"}
            className={`${
              toggleVisibility && "pr-10"
            } bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]`}
            id={id}
          />
        ) : (
          <input
            value={value}
            type={type}
            className={`${
              toggleVisibility && "pr-10"
            } bg-white relative p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]`}
            id={id}
          />
        )}

        {type === "password" && toggleVisibility && (
          <div className='absolute top-0 right-0'>
            <button
              type='button'
              tabIndex={-1}
              className='text-lg m-2 p-2 bg-transparent text-slate-400 hover:shadow-none hover:bg-slate-100 rounded-full transition-all duration-300 ease-in-out'
              onClick={() => setVisibility(!visibility)}
            >
              {visibility ? <FiEyeOff /> : <FiEye />}
            </button>
          </div>
        )}
        {error && <div className='text-[#F6000F] text-sm'>{error}</div>}
      </div>
    </div>
  );
};

export default TextField;
