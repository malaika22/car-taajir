import { Login } from '@views';

import { AuthContainer } from '@/modules';

const LoginPage = () => {
  return (
    <div>
      <AuthContainer pageTitle='Welcome Back!'>
        <Login />
      </AuthContainer>
    </div>
  );
};

export default LoginPage;
