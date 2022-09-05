import Link from 'next/link';
import { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';

import Anchor from '@/modules/Anchor/Anchor';

interface ISnackbarProps {
  links: {
    title: string;
    href: string;
  }[];
}

const Snackbar = ({ links }: ISnackbarProps) => {
  const [open, setOpen] = useState(false);

  const toggleOpen = (): void => {
    setOpen(!open);
  };
  return (
    <div className='lg:hidden  block text-white text-lg relative'>
      <div className='p-2 cursor-pointer  hover:bg-white/10 rounded-md flex items-center justify-center '>
        {open ? (
          <FiX onClick={toggleOpen} className='z-20' />
        ) : (
          <FiMenu onClick={toggleOpen} />
        )}
      </div>

      {open && (
        <div className='fixed top-0 left-0 h-screen w-full  flex flex-col   items-center justify-center  gap-6 bg-black  '>
          {links.map((link) => (
            <Link href={link.href} key={link.href}>
              <a
                className='text-gray-300/90  hover:text-white border-b-2 border-transparent hover:border-inherit transition-colors'
                onClick={toggleOpen}
              >
                {link.title}
              </a>
            </Link>
          ))}

          <Anchor href='#' className='text-[#EF6212]'>
            Post an Ad
          </Anchor>
        </div>
      )}
    </div>
  );
};

export default Snackbar;
