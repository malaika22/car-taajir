import { HomeCarousel } from '@views';
import type { NextPage } from 'next';

const Home: NextPage = () => {
  return (
    <div className='landing-page-bg min-h-[800px] sm:min-h-[650px]  bg-cover'>
      <HomeCarousel />
    </div>
  );
};

export default Home;
