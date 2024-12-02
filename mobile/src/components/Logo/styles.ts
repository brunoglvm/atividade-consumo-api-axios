import { styled } from "styled-components/native";
import theme from "../../theme";

export const TextLogo = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.XL}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.GREEN};
`;
