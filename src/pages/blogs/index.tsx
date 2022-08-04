import { BlogBanner, BlogCard } from '@views';
import { blogs } from 'lib/dummyData';
import { NextPage } from 'next';

const BlogsPage: NextPage = () => {
  return (
    <div className='bg-[#E5E5E5]'>
      <div className='max-w-6xl min-h-[350px] mx-auto py-10'>
        <h2 className='text-2xl font-bold mb-5'>The Blogs</h2>
        <div className='mb-14'>
          <BlogBanner blog={blogs[0]} />
        </div>
        <div className='grid grid-cols-3 gap-9'>
          {blogs.map((blog, index) =>
            index ? <BlogCard blog={blog} /> : <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default BlogsPage;
