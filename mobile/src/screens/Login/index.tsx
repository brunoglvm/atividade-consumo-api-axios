import { useState } from "react";
import { Image } from "react-native";

import api from "../../services/api";
import { User } from "../../utils/Types";

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
      const res = await api.get("/usuarios");
      const usuarios = res.data.usuarios;

      // Verifique se 'usuarios' é um array e se não está vazio
      if (Array.isArray(usuarios) && usuarios.length > 0) {
        const user = usuarios.find(
          (u: User) => u.email === email && u.senha === senha
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
  );
}
