import UserWrapper from 'context/UserWrapper';
import type { AppProps } from 'next/app';
import { useEffect, useState } from 'react';
import { User } from 'types/credentials.types';

import '../styles/globals.css';

import { Layout } from '@/modules';
function MyApp({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<User>({
    data: null,
  });
  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user')!);
    setUser({
      data: user,
    });
  }, []);
  return (
    <UserWrapper hook={{ user, setUser }}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </UserWrapper>
  );
}

export default MyApp;
