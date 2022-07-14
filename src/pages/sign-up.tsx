import { AuthContainer } from "@/components/modules";
import { SignUp } from "@/components/views";

const SignupPage = () => {
  return (
    <AuthContainer pageTitle='Register Your Account'>
      <SignUp />
    </AuthContainer>
  );
};

export default SignupPage;
