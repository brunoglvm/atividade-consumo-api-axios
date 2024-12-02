import { useState } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import Toast from "react-native-toast-message";

import api from "../../services/api";

import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Form,
  TextContainer,
  TextBlack,
  TextLink,
  TextLinkContainer,
} from "./styles";

export default function FormScreen({ navigation }) {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleRegister = async () => {
    if (!nome || !email || !senha) {
      // Campos obrigatórios vazios
      console.log("Registro falhou. Todos os campos são obrigatórios.");
      Toast.show({
        type: "error",
        text1: "Registro falhou.",
        text2: "Todos os campos são obrigatórios.",
      });
      return;
    }

    try {
      const response = await api.post("/usuarios", { nome, email, senha });
      const novoUsuario = response.data.user;

      if (novoUsuario) {
        // Registro bem-sucedido
        console.log("Usuário registrado com sucesso:", novoUsuario);
        Toast.show({
          type: "success",
          text1: "Conta criada com sucesso!",
          text2: "Você pode fazer login agora.",
        });
        navigation.navigate("Login");
      } else {
        // Erro ao criar o usuário
        console.log("Erro. Usuário não foi criado.");
        Toast.show({
          type: "error",
          text1: "Erro no registro.",
          text2: "Não foi possível criar sua conta. Tente novamente.",
        });
      }
    } catch (error) {
      // Erro na requisição
      console.log("Erro ao registrar usuário:", error);
      Toast.show({
        type: "error",
        text1: "Erro no registro.",
        text2: "Não foi possível criar sua conta. Tente novamente mais tarde.",
      });
    }
  };

  return (
    <KeyboardAwareScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      showsVerticalScrollIndicator={false}
    >
      <Wrapper>
        <Image source={BGTop} />

        <Container>
          <Form>
            <Logo />
            <Input
              label="Nome"
              placeholder="Digite seu nome"
              value={nome}
              onChangeText={setNome}
            />
            <Input
              label="E-mail"
              placeholder="Digite seu e-mail"
              value={email}
              onChangeText={setEmail}
            />
            <Input
              label="Senha"
              placeholder="Digite sua senha"
              value={senha}
              onChangeText={setSenha}
              secureTextEntry={true}
            />

            <Button
              title="Criar conta"
              noSpacing={true}
              variant="primary"
              onPress={handleRegister}
            />
            <TextContainer>
              <TextBlack>Já tem uma conta?</TextBlack>
              <TextLinkContainer onPress={() => navigation.navigate("Login")}>
                <TextLink>Faça seu login.</TextLink>
              </TextLinkContainer>
            </TextContainer>
          </Form>
        </Container>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
