import { yupResolver } from '@hookform/resolvers/yup';
import { FC, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import { FiUpload, FiX } from 'react-icons/fi';
import { PagesWizard, WizardSchema, wizardSchema } from 'schemas/wizard.schema';
import { STATUS } from 'types/general.types';

import BodyWizard from './BodyWizard';
import HeaderWizard from './HeaderWizard';
import AdditionalInformation from './PagesWizard/AdditionalInformation';
import BasicInformation from './PagesWizard/BasicInformation';
import UploadPictures from './PagesWizard/UploadPictures';
import VerifyNumber from './PagesWizard/VerifyNumber';
import PreviewAd from './PreviewAd/PreviewAd';
import StatusWizard from './StatusWizard';

const WizardPostAd = () => {
  //Form Initialization
  const methods = useForm<WizardSchema>({
    resolver: yupResolver(wizardSchema),
    defaultValues: {
      uploadPictures: {
        files: [],
      },
      additionalInformation: {
        features: [],
      },
    },
  });

  //Wizard pages Initilization
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
  ];

  //State Initialization
  const [formState, setFormState] = useState<{
    status: STATUS;
    data?: {
      title: string;
      subtitle: string;
      Icon?: JSX.Element;
    };
  }>({
    status: STATUS.idle,
    data: {
      title: '',
      subtitle: '',
    },
  });
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [formData, setFormData] = useState<WizardSchema | undefined>();

  const formSubmit = (values: WizardSchema) => {
    //call API FOR SEND DETAILS
    if (activeIndex !== pages.length)
      try {
        setFormState({
          status: STATUS.loading,
          data: {
            title: "We're processing your information",
            subtitle: 'Sit tight while we process your request.',
            Icon: <FiUpload className='animate-bounce text-2xl' />,
          },
        });
        setTimeout(() => {
          setActiveIndex(activeIndex + 1);
          setFormState({
            status: STATUS.idle,
          });
        }, 5000);
        setFormData(values);
      } catch (err) {
        setFormState({
          status: STATUS.error,
          data: {
            title: 'There was an error in verifying your code',
            subtitle: 'Errorr...',
            Icon: (
              <FiX className=' text-5xl sm:text-7xl text-amber-900   animate-pulse ' />
            ),
          },
        });
      }
  };
  const handleIncrement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: 'smooth' });
    setActiveIndex(activeIndex + 1);
  };
  const handleDrecement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: 'smooth' });
    setActiveIndex(activeIndex ? activeIndex - 1 : 0);
  };

  return (
    <div className='max-w-6xl min-h-[350px] mx-auto py-10 px-5'>
      {formState.status === STATUS.preview ? (
        <PreviewAd previewData={formData} />
      ) : (
        <>
          <HeaderWizard activeIndex={activeIndex} />
          <div className='bg-white max-w-4xl mx-auto rounded-lg shadow-[0px_4px_4px_0_rgb(0,0,0,0.25)] my-4 '>
            {formState.status === STATUS.idle ? (
              activeIndex !== pages.length ? (
                <FormProvider {...methods}>
                  <form onSubmit={(e) => e.preventDefault()}>
                    <BodyWizard
                      pages={pages}
                      activeIndex={activeIndex}
                      increment={handleIncrement}
                      decrement={handleDrecement}
                      formSubmit={formSubmit}
                    />
                  </form>
                </FormProvider>
              ) : (
                <VerifyNumber setFormState={setFormState} />
              )
            ) : (
              <StatusWizard formState={formState} />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default WizardPostAd;
