import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { ISignup } from "@/types/credentials.types";
import { TextField } from "@/components/modules";

const SignUp = () => {
  const schema = yup
    .object({
      fullName: yup.string().min(5, "Too short").required("Required!"),
      email: yup.string().email("Invalid Email").required(),
      newPassword: yup
        .string()
        .min(3, "Password must be at least 8 characters")
        .required("Required!"),
      confirmPassword: yup
        .string()
        .min(3, "Password must be at least 8 characters")
        .oneOf([yup.ref("newPassword"), null], "Password must match")
        .required("Required!"),
    })
    .required();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignup>({
    resolver: yupResolver(schema),
  });
  return (
    <div>
      <TextField
        placeholder='Enter full name'
        id='fullName'
        title='Fullname'
        type='text'
        error={errors.fullName?.message}
        register={register}
      />
    </div>
  );
};

export default SignUp;
