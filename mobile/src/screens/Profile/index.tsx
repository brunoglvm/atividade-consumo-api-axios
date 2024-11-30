import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import AsyncStorage from "@react-native-async-storage/async-storage"; //puxei o AsyncStorage
import {useState, useEffect} from "react"; //puxei o useState
import Logo from "../../components/Logo";
import Input from "../../components/Input";
import { Button } from "../../components/Button";
import axios from "axios"; //puxei o axios
import Toast from "react-native-toast-message";
const EXPO_BASE_URL = process.env.EXPO_BASE_URL

const BASE_URL = `http://${EXPO_BASE_URL}:3000/api`;

import {
  Wrapper,
  Container,
  Header,
  ContentContainer,
} from "../Profile/styles";

//função de atualizar
const updateProfile = async(nome, email, senha) =>{
  try{
  const user = await AsyncStorage.getItem("user");
  const parsedUser = JSON.parse(user);
  const response = await axios.put(`${BASE_URL}/usuarios/${parsedUser.id}`, {
    nome,
    email,
    senha
  });
  await AsyncStorage.setItem("user", JSON.stringify(response.data.user));
  Toast.show({
    type: "success",
    text1: "Perfil atualizado com sucesso!",
  })
  //alert("Perfil atualizado com sucesso!");
}catch(error){
  console.log("Erro ao atualizar o perfil:", error);
  Toast.show({
    type: "error",
    text1: "Erro ao atualizar o perfil.",
  })
  //alert("Erro ao atualizar o perfil.");
}
}

export default function Profile() {

//area do useState
const[nome, setNome] = useState("");
const[email, setEmail] = useState("");
const[senha, setSenha] = useState("");

//useEffect
useEffect(() => {
  const loadUser = async () => {
    const user = await AsyncStorage.getItem("user");
    if (user) {
      const parsedUser = JSON.parse(user);
      setNome(parsedUser.nome);
      setEmail(parsedUser.email);
      setSenha(parsedUser.senha);
    }
  };
  loadUser();
}, []);
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
            <Input label="Nome" value={nome} onChangeText={setNome} placeholder="Digite seu nome" />
            <Input label="E-mail" value={email} onChangeText={setEmail} placeholder="Digite seu e-mail" />
            <Input label="Senha" value={senha} onChangeText={setSenha} placeholder="Digite sua senha" />
          </ContentContainer>

          <Button
            title="Salvar informações"
            noSpacing={true}
            variant="primary"
            onPress={() => updateProfile(nome, email, senha)} //função de atualizar
          />
        </Container>
      </Wrapper>
    </KeyboardAwareScrollView>
  );
}
