import Image from 'next/image';

const Specifications = ({ className }: { className?: string }) => {
  const specifications = [
    {
      value: '92,000km',
      icon: '/images/previewMock/icons/specifications/speedometer.png',
    },
    {
      value: 'Petrol',
      icon: '/images/previewMock/icons/specifications/gas-station.png',
    },
    {
      value: 'Automatic',
      icon: '/images/previewMock/icons/specifications/gear-box.png',
    },
    {
      value: '2015',
      icon: '/images/previewMock/icons/specifications/sedan.png',
    },
    {
      value: 'Air bag',
      icon: '/images/previewMock/icons/specifications/air-bag.png',
    },
    {
      value: 'Power Steering',
      icon: '/images/previewMock/icons/specifications/steering-wheel.png',
    },
    {
      value: '2017',
      icon: '/images/previewMock/icons/specifications/calender.png',
    },
  ];
  return (
    <div
      className={`border-[#D8D5D5] border-[2px] rounded-[25px] py-10 px-3 sm:p-10 gap-x-3 my-10 ${className}`}
    >
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-7 gap-y-5'>
        {specifications.map((specification) => (
          <div key={specification.value} className='text-center'>
            <div className='relative w-14 h-10 sm:h-14 mx-auto'>
              <Image
                objectFit='contain'
                src={specification.icon}
                layout='fill'
                alt={specification.value}
              />
            </div>
            <span className='mt-2 inline-block font-bold  text-sm sm:text-md'>
              {specification.value}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Specifications;
