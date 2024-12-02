import styled from "styled-components/native";
import theme from "../../theme";

type ButtonProps = {
  $variant?: "primary" | "secondary";
  $noSpacing?: boolean;
};

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.8,
})<ButtonProps>`
  width: ${({ $noSpacing }) => ($noSpacing ? "max-content" : "100%")};
  height: ${({ $noSpacing }) => ($noSpacing ? "46px" : "max-content")};
  padding: ${({ $noSpacing }) => ($noSpacing ? "0px 16px" : "16px")};
  border-radius: 8px;
  gap: 8px;

  justify-content: center;
  align-items: center;

  background-color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.COLORS.BLUE : "transparent"};
`;

export const Title = styled.Text<ButtonProps>`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 16px;
  text-align: left;
  color: ${({ $variant, theme }) =>
    $variant === "primary" ? theme.COLORS.WHITE : theme.COLORS.BLUE};
`;
