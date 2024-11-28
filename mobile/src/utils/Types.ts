export type VagaProps = {
  id: number;
  title: string;
  date: string;
  description: string;
  phone: string;
  company: string;
};

export type RootStackParamList = {
  Login: undefined;
  FormScreen: undefined;
  Home: undefined;
  Profile: undefined;
  Details: { id: number };
};

export type User = {
  email: string;
  senha: string;
};
