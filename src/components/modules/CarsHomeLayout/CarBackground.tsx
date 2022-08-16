const CarBackground = ({
  title,
  subtitle,
}: {
  title: string;
  subtitle: string;
}) => {
  return (
    <div className='findCars-background min-h-[500px] relative flex justify-center'>
      <div className='absolute top-24 h-full  font-extrabold text-center px-5 space-y-6 '>
        <h2 className=' text-white  text-3xl sm:text-5xl'>{title}</h2>
        <h2 className=' text-white text-3xl sm:text-5xl'>{subtitle}</h2>
      </div>
    </div>
  );
};

export default CarBackground;
