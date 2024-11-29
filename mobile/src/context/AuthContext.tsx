import React, { createContext, ReactNode, useState } from "react";

type AuthContextType = {
  nome: string;
  setNome: (nome: string) => void;
  email: string;
  setEmail: (email: string) => void;
  senha: string;
  setSenha: (senha: string) => void;
};

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  return (
    <AuthContext.Provider
      value={{ nome, setNome, email, setEmail, senha, setSenha }}
    >
      {children}
    </AuthContext.Provider>
  );
};
