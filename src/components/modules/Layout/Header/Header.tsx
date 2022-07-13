import { Anchor, Logo } from "@/components/modules";
import Link from "next/link";

const Header = () => {
  const links = [
    { title: "Find New Cars", href: "/new-cars" },
    { title: "Find Used Cars", href: "/used-cars" },
    { title: "Sell Your Car", href: "/sell-your-car" },
    { title: "Blog", href: "/blogs" },
  ];
  return (
    <nav className='flex fixed top-0 h-[95px] bg-[#0000009C] px-24 py-6 items-center justify-between w-full z-20'>
      <div className='flex-1 flex gap-x-8'>
        {links.map((link, index) => (
          <NavItems href={link.href} text={link.title} />
        ))}
      </div>
      <div className='flex-0.5'>
        <Logo />
      </div>
      <div className='text-white grow text-end flex-1'>
        <span className='text-[14px]'>Welcome Yusra</span>
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
