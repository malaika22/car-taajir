import Image from 'next/image';

interface IBlogBannerProps {
  blog: {
    title: string;
    id: number;
    createdAt: string;
    shortDescription: string;
    blogContent: string;
    mainImage: string;
  };
}

const BlogBanner = ({ blog }: IBlogBannerProps) => {
  return (
    <div className='bg-white grid grid-cols-1 md:grid-cols-5 rounded-lg min-h-[300px] ring-1 ring-offset-2 ring-slate-50'>
      <div className='min-h-[200px] top-0 relative md:col-span-2 rounded-lg my-6 mx-6 md:ml-6 '>
        <Image
          src={blog.mainImage}
          alt={blog.title}
          layout='fill'
          className='rounded-tl-lg md:rounded-bl-lg rounded-lg'
        />
      </div>
      <div className='md:col-span-3 mx-10 py-10 px-0 md:p-10'>
        <div className='text-[#EF6212] font-bold text-sm text-end'>
          {blog.createdAt}
        </div>
        <h2 className='text-2xl font-bold my-3 text-center'>{blog.title}</h2>
        <div className='text-[#444343] font-semibold text-sm text-center'>
          {blog.shortDescription}
        </div>
      </div>
    </div>
  );
};

export default BlogBanner;
