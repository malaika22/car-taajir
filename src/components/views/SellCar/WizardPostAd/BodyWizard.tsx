import { FC } from 'react';
import { useFormContext } from 'react-hook-form';
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
  const { handleSubmit, trigger } = useFormContext<WizardSchema>();

  // const onSubmit = (values: WizardSchema) => {
  //   console.log('Values', values);
  // };

  const formSubmit = (values: WizardSchema) => {
    console.log('values', values);
  };

  const handleNextPage = async () => {
    const clear = await trigger(pages[activeIndex].id as any);
    console.log('Clear', clear);
    if (activeIndex < pages.length - 1 && clear) increment();
  };
  return (
    <div className='bg-white max-w-4xl mx-auto rounded-lg shadow-[0px_4px_4px_0_rgb(0,0,0,0.25)] my-4'>
      {activeIndex ? (
        <div onClick={() => activeIndex !== 0 && decrement()}>Back</div>
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
