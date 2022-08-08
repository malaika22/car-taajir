import Image from 'next/image';

const Features = ({ className }: { className?: string }) => {
  const features = [
    {
      icon: '/images/previewMock/icons/features/brake-discs.png',
      feature: 'ABS',
    },
    {
      icon: '/images/previewMock/icons/features/air-conditioner.png',
      feature: 'Air Conditioning',
    },
    {
      icon: '/images/previewMock/icons/features/key.png',
      feature: 'Immobilizer Key',
    },
    {
      icon: '/images/previewMock/icons/features/car-door.png',
      feature: 'Power Locks',
    },
    {
      icon: '/images/previewMock/icons/features/lightning-bolt.png',
      feature: 'Power Windows',
    },
    {
      icon: '/images/previewMock/icons/features/steering-wheel.png',
      feature: 'Power Steering',
    },
    {
      icon: '/images/previewMock/icons/features/radio-station.png',
      feature: 'AM/FM Radio',
    },
    {
      icon: '/images/previewMock/icons/features/wheel.png',
      feature: 'Alloy Rims',
    },
    {
      icon: '/images/previewMock/icons/features/car-door.png',
      feature: 'Keyless Entry',
    },
    {
      icon: '/images/previewMock/icons/features/air-bag.png',
      feature: 'Air Bags',
    },
    {
      icon: '/images/previewMock/icons/features/north-direction.png',
      feature: 'Navigation System',
    },
  ];
  return (
    <div
      className={`border-[#D8D5D5] border-[2px] rounded-[25px] px-10 gap-x-3 py-5 ${className}`}
    >
      <h2 className='text-center font-bold text-lg'>CAR FEATURES</h2>
      <div className='grid grid-cols-2 mt-6 gap-y-4 gap-x-10'>
        {features.map((feature) => (
          <div key={feature.feature} className='flex items-center'>
            <div className='relative w-6 h-6  mr-4'>
              <Image src={feature.icon} alt={feature.feature} layout='fill' />
            </div>
            <div className='text-[#5E5E5E] text-sm'>{feature.feature}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Features;
