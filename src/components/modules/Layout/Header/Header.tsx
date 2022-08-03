import { Menu, Transition } from '@headlessui/react';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { Fragment } from 'react';
import { AiFillCaretDown } from 'react-icons/ai';

import { Anchor, Logo } from '@/modules';

const Header = () => {
  const { pathname } = useRouter();

  const links = [
    { title: 'Find New Cars', href: '/new-cars' },
    { title: 'Find Used Cars', href: '/used-cars' },
    { title: 'Sell Your Car', href: '/sell-your-car' },
    { title: 'Blog', href: '/blogs' },
  ];
  const optionalPaths = pathname === '/sell-your-car' || '/sign-up' || '/login';

  return (
    <nav
      className={`flex  h-[95px]  px-24 py-6 items-center justify-between w-full z-30 ${
        optionalPaths
          ? 'sticky top-0 bg-[#000000]'
          : 'fixed top-0 bg-[#0000009C]'
      } `}
    >
      <div className='flex-1 flex gap-x-8'>
        {links.map((link, index) => (
          <NavItems href={link.href} text={link.title} key={index} />
        ))}
      </div>
      <div className='flex-0.5'>
        <Logo />
      </div>
      <div className='text-white grow text-end flex-1'>
        <span className='text-[14px]'>
          <ProfileDropdown />
        </span>
        <Anchor
          href='post-ad'
          className='bg-gradient-to-r from-[#EF6212] to-[#D14B00] ml-6 text-[14px] rounded-md px-5 py-2'
        >
          Post an Ad
        </Anchor>
      </div>
    </nav>
  );
};

const NavItems = ({ href, text }: { href: string; text: string }) => {
  return (
    <div className='navItems'>
      <Link href={href}>
        <a className='text-white text-[14px] navItems'>{text}</a>
      </Link>
      <div className='borderAnimation h-[1px] w-0 bg-primary transition-all duration-300'></div>
    </div>
  );
};
export default Header;

const ProfileDropdown = () => {
  const router = useRouter();
  const handleRoute = () => {
    router.push('/profile');
  };
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex w-full justify-center rounded-md bg-black bg-opacity-20 px-4 py-2 text-sm font-medium text-white hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
          Welcome Yusra
          <AiFillCaretDown
            className='ml-2 -mr-1 h-5 w-5 text-violet-200 hover:text-violet-100'
            aria-hidden='true'
          />
        </Menu.Button>
        <Transition
          as={Fragment}
          enter='transition ease-out duration-100'
          enterFrom='transform opacity-0 scale-95'
          enterTo='transform opacity-100 scale-100'
          leave='transition ease-in duration-75'
          leaveFrom='transform opacity-100 scale-100'
          leaveTo='transform opacity-0 scale-95'
        >
          <Menu.Items className='absolute right-0 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <div className='px-1 py-1 '>
              <Menu.Item>
                {({ active }) => (
                  <button
                    className={`${
                      active ? 'bg-[#EF6212] text-white' : 'text-gray-900'
                    } group flex w-full items-center rounded-md px-2 py-2 text-sm`}
                    onClick={handleRoute}
                  >
                    Profile
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </div>
    </Menu>
  );
};
