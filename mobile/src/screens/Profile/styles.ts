import { styled } from "styled-components/native";

export const Wrapper = styled.SafeAreaView`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: flex-end;
  width: 90%;
  padding: 16px 0;
  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GREEN};
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
