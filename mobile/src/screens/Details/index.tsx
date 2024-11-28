import React, { useState, useEffect } from "react";
import { Feather } from "@expo/vector-icons";

import api from "../../services/api";
import { VagaProps } from "../../utils/Types";

import Logo from "../../components/Logo";
import { Button } from "../../components/Button";

import theme from "../../theme";

import {
  Wrapper,
  Container,
  Header,
  HeaderButtonContainer,
  ButtonIcon,
  ButtonText,
  ContentContainer,
  Title,
  Description,
} from "../Details/styles";

export default function Details({ route, navigation }) {
  const [id, setId] = useState(route.params.id);
  const [vaga, setVaga] = useState<VagaProps>(null);

  const fetchVaga = async () => {
    try {
      const res = await api.get(`vagas/${id}`);
      const data = res.data;
      setVaga({
        id: data.id,
        title: data.titulo,
        date: data.dataCadastro,
        description: data.descricao,
        phone: data.telefone,
        company: data.empresa,
      });
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchVaga();
  }, [id]);

  return (
    <Wrapper>
      <Header>
        <HeaderButtonContainer onPress={() => navigation.goBack()}>
          <ButtonIcon>
            <Feather size={22} name="chevron-left" color={theme.COLORS.BLUE} />
          </ButtonIcon>
          <ButtonText>Voltar</ButtonText>
        </HeaderButtonContainer>
        <Logo />
      </Header>

      {vaga ? (
        <Container>
          <ContentContainer>
            <Title>{vaga.title}</Title>
            <Description>{vaga.description}</Description>
          </ContentContainer>

          <Button
            title="Entrar em contato"
            noSpacing={true}
            variant="primary"
          />
        </Container>
      ) : (
        <Title>Vaga não foi encontrada.</Title>
      )}
    </Wrapper>
  );
}
