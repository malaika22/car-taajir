import { Tab } from '@headlessui/react';
import { AiFillHeart } from 'react-icons/ai';
import { ImBubble } from 'react-icons/im';

import Messages from './Messages';
import MyAds from './MyAds';
import SavedAds from './SavedAds';

const AdTabs = () => {
  const tabs = [
    { Icon: '', title: 'My Ads' },
    { Icon: AiFillHeart, title: 'Saved Ads' },
    { Icon: ImBubble, title: 'Messages' },
  ];
  const components = [MyAds, SavedAds, Messages];

  function classNames(...classes: string[]) {
    return classes.filter(Boolean).join(' ');
  }

  return (
    <div className='py-10 space-y-8'>
      <Tab.Group>
        <Tab.List className='flex sm:flex-row flex-col gap-y-3  sm:gap-x-3 w-full sm:w-[500px] mx-auto'>
          {tabs.map(({ Icon, title }, index) => (
            <Tab
              key={title}
              className={({ selected }) =>
                classNames(
                  'w-full rounded-lg py-2.5  leading-5 text-black-700 hover:bg-gradient-to-r from-[#EF8A12] to-[#F66800] font-bold text-md',
                  'ring-white ring-opacity-60 ring-offset-2  border-[#EF8A12] border-2 focus:outline-none focus:ring-2',
                  selected
                    ? 'bg-gradient-to-r from-[#EF8A12] to-[#F66800]  text-white'
                    : ' text-black hover:bg-white/[0.12] hover:text-white'
                )
              }
            >
              <div className='flex items-center justify-center py-2 text-sm sm:text-base'>
                {Icon && <Icon className='mr-2 text-[#F37708] ' />}
                {title}
              </div>
            </Tab>
          ))}
        </Tab.List>
        <Tab.Panels className='mt-2'>
          {components.map((Component, idx) => (
            <Tab.Panel
              key={idx}
              className={classNames('rounded-xl bg-white sm:p-3')}
            >
              <div className='bg-[#F3F3F3] px-4 py-8 xs:p-8 rounded-xl'>
                {' '}
                <Component />
              </div>
            </Tab.Panel>
          ))}
        </Tab.Panels>
      </Tab.Group>
    </div>
  );
};

export default AdTabs;
