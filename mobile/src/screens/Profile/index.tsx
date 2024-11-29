import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";

import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

import {
  Wrapper,
  Container,
  Header,
  ContentContainer,
} from "../Profile/styles";

export default function Profile() {
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
            <Input label="Nome" placeholder="Digite seu nome" />
            <Input label="E-mail" placeholder="Digite seu e-mail" />
            <Input label="Senha" placeholder="Digite sua senha" />
          </ContentContainer>

          <Button
            title="Salvar informações"
            noSpacing={true}
            variant="primary"
          />
        </Container>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
