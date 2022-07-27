import { PagesWizard } from '@/schemas/wizard.schema';
import { FC } from 'react';

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

  const handleNextPage = () => {
    if (activeIndex < pages.length - 1) increment();
  };
  return (
    <div className='bg-white max-w-4xl mx-auto rounded-lg shadow-[0px_4px_4px_0_rgb(0,0,0,0.25)] my-4'>
      {activeIndex ? (
        <div onClick={() => activeIndex !== 0 && decrement()}>Back</div>
      ) : (
        <></>
      )}
      <div className='p-10'>
        <Component />
      </div>

      {/* <div onClick={handleNextPage}>Continue</div> */}
    </div>
  );
};

export default BodyWizard;
