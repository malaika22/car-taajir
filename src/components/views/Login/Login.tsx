import { useState } from 'react';

import DefaultLogin from './DefaultLogin';

const Login = () => {
  const [loginView, setLoginView] = useState('default');
  const renderFields = () => {
    switch (loginView) {
      case 'default':
        return <DefaultLogin />;
    }
  };
  return <div>{renderFields()}</div>;
};

export default Login;
