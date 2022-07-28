import Image from 'next/image';
import Link from 'next/link';

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
      <div className='flex justify-between px-24 mt-6'>
        {footerLinks.map((footerObj: IFooter) => (
          <div key={footerObj.category}>
            <div className='text-white font-bold mb-4'>
              {footerObj.category}
            </div>
            {footerObj.links.map((link) => (
              <>
                <div className='w-fit navItems'>
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
        <div>
          <div className='text-white font-bold mb-4'>Follow Us On</div>
          <div className='grid grid-cols-3 gap-x-3'>
            <div className='relative w-7 h-7'>
              <Image src='/images/icons/insta.png' layout='fill' alt='Insta' />
            </div>
            <div className='relative w-7 h-7'>
              <Image src='/images/icons/phone.png' layout='fill' alt='Phone' />
            </div>
            <div className='relative w-7 h-7'>
              <Image src='/images/icons/fb.png' layout='fill' alt='Fb' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
