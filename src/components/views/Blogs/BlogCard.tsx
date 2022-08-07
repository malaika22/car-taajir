import Image from 'next/image';
import Link from 'next/link';
import { AiOutlineRight } from 'react-icons/ai';

interface IBlogCardProps {
  blog: {
    title: string;
    id: number;
    createdAt: string;
    shortDescription: string;
    blogContent: string;
    mainImage: string;
  };
}

const BlogCard = ({ blog }: IBlogCardProps) => {
  return (
    <div className='bg-white p-4 rounded-lg ring-1 ring-offset-2 ring-slate-50 hover:ring-[#EF6212] cursor-pointer'>
      <div className='w-full h-72 relative'>
        <Image
          src={blog.mainImage}
          alt={blog.title}
          layout='fill'
          className='rounded-tr-lg rounded-tl-lg'
        />
      </div>
      <div className='my-5'>
        <div className='text-[#EF6212] font-bold text-sm text-end'>
          {blog.createdAt}
        </div>

        <h2 className='text-lg font-bold my-4'>{blog.title}</h2>
        <div>{blog.shortDescription}</div>
      </div>
      <div className='text-[#EF6212] font-bold text-sm group cursor-pointer inline-block'>
        <Link href={`/blogs/${blog.id}`}>
          <div className='flex items-center'>
            Read article{' '}
            <AiOutlineRight className='mr-2 group-hover:translate-x-[8px] transition-all ease-in-out duration-[.15s]' />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default BlogCard;
