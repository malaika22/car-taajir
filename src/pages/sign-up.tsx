import { SignUp } from '@views';

import { AuthContainer } from '@/modules';

const SignupPage = () => {
  return (
    <AuthContainer pageTitle='Register Your Account'>
      <SignUp />
    </AuthContainer>
  );
};

export default SignupPage;
