const VehicleInformation = ({ className }: { className?: string }) => {
  const vehicaleInformation = [
    {
      key: 'Registered In',
      value: 'Karachi',
    },
    {
      key: 'Ad Ref#',
      value: '6075160',
    },
    {
      key: 'Color',
      value: 'Black',
    },
    {
      key: 'Assembly',
      value: 'Local',
    },

    {
      key: 'Body Type',
      value: 'Sedan',
    },

    {
      key: 'Engine Capacity',
      value: '2000cc',
    },
  ];
  return (
    <div
      className={`border-[#D8D5D5] border-[2px] rounded-[25px] px-10 gap-x-3 py-5 my-10 ${className}`}
    >
      <h2 className='text-center font-bold text-lg'>VEHICLE INFORMATION</h2>
      <div className='grid grid-cols-3 mt-6 gap-y-4'>
        {vehicaleInformation.map((information) => (
          <div
            key={information.value}
            className='flex items-center justify-between w-[280px] '
          >
            <div className='text-[#5E5E5E] font-bold'>{information.key}</div>
            <div className='text-[#5E5E5E]'>{information.value}</div>
          </div>
        ))}
      </div>
      <div className='text-[#5E5E5E] text-end mt-6'>
        Last Updated: <span className='ml-4'>Apr 05,2022</span>
      </div>
    </div>
  );
};

export default VehicleInformation;
