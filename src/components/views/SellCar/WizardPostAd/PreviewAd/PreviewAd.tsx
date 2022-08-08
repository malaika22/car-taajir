import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoLocationSharp } from 'react-icons/io5';
import { WizardSchema } from 'schemas/wizard.schema';

import {
  Comment,
  Features,
  ImagesCarousel,
  Specifications,
  UserProfile,
  VehicleInformation,
} from '@/modules';

const carData = {
  title: '2015 toyota Corolla LE',
  location: 'Karachi',
  images: [],
  price: '2,875,000',
  sellerInfo: {
    name: 'Ahmed',
    joiningDate: 'Oct 17, 2016',
    contactNumber: '0300 4883238',
  },
  specifications: [
    {
      value: '92,000km',
      icon: '/images/specifications/speedometer.png',
    },
    {
      value: 'Petrol',
      icon: '/images/specifications/gas-station.png',
    },
    {
      value: 'Automatic',
      icon: '/images/specifications/gear-box.png',
    },
    {
      value: '2015',
      icon: '/images/specifications/sedan.png',
    },
    {
      value: 'Air bag',
      icon: '/images/specifications/air-bag.png',
    },
    {
      value: 'Power Steering',
      icon: '/images/specifications/steering-wheel.png',
    },
    {
      value: '2017',
      icon: '/images/specifications/calender.png',
    },
  ],
  vehicaleInformation: [
    {
      key: 'Registered In',
      value: 'Karachi',
    },
    {
      key: 'Assembly',
      value: 'Local',
    },
    {
      key: 'Ad Ref#',
      value: '6075160',
    },
    {
      key: 'Body Type',
      value: 'Sedan',
    },
    {
      key: 'Color',
      value: 'Black',
    },
    {
      key: 'Engine Capacity',
      value: '2000cc',
    },
  ],
  features: [
    {
      icon: '',
      feature: 'ABS',
    },
    {
      icon: '',
      feature: 'Air Conditioning',
    },
    {
      icon: '',
      feature: 'Immobilizer Key',
    },
    {
      icon: '',
      feature: 'Power Locks',
    },
    {
      icon: '',
      feature: 'Power Windows',
    },
    {
      icon: '',
      feature: 'Power Steering',
    },
    {
      icon: '',
      feature: 'AM/FM Radio',
    },
    {
      icon: '',
      feature: 'Alloy Rims',
    },
    {
      icon: '',
      feature: 'Keyless Entry',
    },
    {
      icon: '',
      feature: 'Air Bags',
    },
    {
      icon: '',
      feature: 'Navigation System',
    },
  ],
  comments:
    'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Scelerisque lectus eget lectus nec, enim. Fermentum fames ullamcorper risus vulputate magna vestibulum non pellentesque tincidunt. Blandit nulla in enim, cras facilisi enim elementum varius. Aliquet ullamcorper elit molestie diam a purus adipiscing enim maecenas. ',
};
interface IPreviewAdInterface {
  previewData: WizardSchema | undefined;
}

const PreviewAd = ({ previewData }: IPreviewAdInterface) => {
  return (
    <Transition appear show={true} as={Fragment}>
      <Dialog
        as='div'
        className='relative z-10'
        onClose={() => {
          console.log('close');
        }}
      >
        <Transition.Child
          as={Fragment}
          enter='ease-out duration-300'
          enterFrom='opacity-0'
          enterTo='opacity-100'
          leave='ease-in duration-200'
          leaveFrom='opacity-100'
          leaveTo='opacity-0'
        >
          <div className='fixed inset-0 bg-black bg-opacity-25' />
        </Transition.Child>

        <div className='fixed inset-0 overflow-y-auto'>
          <div className='flex min-h-full items-center justify-center p-4 text-center'>
            <Transition.Child
              as={Fragment}
              enter='ease-out duration-300'
              enterFrom='opacity-0 scale-95'
              enterTo='opacity-100 scale-100'
              leave='ease-in duration-200'
              leaveFrom='opacity-100 scale-100'
              leaveTo='opacity-0 scale-95'
            >
              <Dialog.Panel className=' w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-10 text-left align-middle shadow-xl transition-all'>
                <div>
                  <div className='flex items-center justify-between'>
                    <button className='text-white rounded-lg font-bold bg-gradient-to-r h-12 w-44 from-[#2F69DA] to-[#0C45B2] shadow-[2.5px_5.06px_12.64px_0rem_rgb(0,0,0,0.25)]'>
                      Save Changes
                    </button>
                    <h2 className='text-[#444343] text-2xl font-bold'>
                      Your Ad Preview
                    </h2>
                    <button className='text-red-500'>Cancel</button>
                  </div>
                  <div className='mt-6 mb-2'>
                    <h2 className='font-bold text-xl'>{carData.title}</h2>
                    <div className='flex items-center text-sm mt-1'>
                      <IoLocationSharp className='text-[#5E5E5E]' />{' '}
                      <span className='text-[#B5B5B5]'>
                        {carData.location}, Pakistan
                      </span>
                    </div>
                  </div>
                  {/* Carousel Placeholder */}
                  <div className='flex justify-between gap-x-4'>
                    <ImagesCarousel />
                    <UserProfile />
                  </div>
                  {/* Carousel Placeholder */}

                  {/* SPECIFICATIONS PLACEHOLDER */}
                  <Specifications />
                  {/* SPECIFICATIONS PLACEHOLDER */}

                  {/* INFORMATION PLACEHOLDER */}
                  <VehicleInformation />
                  {/* INFORMATION PLACEHOLDER */}

                  {/* FEATURES PLACEHOLDER */}
                  <div className='grid grid-cols-2 gap-x-5'>
                    <Features />
                    <Comment />
                  </div>

                  {/* FEATURES PLACEHOLDER */}
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition>
  );
};

export default PreviewAd;
