import { styled } from "styled-components/native";
import theme from "../../theme";

export const Wrapper = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ListContainer = styled.View`
  flex: 1;
  width: 100%;
  justify-content: flex-start;
  flex-direction: column;
`;

export const TextVagas = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;
