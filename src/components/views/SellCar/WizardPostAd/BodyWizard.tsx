import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import { PagesWizard, WizardSchema } from 'schemas/wizard.schema';

interface IBodyWizard {
  increment: () => void;
  decrement: () => void;
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
}: IBodyWizard) => {
  const { Component, id, label, subtitle, title } = pages[activeIndex];
  const { handleSubmit, trigger, getValues } = useFormContext<WizardSchema>();

  // const onSubmit = (values: WizardSchema) => {
  //   console.log('Values', values);
  // };

  const formSubmit = (values: WizardSchema) => {
    console.log('values', values);
  };

  const handleNextPage = async () => {
    let clear;
    if (pages[activeIndex].id === 'uploadPicture') {
      clear = await trigger('uploadPictures.files');
      console.log('clear', clear);
    } else {
      clear = await trigger(pages[activeIndex].id as any);
    }
    if (activeIndex < pages.length - 1 && clear) increment();
  };
  return (
    <div className='bg-white max-w-4xl mx-auto rounded-lg shadow-[0px_4px_4px_0_rgb(0,0,0,0.25)] my-4'>
      {activeIndex ? (
        <div
          onClick={() => activeIndex !== 0 && decrement()}
          className='px-10 pt-4 flex items-center group cursor-pointer'
        >
          <AiOutlineArrowLeft className='mr-2 group-hover:translate-x-[-8px] transition-all ease-in-out duration-[.15s]' />{' '}
          {pages[activeIndex - 1].label}
        </div>
      ) : (
        <></>
      )}
      <div className='p-10'>
        <Component handleNextPage={handleNextPage} />
      </div>
    </div>
  );
};

export default BodyWizard;
