import { styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  align-items: left;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM};
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const Field = styled.TextInput`
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_02};
  border-radius: 8px;
  padding: 16px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_01};
  width: 100%;
`;
