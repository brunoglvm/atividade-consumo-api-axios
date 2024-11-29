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
    try {
      const response = await api.post("/usuarios", {
        nome,
        email,
        senha,
      });
      const novoUsuario = response.data.user;
      if (novoUsuario) {
        console.log("Usuário registrado com sucesso:", novoUsuario);
        Toast.show({
          type: "success",
          text1: "Conta criada com sucesso!",
          text2: "Você pode fazer login agora.",
        });
        navigation.navigate("Login");
      } else {
        console.log("Erro. Usuário não foi criado.");
      }
    } catch (error) {
      console.log("Erro ao registrar usuário:", error);
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
            />
            <Button
              title="Entrar"
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
