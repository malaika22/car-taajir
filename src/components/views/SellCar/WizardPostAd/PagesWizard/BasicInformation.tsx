import { useFormContext } from 'react-hook-form';
import { WizardSchema } from 'schemas/wizard.schema';
import { wizardConstants } from 'utils/constant';

import { Select, TextField } from '@/modules';

const BasicInformation = ({ handleNextPage }: { handleNextPage: any }) => {
  const {
    formState: { errors },
    register,
    control,
  } = useFormContext<WizardSchema>();

  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-xl text-[#444343] font-bold'>Basic Information</h2>
        <p className='text-[#444343] text-sm'>
          All fields marked with <span className='text-[#F6000F]'>*</span> are
          mandatory
        </p>
      </div>
      <div className='max-w-sm'>
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
        <TextField
          register={register}
          id='basicInformation.milage'
          placeholder='Kilometer'
          title='Milage (Km)'
          type='text'
          error={errors.basicInformation?.milage?.message}
          required
        />
        <TextField
          register={register}
          id='basicInformation.price'
          placeholder='PKR'
          title='Price'
          type='text'
          error={errors.basicInformation?.price?.message}
          required
        />
        <TextField
          register={register}
          id='basicInformation.description'
          placeholder='Describe your car.
Example: Alloy rims, First owner, Genuine conditions, maintained by authorized workshop...etc.'
          title='Description'
          type='text'
          error={errors.basicInformation?.description?.message}
          required
        />
      </div>

      <button onClick={handleNextPage}>Continue</button>
    </div>
  );
};

export default BasicInformation;
