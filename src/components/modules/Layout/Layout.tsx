import { Children } from 'types/general.types';

import Footer from './Footer/Footer';
import Header from './Header/Header';

interface ILayout {
  children: Children;
}
const Layout = ({ children }: ILayout) => {
  return (
    <>
      <Header />
      <div>{children}</div>
      <Footer />
    </>
  );
};

export default Layout;
