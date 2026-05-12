import React from "react";
import {
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

import { Note } from "../../types/note";
import { useTheme } from "../../hooks/useTheme";

interface Props {
  item: Note;
  isDark: boolean;
}

export default function NoteCard({
  item,
  isDark,
}: Props) {
  const { colors } = useTheme();

  const cardStyle = StyleSheet.compose(
    styles.card,
    {
      backgroundColor: colors.card,
    }
  );

  return (
    <Pressable
      style={({ pressed }) => [
        cardStyle,
        pressed && styles.pressed,
      ]}
    >
      <View>
        <Text
          style={[
            styles.title,
            { color: colors.text },
          ]}
        >
          {item.title}
        </Text>

        <Text
          numberOfLines={2}
          style={[
            styles.content,
            { color: colors.subText },
          ]}
        >
          {item.content}
        </Text>

        <Text
          style={[
            styles.date,
            { color: colors.subText },
          ]}
        >
          {item.date}
        </Text>
      </View>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  card: {
    flex: 1,
    marginBottom: 16,
    marginHorizontal: 6,
    borderRadius: 20,
    padding: 18,

    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.08,
    shadowRadius: 6,
    elevation: 4,
  },

  pressed: {
    opacity: 0.8,
    transform: [{ scale: 0.98 }],
  },

  title: {
    fontSize: 18,
    fontWeight: "700",
  },

  content: {
    marginTop: 10,
    fontSize: 15,
    lineHeight: 22,
  },

  date: {
    marginTop: 18,
    fontSize: 12,
  },
});