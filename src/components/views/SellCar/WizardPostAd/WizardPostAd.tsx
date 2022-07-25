import { PagesWizard } from "@/schemas/wizard.schema";
import { STATUS } from "@/types/general.types";
import { FC, useState } from "react";
import BodyWizard from "./BodyWizard";
import HeaderWizard from "./HeaderWizard";

const BasicInformation = () => {
  return <div>Basic Info</div>;
};

const UploadInformation = () => {
  return <div>Upload Information</div>;
};

const AdditionalInformation = () => {
  return <div>Additional Information</div>;
};

const VerifyNumber = () => {
  return <div>Verify Number</div>;
};

const WizardPostAd = () => {
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
      label: "Basic Information",
      id: "basicInformation",
      Component: BasicInformation,
    },
    {
      label: "Upload Pictures",
      id: "uploadPicture",
      Component: UploadInformation,
    },
    {
      label: "Additional Information",
      id: "additionalInformation",
      Component: AdditionalInformation,
    },
    {
      label: "Verify Your Number",
      id: "verifyNumber",
      Component: VerifyNumber,
    },
  ];

  const handleIncrement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: "smooth" });
    setActiveIndex(activeIndex + 1);
  };
  const handleDrecement = () => {
    window.scrollTo({ left: 0, top: 80, behavior: "smooth" });
    setActiveIndex(activeIndex ? activeIndex - 1 : 0);
  };
  return (
    <div>
      <HeaderWizard activeIndex={activeIndex} />
      <BodyWizard
        pages={pages}
        activeIndex={activeIndex}
        increment={handleIncrement}
        decrement={handleDrecement}
      />
    </div>
  );
};

export default WizardPostAd;
