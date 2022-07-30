import { UseFormRegister } from 'react-hook-form';

interface IUploadImage {
  id: string;
  title: string;
  register: UseFormRegister<any>;
  error?: string;
  name?: string;
}

const UploadImage = ({ id, title, register, error, name }: IUploadImage) => {
  return (
    <div className='min-h-[80px]'>
      <div className='w-full relative'>
        <label
          htmlFor={name}
          className='absolute top-[-10px] px-[5px] left-[20px] text-[#8B8B8B] bg-white z-50 text-sm'
        >
          {title}
        </label>
        <input type='file' multiple {...register(id)} />

        {error && <div className='text-[#F6000F] text-sm'>{error}</div>}
      </div>
    </div>
  );
};

export default UploadImage;
