import { useContext } from "react";
import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage";
import Toast from "react-native-toast-message";

import api from "../../services/api";
import { AuthContext } from "../../context/AuthContext";

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
  const { email, setEmail, senha, setSenha, setNome } = useContext(AuthContext);

  const handleLogin = async () => {
    if (!email || !senha) {
      // Verifica se os campos obrigatórios estão vazios
      console.log("Login falhou. Todos os campos são obrigatórios.");
      Toast.show({
        type: "error",
        text1: "Login falhou.",
        text2: "Todos os campos são obrigatórios.",
      });
      return;
    }

    try {
      const response = await api.get("/usuarios");
      const usuarios = response.data.users;

      if (Array.isArray(usuarios) && usuarios.length > 0) {
        const user = usuarios.find(
          (u) => u.email === email && u.senha === senha
        );

        if (user) {
          // Login bem-sucedido
          console.log("Login bem-sucedido.");
          await AsyncStorage.setItem("user", JSON.stringify(user));
          setNome(user.nome);
          navigation.navigate("Auth", { screen: "Home" });

          Toast.show({
            type: "success",
            text1: "Login bem-sucedido!",
            text2: `Bem-vindo(a), ${user.nome}`,
          });
        } else {
          // Erro ao encontrar o usuário com as credenciais fornecidas
          console.log("Login falhou. Nenhum usuário encontrado.");
          Toast.show({
            type: "error",
            text1: "Login falhou.",
            text2: "Nenhum usuário encontrado com as credenciais fornecidas.",
          });
        }
      } else {
        // Nenhum usuário encontrado na resposta da API
        console.log("Nenhum usuário encontrado na resposta da API.");
        Toast.show({
          type: "error",
          text1: "Erro de servidor.",
          text2: "Não há usuários cadastrados.",
        });
      }
    } catch (error) {
      // Erro na requisição
      console.log("Erro na requisição:", error);
      Toast.show({
        type: "error",
        text1: "Erro na requisição.",
        text2: "Houve um problema ao tentar realizar o login. Tente novamente.",
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
