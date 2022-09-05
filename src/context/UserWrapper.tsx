import { createContext, ReactNode } from 'react';
import { User } from 'types/credentials.types';

type IUserWrapperProps = {
  children?: ReactNode | ReactNode[];
  hook: {
    user: User;
    setUser: (value: User) => void;
  };
};

export const UserContext = createContext<{
  user: User;
  setUser: (value: User) => void;
}>({
  user: { data: null },
  setUser: () => {
    console.log('');
  },
});

const UserWrapper = ({ children, hook }: IUserWrapperProps) => {
  // const [user, setUser] = useState<{
  //   user: User;
  //   setUser: Dispatch<SetStateAction<{ user: User } | undefined>>;
  // }>({
  //   user: { data: null },
  //   setUser: () => {
  //     console.log('hehe');
  //   },
  // });
  return <UserContext.Provider value={hook}>{children}</UserContext.Provider>;
};

export default UserWrapper;
