import { Image } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

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
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="E-mail" placeholder="Digite seu e-mail" />
            <Input label="Senha" placeholder="Digite sua senha" />
            <Button title="Entrar" noSpacing={true} variant="primary" />
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
