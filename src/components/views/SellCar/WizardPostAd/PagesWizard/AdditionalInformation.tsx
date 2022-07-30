import { useFormContext } from 'react-hook-form';
import { WizardSchema } from 'schemas/wizard.schema';
import { wizardConstants } from 'utils/constant';

import { Select, TextField } from '@/modules';

const AdditionalInformation = () => {
  const {
    watch,
    register,
    formState: { errors },
  } = useFormContext<WizardSchema>();
  return (
    <div>
      <div className='flex justify-between items-center'>
        <h2 className='text-2xl text-[#444343] font-bold'>
          Additional Information
        </h2>
        <p className='text-[#444343] text-sm'>
          All fields marked with <span className='text-[#F6000F]'>*</span> are
          mandatory
        </p>
      </div>
      <div className='py-10'>
        <div>
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
          <TextField
            id='additionalInformation.engineCapacity'
            placeholder='1500cc'
            title='Engine Capacity (cc)'
            required
            error={errors.additionalInformation?.engineCapacity?.message}
            type='text'
            register={register}
          />
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
          <Select
            id='additionalInformation.assembly'
            options={wizardConstants.assembly.map((assembly, index) => ({
              title: assembly,
              value: assembly,
              checked: index === 0,
            }))}
            title='Assembly'
            required
          />
        </div>
        <div>
          <h2 className='text-[#444343] text-xl'>Features</h2>
        </div>
      </div>
    </div>
  );
};

export default AdditionalInformation;
