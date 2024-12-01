import { styled } from "styled-components/native";
import theme from "../../theme";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 90%;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN};
`;

export const HeaderButtonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  flex-direction: row;
  justify-content: space-between;
  padding: 8px 0;
`;

export const ButtonIcon = styled.View``;

export const ButtonText = styled.Text`
  font-family: ${theme.FONT_FAMILY.MEDIUM};
  font-size: ${({ theme }) => theme.FONT_SIZE.MD}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Container = styled.View`
  flex: 1;
  align-items: center;
  flex-direction: column;
  justify-content: flex-start;
  width: 100%;
  padding: 16px;
  gap: 16px;
  background-color: ${({ theme }) => theme.COLORS.WHITE};
`;

export const ContentContainer = styled.View`
  width: 100%;
  gap: 16px;
`;

export const Title = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.LG}px;
  text-align: center;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Description = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.GRAY_03};
`;
