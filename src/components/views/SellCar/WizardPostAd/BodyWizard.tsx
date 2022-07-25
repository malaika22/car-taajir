import { PagesWizard } from "@/schemas/wizard.schema";
import { FC } from "react";

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
    <div>
      {activeIndex && (
        <div onClick={() => activeIndex !== 0 && decrement()}>Back</div>
      )}
      <Component />
      <div onClick={handleNextPage}>Continue</div>
    </div>
  );
};

export default BodyWizard;
