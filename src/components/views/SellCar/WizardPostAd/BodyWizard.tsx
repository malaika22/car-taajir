import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PagesWizard, WizardSchema } from 'schemas/wizard.schema';

interface IBodyWizard {
  increment: () => void;
  decrement: () => void;
  formSubmit: (values: WizardSchema) => void;
  activeIndex: number;
  pages: {
    Component: FC<any>;
    title?: string;
    subtitle?: string;
    label: string;
    id: PagesWizard;
  }[];
}

const BodyWizard = ({
  increment,
  decrement,
  pages,
  activeIndex,
  formSubmit,
}: IBodyWizard) => {
  const { Component, id, label, subtitle, title } = pages[activeIndex];
  const { handleSubmit, trigger, getValues } = useFormContext<WizardSchema>();

  const handleNextPage = async () => {
    let clear;
    if (pages[activeIndex].id === 'uploadPicture') {
      clear = await trigger('uploadPictures.files');
    } else {
      clear = await trigger(pages[activeIndex].id as any);
    }
    if (activeIndex < pages.length - 1 && clear) increment();

    if (
      (clear && pages[activeIndex].id === 'additionalInformation') ||
      pages[activeIndex].id === 'verifyNumber'
    ) {
      handleSubmit(formSubmit)();
    }
  };

  return (
    <div>
      {activeIndex && activeIndex !== pages.length - 1 ? (
        <div
          onClick={() => activeIndex !== 0 && decrement()}
          className='px-4 sm:px-10 pt-4 flex items-center group cursor-pointer'
        >
          <AiOutlineArrowLeft className='mr-2 group-hover:translate-x-[-8px] transition-all ease-in-out duration-[.15s]' />{' '}
          {pages[activeIndex - 1].label}
        </div>
      ) : (
        <></>
      )}
      <div className='px-4 py-10 sm:p-10'>
        <Component handleNextPage={handleNextPage} />
      </div>
    </div>
  );
};

export default BodyWizard;
