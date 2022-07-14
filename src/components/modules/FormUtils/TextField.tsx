import { useState } from "react";
import { UseFormRegister } from "react-hook-form";

interface ITextFieldProps {
  placeholder: string;
  register?: UseFormRegister<any>;
  id: string;
  title: string;
  type: string;
  toggleVisibility?: boolean;
  disabled?: boolean;
  error?: string;
  value?: string;
  optional?: boolean;
}

const TextField = ({
  placeholder,
  id,
  title,
  disabled,
  register,
  value,
  error,
  toggleVisibility,
  optional,
  type = "text",
}: ITextFieldProps) => {
  const [visibility, setVisibility] = useState(false);
  return (
    <div>
      <div className='w-full relative'>
        <label
          htmlFor={id}
          className='absolute top-[-12px] left-[20px] bg-white'
        >
          {title}
        </label>
        {register ? (
          <input
            {...register(id)}
            placeholder={placeholder}
            disabled={disabled}
            type={type === "password" && visibility ? "password" : "text"}
            className='bg-white p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]'
            id={id}
          />
        ) : (
          <input
            value={value}
            type={type}
            className='bg-white p-3 w-full transition-all ease-in-out duration-[.15s] border-[#B5B5B5] border-2 rounded-md focus-visible:outline-none focus:border-[#80bdff] focus:shadow-[0px_0px_0px_0.2rem_rgb(0,123,255,0.25)]'
            id={id}
          />
        )}
      </div>
    </div>
  );
};

export default TextField;
