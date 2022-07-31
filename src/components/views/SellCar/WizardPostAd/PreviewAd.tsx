import { Dialog, Transition } from '@headlessui/react';
import { Fragment } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { WizardSchema } from 'schemas/wizard.schema';

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
              <Dialog.Panel className='h-[400px] w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                <Dialog.Title className='text-lg font-medium leading-6 text-gray-900'>
                  <div className='inline-block cursor-pointer'>
                    <IoIosArrowBack />
                  </div>
                </Dialog.Title>

                <div className='mt-10 text-center'>
                  <h2 className='text-2xl text-[#444343] font-bold mb-3'>
                    Email Sent!
                  </h2>
                  <p className='text-sm text-gray-500 px-8 my-10'>
                    In order to reset your password we have sent an email,
                    Kindly Check!
                  </p>
                </div>

                <div className='mt-4 text-center'>
                  <button className='bg-gradient-to-r from-[#3C9E00] to-[#2C7400] font-bold text-white rounded-lg h-12 w-52 '>
                    Done
                  </button>
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
