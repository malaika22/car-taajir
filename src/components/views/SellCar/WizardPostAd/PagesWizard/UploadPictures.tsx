import Image from 'next/image';
import { useState } from 'react';
import { Controller, useFieldArray, useFormContext } from 'react-hook-form';
import { AiFillDelete, AiFillEdit } from 'react-icons/ai';
import ImageUploading from 'react-images-uploading';
import { WizardSchema } from 'schemas/wizard.schema';
const UploadPictures = ({ handleNextPage }: { handleNextPage: any }) => {
  const {
    formState: { errors },
    control,
    register,
  } = useFormContext<WizardSchema>();
  const { fields, replace, remove } = useFieldArray({
    control,
    name: 'uploadPictures.files',
  });

  const [images, setImages] = useState([]);
  const maxNumber = 69;

  const onChange = (imageList: any, addUpdateIndex: any) => {
    // data for submit

    replace(imageList);
    setImages(imageList);
    // setValue('uploadPictures.files', imageList);
  };
  return (
    <div className='text-center'>
      <h2 className='text-2xl text-[#444343] font-bold '>Upload Pictures</h2>
      <div className='max-w-lg mx-auto py-10'>
        <ul className='list-disc list-inside text-[#444343]'>
          <li className='mb-3'>
            Adding at least 8 pictures improves the chances for a quick sale.
          </li>
          <li className='ml-[5px] mb-3'>
            Adding clear Front, Back and Interior pictures of your car increases
            the quality of your Ad and gets you noticed more.
          </li>
          <li className='ml-[13px] mb-3'>
            Photos should be in &apos;jpeg, jpg, png, gif&apos; format only.
          </li>
        </ul>
        <Controller
          name='uploadPictures.files'
          control={control}
          render={({ field }) => (
            <ImageUploading
              {...field}
              multiple
              {...register('uploadPictures.files')}
              value={fields}
              onChange={onChange}
              maxNumber={maxNumber}
              dataURLKey='data_url'
            >
              {({ onImageUpload, onImageUpdate, isDragging, dragProps }) => (
                // write your building UI
                <div className='upload__image-wrapper'>
                  <button
                    className='bg-[#F2F4F6] flex items-center h-20 w-64 rounded-lg text-center mx-auto justify-center font-bold'
                    style={isDragging ? { color: 'red' } : undefined}
                    onClick={onImageUpload}
                    {...dragProps}
                  >
                    <img src='/images/icons/upload.png' className='mr-3' />{' '}
                    Click or Drop here
                  </button>
                  &nbsp;
                  <div className='flex flex-col sm:flex-row items-center gap-x-4'>
                    {fields.map((image, index) => (
                      <div key={image.id}>
                        <div className='text-end justify-end flex gap-x-2'>
                          <button onClick={() => onImageUpdate(index)}>
                            <AiFillEdit />
                          </button>
                          <button onClick={() => remove(index)}>
                            <AiFillDelete />
                          </button>
                        </div>
                        <div className='image-item w-44 h-32 relative'>
                          <Image src={image['data_url']} layout='fill' />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </ImageUploading>
          )}
        />
        {errors.uploadPictures?.files?.message && (
          <span className='text-[#F6000F] text-sm'>
            {errors.uploadPictures?.files?.message}
          </span>
        )}
      </div>
      <button
        onClick={handleNextPage}
        className='bg-gradient-to-r h-12 w-44 from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg'
      >
        Continue
      </button>
    </div>
  );
};

export default UploadPictures;
