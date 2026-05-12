import React, { useMemo, useState } from "react";
import {
  FlatList,
  StyleSheet,
  Text,
  TextInput,
  View,
  useWindowDimensions,
} from "react-native";

import { notes } from "../data/notes";
import { useTheme } from "../hooks/useTheme";
import NoteCard from "../components/notes/NoteCard";
import ThemeToggle from "../components/notes/ThemeToggle";

import { SafeAreaView } from "react-native-safe-area-context";

export default function HomeScreen() {
  const { colors, isDark } = useTheme();
  const [search, setSearch] = useState("");

  const { width } = useWindowDimensions();

  const numColumns = width > 700 ? 2 : 1;

  const filteredNotes = useMemo(() => {
    return notes.filter((note) =>
      note.title.toLowerCase().includes(search.toLowerCase())
    );
  }, [search]);

  const dynamicContainer = StyleSheet.flatten([
    styles.container,
    {
      backgroundColor: colors.background,
    },
  ]);

  return (
    <SafeAreaView style={dynamicContainer}>
      <View style={styles.header}>
        <Text style={[styles.heading, { color: colors.text }]}>
          My Notes
        </Text>

        <ThemeToggle isDark={isDark} />
      </View>

      <TextInput
        placeholder="Search notes..."
        placeholderTextColor={colors.subText}
        value={search}
        onChangeText={setSearch}
        style={[
          styles.searchInput,
          {
            backgroundColor: colors.card,
            color: colors.text,
          },
        ]}
      />

      <FlatList
        data={filteredNotes}
        key={numColumns}
        numColumns={numColumns}
        keyExtractor={(item) => item.id}
        contentContainerStyle={styles.listContainer}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => (
          <NoteCard item={item} isDark={isDark} />
        )}
        ListEmptyComponent={
          <Text
            style={[
              styles.emptyText,
              { color: colors.subText },
            ]}
          >
            No Notes Found
          </Text>
        }
      />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 16,
    paddingTop: 20,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  heading: {
    fontSize: 30,
    fontWeight: "700",
  },

  searchInput: {
    marginTop: 20,
    borderRadius: 16,
    paddingHorizontal: 16,
    paddingVertical: 14,
    fontSize: 16,
  },

  listContainer: {
    paddingTop: 20,
    paddingBottom: 100,
  },

  emptyText: {
    textAlign: "center",
    marginTop: 40,
    fontSize: 16,
  },
});