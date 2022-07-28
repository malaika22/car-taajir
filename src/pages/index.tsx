import { HomeCarousel } from '@views';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='landing-page-bg min-h-[650px]  bg-cover'>
      <div className='h-[95px]'></div>
      <HomeCarousel />
    </div>
  );
};

export default Home;
