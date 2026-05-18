import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import { getBookById } from "@/constants/books";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";
import { useFavorites } from "@/contexts/FavoritesContext";

export default function DetailsScreen() {
  const router = useRouter();
  const { id } = useLocalSearchParams<{ id?: string }>();
  const book = getBookById(id);
  const { colors, textScale } = useDisplaySettings();
  const { isFavorite, toggleFavorite } = useFavorites();
  const saved = isFavorite(book.id);

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ title: book.title }} />

      <ScrollView contentContainerStyle={styles.content}>
        <Image source={book.cover} style={styles.coverImage} />

        <Text
          style={[
            styles.title,
            { color: colors.text, fontSize: 26 * textScale },
          ]}
        >
          {book.title}
        </Text>
        <Text
          style={[
            styles.author,
            { color: colors.muted, fontSize: 18 * textScale },
          ]}
        >
          by {book.author}
        </Text>

        <View style={[styles.genreBadge, { backgroundColor: colors.surface }]}>
          <Text
            style={[
              styles.badgeText,
              { color: colors.primary, fontSize: 12 * textScale },
            ]}
          >
            {book.genre}
          </Text>
        </View>

        <TouchableOpacity
          style={[
            styles.favoriteButton,
            { borderColor: saved ? "#ac3509" : colors.border },
            saved && styles.favoriteButtonActive,
          ]}
          onPress={() => toggleFavorite(book.id)}
        >
          <Ionicons
            color={saved ? "#fff" : colors.primary}
            name={saved ? "heart" : "heart-outline"}
            size={20 * textScale}
          />
          <Text
            style={[
              styles.favoriteText,
              {
                color: saved ? "#fff" : colors.primary,
                fontSize: 14 * textScale,
              },
            ]}
          >
            {saved ? "Saved to Favorites" : "Add to Favorites"}
          </Text>
        </TouchableOpacity>

        <Text
          style={[
            styles.description,
            {
              color: colors.muted,
              fontSize: 14 * textScale,
              lineHeight: 24 * textScale,
            },
          ]}
        >
          {book.description}
        </Text>

        <TouchableOpacity
          style={styles.readButton}
          onPress={() =>
            router.push({
              pathname: "/chapters",
              params: { id: book.id },
            })
          }
        >
          <Text style={[styles.buttonText, { fontSize: 18 * textScale }]}>
            Read Now
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  content: { alignItems: "center", padding: 30 },
  coverImage: {
    width: 200,
    height: 300,
    borderRadius: 15,
    marginBottom: 20,
    resizeMode: "cover",
    elevation: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 5,
  },
  title: {
    fontWeight: "bold",
    textAlign: "center",
  },
  author: { marginBottom: 15 },
  genreBadge: {
    backgroundColor: "#e0bfb6",
    paddingHorizontal: 15,
    paddingVertical: 5,
    borderRadius: 20,
    marginBottom: 20,
  },
  badgeText: { fontWeight: "bold" },
  favoriteButton: {
    alignItems: "center",
    borderColor: "#e0bfb6",
    borderRadius: 24,
    borderWidth: 1,
    flexDirection: "row",
    gap: 8,
    marginBottom: 24,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  favoriteButtonActive: {
    backgroundColor: "#ac3509",
    borderColor: "#ac3509",
  },
  favoriteText: {
    fontWeight: "700",
  },
  description: {
    textAlign: "center",
    marginBottom: 40,
    fontStyle: "italic",
  },
  readButton: {
    backgroundColor: "#ac3509",
    paddingVertical: 18,
    paddingHorizontal: 50,
    borderRadius: 30,
    width: "100%",
    elevation: 3,
  },
  buttonText: {
    color: "#fff",
    textAlign: "center",
    fontWeight: "bold",
  },
});
