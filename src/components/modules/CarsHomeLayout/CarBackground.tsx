const CarBackground = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='findCars-background min-h-[500px] h-[500px] relative'>
      <div className='flex flex-col items-center justify-center h-full text-[45px] font-extrabold'>
        <h2 className=' text-white'>{title}</h2>
        <h2 className=' text-white'>{subtitle}</h2>
      </div>
    </div>
  );
};

export default CarBackground;
