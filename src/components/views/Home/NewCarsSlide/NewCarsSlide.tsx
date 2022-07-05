import { Anchor } from "@/components/modules";
import Image from "next/image";

const NewCarsSlide = () => {
  return (
    <div className='w-[650px]  mx-auto'>
      <div className='w-[300px] h-[200px] relative mx-auto mt-7'>
        <Image
          src={"/images/landingPage/homeCarousel/newCars.png"}
          layout='fill'
          objectFit='contain'
        />
      </div>
      <div className='text-white text-center'>
        <h2 className='font-bold text-[60px] carousel-text'>
          Buy Your Dream Car
        </h2>
        <p className='text-sm my-8 mt-3'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Arcu tempor
          amet tincidunt nunc quam. Quam massa consectetur enim, justo sapien.
          Lectus eu diam orci augue arcu ante in enim penatibus. Egestas egestas
          arcu fames sit justo, sed aliquet auctor.
        </p>
        <Anchor
          href='/new-cars'
          className='inline-block bg-gradient-to-r from-[#F62C00] to-[#A71E00] rounded-xl px-9 py-4'
        >
          Browser New Cars
        </Anchor>
      </div>
    </div>
  );
};

export default NewCarsSlide;
