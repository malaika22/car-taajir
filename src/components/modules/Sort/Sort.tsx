import { Disclosure } from '@headlessui/react';
import { MdKeyboardArrowDown, MdSort } from 'react-icons/md';

const Sort = () => {
  const sortingOptions = [
    {
      title: 'Distance',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Make',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Model',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Type',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Year',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Price',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Mileage',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Features',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Size',
      options: ['Option one', 'Option two'],
    },
    {
      title: 'Exterior Color',
      options: ['Option one', 'Option two'],
    },
  ];
  return (
    <div className='bg-white w-full px-4 ring-1 ring-offset-2 ring-slate-50 rounded-lg'>
      <h2 className='flex items-center py-3 text-md font-semibold text-[#5E5E5E]'>
        <MdSort className='mr-4 text-xl' />
        Sort By
      </h2>
      <div className='py-5'>
        {sortingOptions.map((sort, index) => (
          <Disclosure key={sort.title}>
            {({ open }) => (
              <>
                <Disclosure.Button className='flex w-full justify-between rounded-lg  px-4 py-2 text-left font-medium hover:bg-[#ef63127d] focus:outline-none focus-visible:ring focus-visible:ring-[#EF6212] focus-visible:ring-opacity-75 text-[#5E5E5E]'>
                  <span>{sort.title}</span>
                  <MdKeyboardArrowDown
                    className={`${open ? 'rotate-180 transform' : ''} h-5 w-5`}
                  />
                </Disclosure.Button>
                <div className='mb-4'>
                  {sort.options.map((option, index) => (
                    <Disclosure.Panel
                      className='px-4 pt-4 pb-2 text-sm text-gray-500  cursor-pointer '
                      key={index}
                    >
                      {option}
                    </Disclosure.Panel>
                  ))}
                </div>
              </>
            )}
          </Disclosure>
        ))}
      </div>
    </div>
  );
};

export default Sort;
