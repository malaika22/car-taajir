import { Dialog, Transition } from '@headlessui/react';
import Image from 'next/image';
import { Fragment } from 'react';
import { BsFillTelephoneFill } from 'react-icons/bs';
import { IoLocationSharp } from 'react-icons/io5';
import { MdMessage } from 'react-icons/md';
import { WizardSchema } from 'schemas/wizard.schema';

import ImagesCarousel from './ImagesCarousel';

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
  features: [
    {
      value: '92,000km',
      icon: '',
    },
    {
      value: 'Petrol',
      icon: '',
    },
    {
      value: 'Automatic',
      icon: '',
    },
    {
      value: 'Air bag',
      icon: '',
    },
    {
      value: 'Power Steering',
      icon: '',
    },
    {
      value: '2017',
      icon: '',
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
  carFeatures: [
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
  console.log('preview data', previewData);
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
              <Dialog.Panel className=' w-full max-w-6xl transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                {/* <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                  <div className='inline-block cursor-pointer'>
                    <IoIosArrowBack />
                  </div>
                </Dialog.Title> */}
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
                    <div className='w-[30%] h-fit  border-[#D8D5D5] text-center border-[1px] rounded-2xl border-solid p-5'>
                      <div className='text-[#3C9E00] pb-3 text-2xl font-bold border-b-2'>
                        PKR {carData.price}
                      </div>
                      <div className='px-4 pt-5'>
                        <span className='text-[#B5B5B5] underline text-lg'>
                          Seller Information
                        </span>
                        <div className='flex my-6 items-start'>
                          <div className='relative w-20 h-20'>
                            <Image
                              src='/images/previewMock/avatar.png'
                              layout='fill'
                              alt='car'
                              objectFit='contain'
                            />
                          </div>
                          <div className='text-start ml-3'>
                            <div className='text-[#444343] font-bold'>
                              {carData.sellerInfo.name}
                            </div>
                            <div className='text-[#5E5E5E] text-[12px]'>
                              Member Since {carData.sellerInfo.joiningDate}
                            </div>
                            <div className='text-[#0C45B2] mt-3 font-bold cursor-pointer text-[12px]'>
                              More Ads by {carData.sellerInfo.name}
                            </div>
                          </div>
                        </div>
                        <div>
                          <button className='bg-gradient-to-r h-14 w-full text-lg rounded-lg from-[#3C9E00] mb-5 to-[#2C7400] text-white flex items-center justify-center shadow-[2px_4px_10px_0rem_rgb(0,0,0,0.25)]'>
                            <BsFillTelephoneFill className='text-white ' />
                            <span className='ml-3'>0300 4883238</span>
                          </button>
                          <button className='border-[#3C9E00] flex  mb-5 text-lg items-center justify-center border-[1px] h-14 rounded-lg w-full shadow-[2px_4px_10px_0rem_rgb(0,0,0,0.25)]'>
                            <MdMessage className='text-[#2C7400] ' />
                            <span className='text-[#2C7400] ml-3'>
                              Send Message
                            </span>
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
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
