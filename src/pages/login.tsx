import { AuthContainer, ForgetPasswordModal } from '@/components/modules';
import { Login } from '@/components/views';

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
