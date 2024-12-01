export type User = {
  id?: number;
  nome: string;
  email: string;
  senha: string;
};

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
