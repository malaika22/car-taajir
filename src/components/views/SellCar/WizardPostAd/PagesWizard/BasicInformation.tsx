import Select from '@/components/modules/FormUtils/Select';
import { wizardConstants } from '@/utils/constant';

const BasicInformation = () => {
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
          title='City'
          required
        />
      </div>
    </div>
  );
};

export default BasicInformation;
