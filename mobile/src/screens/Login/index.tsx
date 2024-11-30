import { useState } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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

export default function Login({ navigation }) {
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");

  const handleLogin = async () => {
    try {
      const response = await api.get("/usuarios");
      const usuarios = response.data.users;

      if (Array.isArray(usuarios) && usuarios.length > 0) {
        const user = usuarios.find(
          (u) => u.email === email && u.senha === senha
        );

        if (user) {
          navigation.navigate("Auth", { screen: "Home" });
        } else {
          console.log("Login falhou. Nenhum usuário encontrado.");
        }
      } else {
        console.log("Nenhum usuário encontrado na resposta da API.");
      }
    } catch (error) {
      console.log("Erro na requisição:", error);
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
              title="Entrar"
              noSpacing={true}
              variant="primary"
              onPress={handleLogin}
            />
            <TextContainer>
              <TextBlack>Não tem uma conta?</TextBlack>
              <TextLinkContainer
                onPress={() => navigation.navigate("FormScreen")}
              >
                <TextLink>Crie agora mesmo.</TextLink>
              </TextLinkContainer>
            </TextContainer>
          </Form>
        </Container>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
