import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { getBookById } from "../constants/books";
import { useDisplaySettings } from "../contexts/DisplaySettingsContext";

export default function ChaptersScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const book = getBookById(id);
  const { colors, textScale } = useDisplaySettings();

  return (
    <ScrollView
      contentContainerStyle={[
        styles.container,
        { backgroundColor: colors.background },
      ]}
    >
      <Stack.Screen options={{ title: "Chapters" }} />

      <Text
        style={[
          styles.heading,
          { color: colors.primary, fontSize: 28 * textScale },
        ]}
      >
        {book.title}
      </Text>
      <Text
        style={[
          styles.subheading,
          { color: colors.muted, fontSize: 14 * textScale },
        ]}
      >
        Choose a chapter to start reading.
      </Text>

      <View style={styles.bookSection}>
        {book.chapters.map((chapter, index) => (
          <TouchableOpacity
            key={chapter.id}
            style={[
              styles.chapterRow,
              { backgroundColor: colors.card, borderColor: colors.border },
            ]}
            onPress={() =>
              router.push({
                pathname: "/reading",
                params: { id: book.id, chapter: chapter.id },
              })
            }
          >
            <View style={styles.chapterNumber}>
              <Text style={styles.chapterNumberText}>{index + 1}</Text>
            </View>
            <View style={styles.chapterTextGroup}>
              <Text
                style={[
                  styles.chapterTitle,
                  { color: colors.text, fontSize: 15 * textScale },
                ]}
              >
                {chapter.title}
              </Text>
              <Text
                style={[
                  styles.chapterMeta,
                  { color: colors.muted, fontSize: 12 * textScale },
                ]}
              >
                Chapter {index + 1} of {book.chapters.length}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 20,
    paddingBottom: 40,
  },
  heading: {
    fontWeight: "bold",
  },
  subheading: {
    marginTop: 4,
    marginBottom: 24,
  },
  bookSection: {
    marginBottom: 28,
  },
  chapterRow: {
    alignItems: "center",
    borderRadius: 10,
    borderWidth: 1,
    flexDirection: "row",
    marginBottom: 10,
    padding: 14,
  },
  chapterNumber: {
    alignItems: "center",
    backgroundColor: "#ac3509",
    borderRadius: 18,
    height: 36,
    justifyContent: "center",
    marginRight: 12,
    width: 36,
  },
  chapterNumberText: {
    color: "#fff",
    fontWeight: "bold",
  },
  chapterTextGroup: {
    flex: 1,
  },
  chapterTitle: {
    fontWeight: "700",
  },
  chapterMeta: {
    marginTop: 3,
  },
});
