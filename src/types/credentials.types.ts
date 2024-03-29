export interface ISignup {
  fullName: string;
  email: string;
  newPassword: string;
  confirmPassword: string;
}

export interface IPhone {
  phoneNumber: string;
}

export interface ILogin {
  email: string;
  password: string;
}

export type User =
  | { data: null }
  | {
      data: {
        fullName: string;
        email: string;
      };
    };
