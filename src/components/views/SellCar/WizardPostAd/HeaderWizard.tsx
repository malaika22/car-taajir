import Image from 'next/image';

const HeaderWizard = ({ activeIndex }: { activeIndex: number }) => {
  return (
    <div>
      <h2 className='text-2xl font-bold '>Sell Your Car</h2>
      <div className='h-10 max-w-5xl mx-auto relative flex flex-col justify-center mt-5'>
        <div className='h-[6px] bg-[#C4C4C4] rounded-md'></div>
        <div
          className={`h-[6px] rounded-md absolute  transition-all duration-300 ease-in-out bg-[#54D406] w-0  ${
            activeIndex === 1
              ? 'w-[50%]'
              : activeIndex === 2
              ? 'w-[75%]'
              : activeIndex === 3 && 'w-[100%]'
          }`}
        >
          <div className='h-6 w-10 absolute top-[-6px] right-[-20px] sm:right-[-30px]'>
            <Image src='/images/wizardCar.png' layout='fill' alt='Wizard car' />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderWizard;
