import Image from "next/image";

const FeaturedCars = () => {
  return (
    <div className="bg-[url('/images/findCars/featured-cars/featured-background.png')] bg-cover bg-no-repeat min-h-[570px] py-20">
      <h2 className='text-white text-2xl font-bold text-center mb-12'>
        Featured Used Cars For Sale
      </h2>
      <div className='flex max-w-5xl mx-auto gap-x-5'>
        <div className='grid grid-cols-2 flex-1'>
          <div className='w-full h-[150px] relative'>
            <Image
              src={"/images/findCars/featured-cars/featured-one.png"}
              layout='fill'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src={"/images/findCars/featured-cars/featured-two.png"}
              layout='fill'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src={"/images/findCars/featured-cars/featured-three.png"}
              layout='fill'
            />
          </div>
          <div className='w-full h-[150px] relative'>
            <Image
              src={"/images/findCars/featured-cars/featured-four.png"}
              layout='fill'
            />
          </div>
        </div>
        <div className='flex-1'>haha</div>
      </div>
    </div>
  );
};

export default FeaturedCars;
