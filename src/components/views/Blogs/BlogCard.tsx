import Image from 'next/image';

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
    <div className='bg-white p-4 rounded-lg ring-1 ring-offset-2 ring-slate-50'>
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
        <div className='h-[240px] textOverflow '>{blog.shortDescription}</div>
      </div>
    </div>
  );
};

export default BlogCard;
