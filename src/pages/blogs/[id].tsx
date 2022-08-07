import { BlogCard } from '@views';
import { blogs } from 'lib/dummyData';
import Image from 'next/image';

const BlogPage = () => {
  return (
    <div className='bg-[#E5E5E5] py-16'>
      <div className='max-w-6xl bg-white mx-auto p-12 rounded-lg ring-1 ring-offset-2 ring-slate-50'>
        <div className='text-gray-400 text-sm'>Updated on 6/6/2022</div>
        <div className='flex items-center mt-4'>
          <div className='relative h-14 w-14 mr-5'>
            <Image
              src='/images/adMock/messageAvatar.png'
              alt='Blog author'
              layout='fill'
            />
          </div>
          <div className='font-bold'>Jackson Author</div>
        </div>
        <h2 className='text-2xl font-bold my-10'>
          The Future of Data Protection Management
        </h2>
        <div className='w-full h-[500px] relative'>
          <Image
            src='/images/blogs/blogCover.jpg'
            alt='Blog'
            layout='fill'
            objectFit='contain'
          />
        </div>
        <div className='text-[#939393] mt-14'>
          It is almost a miracle that &quot;data protection&quot; has not yet
          been declared the no-go word of the year among entrepreneurs. Most
          people think at first of the &quot;GDPR&quot;, effort, costs and
          frighteningly high fines.{' '}
          <h2 className='text-xl font-bold text-black my-4'>
            The European General Data Protection
          </h2>
          Regulation Indeed, the European General Data Protection Regulation
          requires a considerable implementation effort and creates some
          uncertainty with the threat of fines of up to EUR 20 million. At the
          same time, however, the implementation of the GDPR requirements also
          offers the opportunity to evaluate processes, identify unused systems
          and to reorganise and optimise procedures. To be able to take
          advantage of these opportunities, a functioning, future-proof data
          protection management system is essential. The term data protection
          management covers the planning, organisation, maintenance and
          continuous monitoring of all processes and mechanisms in connection
          with data protection. In simple terms, data protection management is
          the master plan, so to speak, in which all rules and procedures for
          handling personal data are established. In the data protection
          management system (&quot;DSMS&quot;), the clear, central and
          comprehensive documentation of all this content is then - in the best
          case - carried out. Of course, a data protection management system
          does not necessarily have to use specially developed software.
          Theoretically, the documentation of the corresponding contents can
          also be done in a normal text file or with a spreadsheet program.
          However, this is just as efficient as distributing advertising videos
          via VHS cassette. The Data Protection Module of the Akarion Compliance
          Cloud is specially designed for the implementation of GDPR-compliant
          data protection management and follows the approach of making data
          protection management as simple and effective as possible, using the
          latest technologies. Behind the Compliance Cloud is the company
          Akarion and its vision to redesign trust in the digital world. Since
          its foundation in 2017, Akarion has therefore been pursuing the goal
          of advancing the trustworthy handling of data through technical
          innovation under the credo &quot;Innovating Trust&quot;. Akarion wants
          to show that data protection can not only be a burden but rather an
          opportunity and tries to make the latest developments in technology
          available to customers. In addition to the Data Protection Module,
          Akarion offers further compliance management software under the roof
          of the so-called &quot;Compliance Cloud&quot;. Subject areas such as
          ISO27001, Business Continuity Management or Whistleblowing are so
          closely linked to the topic of data protection that a central control
          of all these areas, through the use of synergies, enables an effective
          and holistic compliance management. Strong partners for your data
          protection We at kontractory by DWP find this holistic approach very
          exciting and have therefore worked with Akarion from the very
          beginning. Akarion provides its Data Protection Module, a scalable and
          individually adaptable software solution, and kontractory by DWP
          provides the tailor-made legal advice. In this way, we create an
          individual all-round solution for your company, which is 100% tailored
          to your needs.
        </div>
      </div>
      <div className='max-w-6xl mx-auto '>
        <h2 className='text-xl  font-bold my-10 text-center'>
          Related Articles
        </h2>
        <div className='grid grid-cols-3 gap-x-9'>
          {blogs.slice(0, 3).map((blog, index) => (
            <BlogCard blog={blog} key={index} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default BlogPage;
