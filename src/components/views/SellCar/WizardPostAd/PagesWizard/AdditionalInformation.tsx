import { useFormContext } from 'react-hook-form';
import { WizardSchema } from 'schemas/wizard.schema';
import { wizardConstants } from 'utils/constant';

import { Select, TextField } from '@/modules';

const AdditionalInformation = ({ handleNextPage }: { handleNextPage: any }) => {
  const {
    register,
    formState: { errors },
  } = useFormContext<WizardSchema>();
  return (
    <div>
      <div className='flex flex-col sm:flex-row justify-between items-center'>
        <h2 className='text-2xl text-[#444343] font-bold'>
          Additional Information
        </h2>
        <p className='text-[#444343] text-sm'>
          All fields marked with <span className='text-[#F6000F]'>*</span> are
          mandatory
        </p>
      </div>
      <div className='py-10 flex flex-col sm:flex-row gap-x-10 items-start'>
        <div className='w-full sm:w-[40%]'>
          <div className='mb-3'>
            <Select
              id='additionalInformation.engineType'
              options={wizardConstants.engineType.map((type, index) => ({
                title: type,
                value: type,
                checked: index === 0,
              }))}
              title='Engine Type'
              required
              register={register}
              error={errors.additionalInformation?.engineType?.message}
            />
          </div>
          <div className='mb-3'>
            <TextField
              id='additionalInformation.engineCapacity'
              placeholder='1500cc'
              title='Engine Capacity (cc)'
              required
              error={errors.additionalInformation?.engineCapacity?.message}
              type='text'
              register={register}
            />
          </div>
          <div className='mb-3'>
            <Select
              id='additionalInformation.transmission'
              options={wizardConstants.transmission.map(
                (transmission, index) => ({
                  title: transmission,
                  value: transmission,
                  checked: index === 0,
                })
              )}
              register={register}
              error={errors.additionalInformation?.transmission?.message}
              title='Transmission'
              required
            />
          </div>
          <div className='mb-3'>
            <Select
              id='additionalInformation.assembly'
              options={wizardConstants.assembly.map((assembly, index) => ({
                title: assembly,
                value: assembly,
                checked: index === 0,
              }))}
              register={register}
              title='Assembly'
              required
            />
          </div>
        </div>
        <div className='w-full sm:w-[60%]'>
          <h2 className='text-[#444343] text-xl font-bold mb-6'>Features</h2>
          <div className='grid grid-cols-2 grid-rows-12'>
            {wizardConstants.features.map((feature) => (
              <div key={feature}>
                <input
                  className='hidden feature-check'
                  type='checkbox'
                  value={feature}
                  id={feature}
                  // name={feature}
                  {...register('additionalInformation.features')}
                />
                <label
                  htmlFor={feature}
                  className='flex items-center mb-2 cursor-pointer'
                >
                  <div className='w-[18px] h-[18px] relative border-2 flex items-center justify-center border-[#5E5E5E] border-solid rounded-full'>
                    <div className='w-[10px] h-[10px] checked-label  rounded-full'></div>
                  </div>
                  <span className='text-[#444343]  text-md ml-6'>
                    {feature}
                  </span>
                </label>
              </div>
            ))}
          </div>
          {errors.additionalInformation?.features?.message && (
            <div className='text-[#F6000F] text-sm'>
              {errors.additionalInformation?.features?.message}
            </div>
          )}
        </div>
      </div>
      <div className='text-end'>
        <button
          onClick={handleNextPage}
          className='h-12 w-44  bg-[#3C9E00] hover:bg-[#2C7400] transition-all duration-300 font-bold text-white rounded-lg'
        >
          Submit Ad
        </button>
      </div>
    </div>
  );
};

export default AdditionalInformation;

// from-[#3C9E00] to-[#2C7400] bg-gradient-to-r
