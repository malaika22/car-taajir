import { useFormContext } from 'react-hook-form';
import { WizardSchema } from 'schemas/wizard.schema';
import { wizardConstants } from 'utils/constant';

import { Select, TextArea, TextField } from '@/modules';

const BasicInformation = ({ handleNextPage }: { handleNextPage: any }) => {
  const {
    formState: { errors },
    register,
  } = useFormContext<WizardSchema>();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl text-[#444343] font-bold'>Basic Information</h2>
        <p className='text-[#444343] text-sm'>
          All fields marked with <span className='text-[#F6000F]'>*</span> are
          mandatory
        </p>
      </div>
      <div className='py-10'>
        <div className='max-w-sm mb-2'>
          <Select
            id='basicInformation.city'
            options={wizardConstants.cities.map((item, index) => ({
              title: item,
              value: item,
              checked: index === 0,
            }))}
            register={register}
            title='City'
            required
            error={errors.basicInformation?.city?.message}
          />
        </div>
        <div className='max-w-sm mb-2'>
          <Select
            id='basicInformation.registeredIn'
            options={wizardConstants.resgisteredCities.map((item, index) => ({
              title: item,
              value: item,
              checked: index === 0,
            }))}
            register={register}
            title='Registered In'
          />
        </div>
        <div className='max-w-sm mb-2'>
          <Select
            id='basicInformation.exteriorColor'
            options={wizardConstants.exteriorColors.map((item, index) => ({
              title: item,
              value: item,
              checked: index === 0,
            }))}
            register={register}
            required
            title='Exterior Color'
            error={errors.basicInformation?.city?.message}
          />
        </div>
        <div className='max-w-sm mb-2'>
          <TextField
            register={register}
            id='basicInformation.milage'
            placeholder='Kilometer'
            title='Milage (Km)'
            type='text'
            error={errors.basicInformation?.milage?.message}
            required
          />
        </div>
        <div className='max-w-sm mb-2'>
          <TextField
            register={register}
            id='basicInformation.price'
            placeholder='PKR'
            title='Price'
            type='text'
            error={errors.basicInformation?.price?.message}
            required
          />
        </div>

        <TextArea
          register={register}
          id='basicInformation.description'
          placeholder='Describe your car.
          Example: Alloy rims, First owner, Genuine conditions, maintained by authorized workshop...etc.'
          title='Description'
          error={errors.basicInformation?.description?.message}
          required
          rows={8}
        />
      </div>
      <div className='text-end'>
        <button
          onClick={handleNextPage}
          className='bg-gradient-to-r h-12 w-44 from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg'
        >
          Continue
        </button>
      </div>
    </div>
  );
};

export default BasicInformation;
