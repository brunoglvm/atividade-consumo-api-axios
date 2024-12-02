import React, { createContext, ReactNode, useState, useEffect } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";

type AuthContextType = {
  nome: string;
  setNome: (nome: string) => void;
  email: string;
  setEmail: (email: string) => void;
  senha: string;
  setSenha: (senha: string) => void;
  logout: () => Promise<void>;
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

  // Carregar dados do AsyncStorage
  useEffect(() => {
    const loadUserData = async () => {
      try {
        const userData = await AsyncStorage.getItem("user");
        if (userData) {
          const user = JSON.parse(userData);
          setNome(user.nome);
          setEmail(user.email);
          setSenha(user.senha);
        }
      } catch (error) {
        console.log("Erro ao carregar dados do usuário:", error);
      }
    };

    loadUserData();
  }, []);

  // Função de logout
  const logout = async () => {
    try {
      await AsyncStorage.removeItem("user");
      setNome("");
      setEmail("");
      setSenha("");
    } catch (error) {
      console.log("Erro ao realizar o logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ nome, setNome, email, setEmail, senha, setSenha, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};
