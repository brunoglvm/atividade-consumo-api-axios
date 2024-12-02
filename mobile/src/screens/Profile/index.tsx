import { useContext } from "react";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";
import { User } from "../../utils/Types";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Header,
  ContentContainer,
} from "../Profile/styles";

export default function Profile({ navigation }) {
  const { nome, setNome, email, setEmail, senha, setSenha, logout } =
    useContext(AuthContext);

  const updateProfile = async ({ nome, email, senha }: User): Promise<void> => {
    if (!nome || !email || !senha) {
      // Verifica se os campos obrigatórios estão vazios
      console.log(
        "Falha ao atualizar perfil. Todos os campos são obrigatórios."
      );
      Toast.show({
        type: "error",
        text1: "Falha ao atualizar perfil.",
        text2: "Todos os campos são obrigatórios.",
      });
      return;
    }

    try {
      const user = await AsyncStorage.getItem("user");
      const parsedUser = JSON.parse(user);

      const response = await api.put(`/usuarios/${parsedUser.id}`, {
        nome,
        email,
        senha,
      });

      await AsyncStorage.setItem("user", JSON.stringify(response.data.user));

      // Atualização bem-sucedida
      console.log("Perfil atualizado com sucesso.");
      Toast.show({
        type: "success",
        text1: "Perfil atualizado com sucesso!",
        text2: "Suas informações foram salvas com sucesso.",
      });
    } catch (error) {
      // Erro ao tentar atualizar o perfil
      console.log("Erro ao atualizar o perfil:", error);
      Toast.show({
        type: "error",
        text1: "Erro ao atualizar o perfil.",
        text2:
          "Houve um problema ao tentar atualizar seu perfil. Tente novamente.",
      });
    }
  };

  const handleLogout = async () => {
    await logout(); // Executa a lógica de logout do contexto
    navigation.reset({
      index: 0,
      routes: [{ name: "Login" }],
    }); // Leva para a tela de login deletando a pilha de navegação
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Wrapper>
        <Header>
          <Logo />
        </Header>

        <Container>
          <ContentContainer>
            <Input
              label="Nome"
              value={nome}
              onChangeText={setNome}
              placeholder="Digite seu nome"
            />
            <Input
              label="E-mail"
              value={email}
              onChangeText={setEmail}
              placeholder="Digite seu e-mail"
            />
            <Input
              label="Senha"
              value={senha}
              onChangeText={setSenha}
              placeholder="Digite sua senha"
              secureTextEntry={true}
            />
          </ContentContainer>

          <Button
            title="Salvar informações"
            noSpacing={true}
            variant="primary"
            onPress={() => updateProfile({ nome, email, senha })}
          />

          <Button
            title="Logout"
            noSpacing={true}
            variant="secondary"
            onPress={handleLogout}
          />
        </Container>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
