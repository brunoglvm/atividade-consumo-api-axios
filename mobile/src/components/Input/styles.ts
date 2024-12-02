import { styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.View`
  align-items: flex-start;
  width: 100%;
  gap: 4px;
`;

export const Label = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const InputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_02};
  border-radius: 8px;
  background-color: ${({ theme }) => theme.COLORS.GRAY_01};
  width: 100%;
`;

export const Field = styled.TextInput`
  flex: 1;
  padding: 16px;
  color: ${({ theme }) => theme.COLORS.BLACK};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
`;

export const IconContainer = styled.View`
  padding-right: 16px;
  justify-content: center;
  align-items: center;
`;
