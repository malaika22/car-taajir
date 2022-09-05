import { UserContext } from 'context/UserWrapper';
import { useContext } from 'react';
import { ILogin, ISignup } from 'types/credentials.types';

const useUser = () => {
  const { user, setUser } = useContext(UserContext);
  const signUp = (values: ISignup) => {
    setUser({
      data: {
        email: values.email,
        fullName: values.fullName,
      },
    });

    localStorage.setItem(
      'user',
      JSON.stringify({
        email: values.email,
        fullName: 'Test user',
      })
    );
  };

  const signIn = (values: ILogin) => {
    setUser({
      data: {
        email: values.email,
        fullName: 'Test user',
      },
    });
    localStorage.setItem(
      'user',
      JSON.stringify({
        email: values.email,
        fullName: 'Test user',
      })
    );
  };

  const logout = () => {
    localStorage.removeItem('user');
    setUser({ data: null });
  };

  return {
    signUp,
    signIn,
    user,
    logout,
  };
};

export default useUser;
