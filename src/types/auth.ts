export interface registerType {
  email: string;
  password: string;
  confirmPassword: string;
  name: string;
  reg_number: string;
  address: string;
  country: string;
  pincode: string;
  director_arr: string;
  number: string;
  numbercountrycode: string;
  paymentMethod: string;
  margin: string;
}

export interface loginType {
  email: string;
  password: string;
}

export interface resetType {
  email: string;
  password: string;
  confirmPassword: string;
}
