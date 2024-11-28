import React, { useState, useEffect } from "react";
import { Image, FlatList, View, Text } from "react-native";

import api from "../../services/api";

import BGTop from "../../assets/BGTop.png";
import Logo from "../../components/Logo";
import VagaCard from "../../components/VagaCard";

import { Wrapper, Container, ListContainer, TextVagas } from "./styles";

export default function List() {
  const [vagas, setVagas] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchVagas = async () => {
      try {
        const res = await api.get("/vagas");
        setVagas(res.data);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };

    fetchVagas();
  }, []);

  return (
    <Wrapper>
      <Image source={BGTop} style={{ maxHeight: 86 }} />

      <Container>
        <Logo />
        <TextVagas>{vagas.length} vagas encontradas!</TextVagas>
        <ListContainer>
          {isLoading ? (
            <Text>Carregando...</Text>
          ) : (
            <FlatList
              data={vagas}
              keyExtractor={(item) => item.id.toString()}
              renderItem={({ item }) => (
                <VagaCard
                  id={item.id}
                  title={item.titulo}
                  dataCreated={item.dataCadastro}
                  company={item.empresa}
                />
              )}
              showsVerticalScrollIndicator={false}
              ListEmptyComponent={() => (
                <View>
                  <Text>Você ainda não tem vagas cadastradas.</Text>
                </View>
              )}
            />
          )}
        </ListContainer>
      </Container>
    </Wrapper>
  );
}
