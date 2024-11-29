import { ActivityIndicator, View } from "react-native";

import theme from "../../theme";

export function Loading() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: theme.COLORS.WHITE,
      }}
    >
      <ActivityIndicator size="large" color={theme.COLORS.GREEN} />
    </View>
  );
}
