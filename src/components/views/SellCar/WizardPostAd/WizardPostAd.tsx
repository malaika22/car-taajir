import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { PagesWizard, WizardSchema, wizardSchema } from 'schemas/wizard.schema';
import { STATUS } from 'types/general.types';

import BodyWizard from './BodyWizard';
import HeaderWizard from './HeaderWizard';
import AdditionalInformation from './PagesWizard/AdditionalInformation';
import BasicInformation from './PagesWizard/BasicInformation';
import UploadPictures from './PagesWizard/UploadPictures';
import VerifyNumber from './PagesWizard/VerifyNumber';

const WizardPostAd = () => {
  const methods = useForm<WizardSchema>({
    resolver: yupResolver(wizardSchema),
    defaultValues: {
      uploadPictures: {
        files: [],
      },
    },
  });
  const [formState, setFormState] = useState<{
    status: STATUS;
  }>({
    status: STATUS.idle,
  });

  const [activeIndex, setActiveIndex] = useState(0);

  const pages: {
    label: string;
    Component: FC<any>;
    title?: string;
    id: PagesWizard;
    subtitle?: string;
  }[] = [
    {
      label: 'Basic Information',
      id: 'basicInformation',
      Component: BasicInformation,
    },
    {
      label: 'Upload Pictures',
      id: 'uploadPicture',
      Component: UploadPictures,
    },
    {
      label: 'Additional Information',
      id: 'additionalInformation',
      Component: AdditionalInformation,
    },
    {
      label: 'Verify Your Number',
      id: 'verifyNumber',
      Component: VerifyNumber,
    },
  ];

  const handleIncrement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: 'smooth' });
    setActiveIndex(activeIndex + 1);
  };
  const handleDrecement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: 'smooth' });
    setActiveIndex(activeIndex ? activeIndex - 1 : 0);
  };
  return (
    <div className='max-w-6xl mx-auto py-10'>
      <FormProvider {...methods}>
        <form onSubmit={(e) => e.preventDefault()}>
          <HeaderWizard activeIndex={activeIndex} />
          <BodyWizard
            pages={pages}
            activeIndex={activeIndex}
            increment={handleIncrement}
            decrement={handleDrecement}
          />
        </form>
      </FormProvider>
    </div>
  );
};

export default WizardPostAd;
