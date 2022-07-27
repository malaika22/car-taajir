import { HomeCarousel } from '@/components/views/index';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  return (
    <div className='landing-page-bg min-h-[650px]  bg-cover'>
      <div className='h-[95px]'></div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
