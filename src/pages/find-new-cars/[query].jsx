import { Popover, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { FiX } from 'react-icons/fi';
import { MdSort } from 'react-icons/md';

import { BreadCrumbs, CarCard, CarModelFilter, Sort } from '@/modules';

const NewCarsSearch = () => {
  return (
    <div className='bg-[#E5E5E5] py-8'>
      <div className='max-w-6xl mx-auto '>
        <CarModelFilter />
        <div className='px-5  py-14'>
          <div className='flex justify-between mdLg:block'>
            <h2 className='text-2xl text-black font-bold'>Find New Cars</h2>
            {/* RESPONSIVE SORT */}
            <div className='block mdLg:hidden'>
              <Popover className='relative'>
                {({ open }) => (
                  <>
                    <Popover.Button>
                      <div className='rounded-full bg-slate-50 w-11 h-11 flex items-center justify-center ring-2 ring-slate-100'>
                        {open ? (
                          <FiX className='text-2xl' />
                        ) : (
                          <MdSort className='text-2xl' />
                        )}
                      </div>
                    </Popover.Button>
                    <Transition
                      as={Fragment}
                      enter='transition ease-out duration-200'
                      enterFrom='opacity-0 translate-y-1'
                      enterTo='opacity-100 translate-y-0'
                      leave='transition ease-in duration-150'
                      leaveFrom='opacity-100 translate-y-0'
                      leaveTo='opacity-0 translate-y-1'
                    >
                      <Popover.Panel className='absolute left-[-50px] z-10 mt-3  -translate-x-1/2 transform '>
                        <div className='w-[200px]'>
                          <Sort />
                        </div>
                      </Popover.Panel>
                    </Transition>
                  </>
                )}
              </Popover>
            </div>
            {/* RESPONSIVE SORT */}
          </div>

          <BreadCrumbs
            pagesLinks={[
              {
                title: 'Home',
                href: '/',
              },
              {
                title: 'Find Used Cars',
                href: 'find-new-cars',
              },
            ]}
          />
          <div className='grid grid-cols-4 gap-x-6 mt-10'>
            <div className='hidden md:col-span-1 mdLg:block'>
              <Sort />
            </div>

            <div className='col-span-4 mdLg:col-span-3 '>
              {Array(10)
                .fill({})
                .map((_, i) => (
                  <CarCard key={i} />
                ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewCarsSearch;
