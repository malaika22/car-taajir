import Anchor from '../Anchor/Anchor';

interface IBreadCrumbsProps {
  pagesLinks: {
    title: string;
    href: string;
  }[];
}

const BreadCrumbs = ({ pagesLinks }: IBreadCrumbsProps) => {
  return (
    <div className='my-1'>
      {pagesLinks.map((link, index) => (
        <Anchor href={link.href} key={index} className='text-[#B5B5B5] text-sm'>
          {link.title}
          {index !== pagesLinks.length - 1 && <span className='mx-2'>/</span>}
        </Anchor>
      ))}
    </div>
  );
};

export default BreadCrumbs;
