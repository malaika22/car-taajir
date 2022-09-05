import Link from 'next/link';
import {
  AiFillFacebook,
  AiFillInstagram,
  AiOutlineWhatsApp,
} from 'react-icons/ai';

import Logo from '../../Logo';

interface IFooter {
  category: string;
  links: {
    title: string;
    link: string;
  }[];
}

const Footer = () => {
  const footerLinks = [
    {
      category: 'Shop',
      links: [
        {
          title: 'Browser by Category',
          link: '#',
        },
        {
          title: 'View All Inventory',
          link: '#',
        },
        {
          title: 'Find New Car',
          link: '#',
        },
        {
          title: 'Find Used Car',
          link: '#',
        },
      ],
    },
    {
      category: 'Sell/Trade',
      links: [
        {
          title: 'Post an Ad',
          link: '#',
        },
      ],
    },
    {
      category: 'About',
      links: [
        {
          title: 'About Car Taajir',
          link: '#',
        },
        {
          title: 'Contact Us',
          link: '#',
        },
      ],
    },
    {
      category: 'More ',
      links: [
        {
          title: 'Service',
          link: '#',
        },
        {
          title: 'FAQs & Support',
          link: '#',
        },
      ],
    },
  ];
  return (
    <div className='bg-black py-7'>
      <Logo />

      <div className='grid grid-cols-2 sm:grid-cols-5 max-w-7xl mx-auto px-6  gap-x-3 sm:gap-x-0 text-sm sm:text-lg  mt-8 sm:px-10'>
        {footerLinks.map((footerObj: IFooter) => (
          <div key={footerObj.category} className='my-5 sm:my-0 '>
            <div className='text-white font-bold mb-4'>
              {footerObj.category}
            </div>
            {footerObj.links.map((link) => (
              <>
                <div className='w-fit navItems '>
                  <Link href={link.link}>
                    <a
                      className='navItems text-white mb-1 text-sm font-light'
                      href={link.link}
                    >
                      {link.title}
                    </a>
                  </Link>
                  <div className='borderAnimation h-[1px] w-0 bg-primary transition-all duration-300'></div>
                </div>
              </>
            ))}
          </div>
        ))}
        <div className='text-center col-span-2 sm:col-span-1 my-6 sm:my-0'>
          <div className='text-white font-bold mb-4'>Follow Us On</div>
          <div className='grid grid-cols-3 gap-x-3'>
            {/* <div className='relative w-7 h-7 mx-auto'> */}
            <AiFillInstagram className='text-white mx-auto text-3xl' />
            {/* </div> */}
            {/* <div className='relative w-7 h-7 mx-auto'> */}
            <AiOutlineWhatsApp className='text-white mx-auto text-3xl' />
            {/* </div> */}
            {/* <div className='relative w-7 h-7 mx-auto'> */}
            <AiFillFacebook className='text-white mx-auto text-3xl' />
            {/* </div> */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
