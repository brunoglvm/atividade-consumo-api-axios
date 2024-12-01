import { useNavigation } from "@react-navigation/native";
import type { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Feather } from "@expo/vector-icons";

import theme from "../../theme";
import { RootStackParamList } from "../../utils/Types";

import {
  Container,
  Content,
  OpenButton,
  Title,
  Data,
  Company,
  SkeletonContainer,
  SkeletonContent,
  SkeletonTitle,
  SkeletonData,
  SkeletonCompany,
} from "./styles";

type Data = {
  id: number;
  title: string;
  dataCreated: string;
  company: string;
};

type Props = NativeStackScreenProps<RootStackParamList>;

export function VagaCard({ id, title, dataCreated, company }: Data) {
  const navigation = useNavigation<Props["navigation"]>();

  return (
    <Container onPress={() => navigation.navigate("Details", { id })}>
      <Content>
        <Title numberOfLines={1}>{title}</Title>

        <Data>
          {/* Formatação da data */}
          {new Date(dataCreated).toLocaleDateString("pt-BR", {
            timeZone: "UTC",
            day: "2-digit",
            month: "2-digit",
            year: "numeric",
          })}
        </Data>
        <Company numberOfLines={1}>{company}</Company>
      </Content>
      <OpenButton>
        <Feather name="chevron-right" size={24} color={theme.COLORS.BLUE} />
      </OpenButton>
    </Container>
  );
}

export function SkeletonVagaCard() {
  return (
    <SkeletonContainer>
      <SkeletonContent>
        <SkeletonTitle />
        <SkeletonData />
        <SkeletonCompany />
      </SkeletonContent>
      <Feather name="chevron-right" size={24} color={theme.COLORS.BLUE} />
    </SkeletonContainer>
  );
}
