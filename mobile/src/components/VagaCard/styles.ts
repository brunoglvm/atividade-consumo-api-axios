import styled from "styled-components/native";
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
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLUE};
`;

export const Data = styled.Text`
  font-family: ${theme.FONT_FAMILY.REGULAR};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const Company = styled.Text`
  font-family: ${theme.FONT_FAMILY.BOLD};
  font-size: ${({ theme }) => theme.FONT_SIZE.SM}px;
  line-height: 16px;
  text-align: left;
  color: ${({ theme }) => theme.COLORS.BLACK};
`;

export const OpenButton = styled.View`
  padding: 0 16px;
  justify-content: center;
`;

// Skeleton

export const SkeletonContainer = styled.TouchableOpacity.attrs({
  activeOpacity: 0.4,
})`
  background-color: ${({ theme }) => theme.COLORS.WHITE};
  border: 1px solid ${({ theme }) => theme.COLORS.GRAY_02};
  align-items: center;
  gap: 4px;
  width: 100%;
  height: 100px;
  border-radius: 16px;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 16px;
  padding: 16px;
`;

export const SkeletonContent = styled.View`
  flex: 1;
  gap: 8px;
`;

export const SkeletonTitle = styled.View`
  width: 80%;
  height: 16px;
  background-color: #969696;
  border-radius: 4px;
`;

export const SkeletonData = styled.View`
  width: 40%;
  height: 16px;
  background-color: #b2b2b2;
  border-radius: 4px;
`;

export const SkeletonCompany = styled.View`
  width: 60%;
  height: 16px;
  background-color: #cccccc;
  border-radius: 4px;
`;
