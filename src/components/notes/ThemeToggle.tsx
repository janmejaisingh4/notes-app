import React from "react";
import {
  StyleSheet,
  Switch,
  Text,
  View,
} from "react-native";

import { useTheme } from "../../hooks/useTheme";

interface Props {
  isDark: boolean;
}

export default function ThemeToggle({
  isDark,
}: Props) {
  const { colors } = useTheme();

  return (
    <View style={styles.container}>
      <Text style={{ color: colors.text }}>
        {isDark ? "Dark" : "Light"}
      </Text>

      <Switch value={isDark} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
});