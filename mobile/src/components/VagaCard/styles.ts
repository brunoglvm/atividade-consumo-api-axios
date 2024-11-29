import { styled } from "styled-components/native";
import theme from "../../theme";

export const Container = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_02};
  align-items: left;
  gap: 4px;
  width: 100%;
  height: 100px;
  border-radius: 16px;
  justify-content: space-between;
  flex-direction: row;
  margin-bottom: 16px;
`;

export const Content = styled.View`
  gap: 8px;
  padding: 16px;
  justify-content: space-between;
  flex-direction: column;
  max-width: 80%;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM};
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Data = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${theme.FONT_SIZE.SM};
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Company = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${theme.FONT_SIZE.SM};
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const OpenButton = styled.View`
  padding: 0 16px;
  justify-content: center;
`;
