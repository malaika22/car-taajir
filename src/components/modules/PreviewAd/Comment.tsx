import { RiDoubleQuotesL, RiDoubleQuotesR } from 'react-icons/ri';

const Comment = ({ className }: { className?: string }) => {
  return (
    <div
      className={`border-[#D8D5D5] border-[2px]  rounded-[25px] px-3 sm:px-10 gap-x-3 py-5 ${className}`}
    >
      <h2 className='text-center font-bold text-lg'>COMMENTS</h2>
      <div>
        <div className='text-start'>
          <RiDoubleQuotesL className='text-[60px] text-[#bfbfbf]' />
        </div>

        <div className='text-center text-sm md:text-base'>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque
          lectus eget lectus nec, enim. Fermentum fames ullamcorper risus
          vulputate magna vestibulum non pellentesque tincidunt. Blandit nulla
          in enim, cras facilisi enim elementum varius. Aliquet ullamcorper elit
          molestie diam a purus adipiscing enim maecenas.
        </div>

        <RiDoubleQuotesR className='text-[60px] ml-auto text-[#bfbfbf]' />
      </div>
    </div>
  );
};

export default Comment;
