import React from "react";
import {
  ImageBackground,
  KeyboardAvoidingView,
  Platform,
  Pressable,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";

import { useTheme } from "../hooks/useTheme";

export default function EditorScreen() {
  const { colors } = useTheme();

  return (
    <KeyboardAvoidingView
      style={[
        styles.container,
        {
          backgroundColor: colors.background,
        },
      ]}
      behavior={Platform.OS === "ios" ? "padding" : "height"}
    >
      <ImageBackground
        //source={require("../../assets/images/notes-header.jpg")}
        source={require("../../assets/images/notes-header.jpeg")}
        style={styles.header}
        imageStyle={styles.headerImage}
      >
        <View style={styles.overlay}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Back</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Save</Text>
          </Pressable>
        </View>
      </ImageBackground>

      <View style={styles.content}>
        <TextInput
          placeholder="Note Title"
          placeholderTextColor={colors.subText}
          style={[
            styles.titleInput,
            {
              color: colors.text,
            },
          ]}
        />

        <TextInput
          multiline
          placeholder="Write your note here..."
          placeholderTextColor={colors.subText}
          textAlignVertical="top"
          style={[
            styles.bodyInput,
            {
              color: colors.text,
            },
          ]}
        />
      </View>
    </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    height: 220,
    justifyContent: "flex-start",
  },

  headerImage: {
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
  },

  overlay: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingTop: 60,
    paddingHorizontal: 20,
  },

  button: {
    backgroundColor: "rgba(0,0,0,0.4)",
    paddingHorizontal: 18,
    paddingVertical: 10,
    borderRadius: 12,
  },

  buttonText: {
    color: "#fff",
    fontWeight: "600",
  },

  content: {
    flex: 1,
    padding: 20,
  },

  titleInput: {
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 20,
  },

  bodyInput: {
    flex: 1,
    fontSize: 17,
    lineHeight: 28,
  },
});