import { ASSETS } from "@/utils/constant";
import Image from "next/image";
import Link from "next/link";

const Logo = () => {
  return (
    <div className='relative h-[60px] w-[60px] mx-auto'>
      <Link href='/' className=''>
        <a>
          <Image
            src={ASSETS.LOGO}
            priority={true}
            layout='fill'
            objectFit='contain'
            alt='Car Taajir Logo'
            title='Car Taajir'
          />
        </a>
      </Link>
    </div>
  );
};

export default Logo;
