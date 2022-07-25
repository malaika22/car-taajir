import Image from "next/image";

const HeaderWizard = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div>
      <h2>Sell Your Card</h2>
      <div className='h-10 w-full relative flex flex-col justify-center'>
        <div className='h-[6px] bg-[#C4C4C4] rounded-md'></div>
        <div
          className={`h-[6px] rounded-md absolute  transition-all duration-300 ease-in-out bg-[#54D406] w-0  ${
            activeIndex === 1
              ? "w-[50%]"
              : activeIndex === 2
              ? "w-[75%]"
              : activeIndex === 3 && "w-[100%]"
          }`}
        >
          <div className='h-5 w-5 absolute top-0 right-0'>
            <Image src={"/images/wizardCar.png"} layout='fill' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWizard;
