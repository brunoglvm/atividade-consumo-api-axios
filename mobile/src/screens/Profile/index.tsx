import React from "react";
import {
  Wrapper,
  Container,
  Header,
  ContentContainer,
} from "../Profile/styles";
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";

export default function Profile() {
  return (
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

        <Button title="Salvar informações" noSpacing={true} variant="primary" />
      </Container>
    </Wrapper>
  );
}
