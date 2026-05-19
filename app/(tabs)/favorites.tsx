import React from "react";
import { StyleSheet, Text, View, ScrollView } from "react-native";
import { useRouter } from "expo-router";
import BookCard from "../../components/BookCard";
import { books } from "../../constants/books";
import { useDisplaySettings } from "../../contexts/DisplaySettingsContext";
import { useFavorites } from "../../contexts/FavoritesContext";

export default function FavoritesScreen() {
  const router = useRouter();
  const { colors, textScale } = useDisplaySettings();
  const { favoriteIds, removeFavorite } = useFavorites();
  const favoriteBooks = books.filter((book) => favoriteIds.includes(book.id));

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <ScrollView contentContainerStyle={styles.scrollContent}>
        <View style={styles.header}>
          <Text
            style={[
              styles.title,
              { color: colors.primary, fontSize: 28 * textScale },
            ]}
          >
            Your Favorites
          </Text>
          <Text
            style={[
              styles.subtitle,
              { color: colors.muted, fontSize: 14 * textScale },
            ]}
          >
            {favoriteBooks.length === 1
              ? "1 Book Saved"
              : `${favoriteBooks.length} Books Saved`}
          </Text>
        </View>

        {favoriteBooks.length > 0 ? (
          /* 📚 CHANGED: Added the gridRow layout view to align items horizontally */
          <View style={styles.gridRow}>
            {favoriteBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                cover={book.cover}
                status="Saved"
                isFavorite
                onFavoritePress={() => removeFavorite(book.id)}
                onPress={() =>
                  router.push({ pathname: "/details", params: { id: book.id } })
                }
              />
            ))}
          </View>
        ) : (
          <View style={styles.emptyContainer}>
            <Text
              style={[
                styles.emptyText,
                { color: colors.muted, fontSize: 20 * textScale },
              ]}
            >
              No favorites yet.
            </Text>
            <Text
              style={[
                styles.emptySubtext,
                { color: colors.muted, fontSize: 14 * textScale },
              ]}
            >
              Tap a heart on any book to see it here.
            </Text>
          </View>
        )}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    padding: 20,
  },
  header: {
    marginBottom: 25,
    marginTop: 10,
  },
  title: {
    fontWeight: "bold",
  },
  subtitle: {
    marginTop: 4,
  },

  /* 📚 CHANGED: Replaced cardWrapper with a dynamic side-by-side grid flex container */
  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },

  emptyContainer: {
    alignItems: "center",
    marginTop: 100,
  },
  emptyText: {
    fontWeight: "bold",
  },
  emptySubtext: {
    textAlign: "center",
    marginTop: 10,
    paddingHorizontal: 40,
  },
});
