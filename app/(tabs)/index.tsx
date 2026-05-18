import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TextInput,
  Dimensions,
  Image,
} from "react-native";
import { useRouter } from "expo-router";
import BookCard from "@/components/BookCard";
import { books } from "@/constants/books";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";
import { useFavorites } from "@/contexts/FavoritesContext";

const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 60) / 2;
const CARD_GAP = 15;

// ✅ ONLY Home Screen Logo
const homeLibraryLogo = require("../../assets/logo/homelibrarylogo.png");

// Custom scrollbar layout rules
const SCROLLBAR_TRACK_WIDTH = 100;
const SCROLLBAR_THUMB_WIDTH = 35;

export default function LibraryHomeScreen() {
  const router = useRouter();
  const { colors, isDarkMode, textScale } = useDisplaySettings();
  const { isFavorite, toggleFavorite } = useFavorites();
  const [searchQuery, setSearchQuery] = useState("");

  const [scrollProgress, setScrollProgress] = useState(0);

  const continueReading = books.slice(2, 5);

  const filteredBooks = books.filter((book) =>
    `${book.title} ${book.author} ${book.genre}`
      .toLowerCase()
      .includes(searchQuery.toLowerCase()),
  );

  const handleHorizontalScroll = (event: any) => {
    const { contentOffset, contentSize, layoutMeasurement } = event.nativeEvent;
    const maxScrollableWidth = contentSize.width - layoutMeasurement.width;

    if (maxScrollableWidth > 0) {
      const progress = contentOffset.x / maxScrollableWidth;
      setScrollProgress(progress);
    }
  };

  const maxThumbTravel = SCROLLBAR_TRACK_WIDTH - SCROLLBAR_THUMB_WIDTH;
  const thumbTranslateX = scrollProgress * maxThumbTravel;

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <View style={styles.header}>
        {/* ✅ Header Left Section */}
        <View style={styles.logoContainer}>
          {/* ✅ Home Logo */}
          <Image
            source={homeLibraryLogo}
            style={styles.homeLogo}
            resizeMode="contain"
          />

          {/* ✅ App Name */}
          <View>
            <Text style={[styles.logo, { fontSize: 24 * textScale }]}>
              TicBOOK
            </Text>

            <Text style={[styles.tagline, { fontSize: 12 * textScale }]}>
              Your reading shelf
            </Text>
          </View>
        </View>
      </View>

      <ScrollView contentContainerStyle={styles.content}>
        <Text
          style={[
            styles.sectionTitle,
            { color: colors.primary, fontSize: 20 * textScale },
          ]}
        >
          Continue Reading
        </Text>

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          contentContainerStyle={styles.horizontalScroll}
          style={styles.horizontalScrollViewContainer}
          onScroll={handleHorizontalScroll}
          scrollEventThrottle={16}
          snapToInterval={CARD_WIDTH + CARD_GAP}
          decelerationRate="fast"
        >
          {continueReading.map((book) => (
            <BookCard
              key={book.id}
              title={book.title}
              author={book.author}
              cover={book.cover}
              status={isDarkMode ? "Night reading ready" : "Continue"}
              isFavorite={isFavorite(book.id)}
              onFavoritePress={() => toggleFavorite(book.id)}
              onPress={() =>
                router.push({ pathname: "/details", params: { id: book.id } })
              }
            />
          ))}
        </ScrollView>

        {/* 🎯 High-Visibility Custom Linear Scrollbar Track */}
        <View style={styles.scrollbarContainer}>
          <View
            style={[styles.scrollbarTrack, { backgroundColor: colors.border }]}
          >
            <View
              style={[
                styles.scrollbarThumb,
                {
                  backgroundColor: colors.primary,
                  transform: [{ translateX: thumbTranslateX }],
                },
              ]}
            />
          </View>
        </View>

        <View style={[styles.searchPanel, { backgroundColor: colors.surface }]}>
          <Text
            style={[
              styles.sectionTitle,
              { color: colors.primary, fontSize: 20 * textScale },
            ]}
          >
            My Collection
          </Text>

          <TextInput
            style={[
              styles.searchInput,
              {
                backgroundColor: colors.card,
                borderColor: colors.border,
                color: colors.text,
              },
            ]}
            placeholder="Search by title, author, or genre..."
            placeholderTextColor={colors.muted}
            value={searchQuery}
            onChangeText={setSearchQuery}
            clearButtonMode="while-editing"
          />
        </View>

        <View style={styles.gridRow}>
          {filteredBooks.length > 0 ? (
            filteredBooks.map((book) => (
              <BookCard
                key={book.id}
                title={book.title}
                author={book.author}
                cover={book.cover}
                status={book.genre}
                isFavorite={isFavorite(book.id)}
                onFavoritePress={() => toggleFavorite(book.id)}
                onPress={() =>
                  router.push({ pathname: "/details", params: { id: book.id } })
                }
              />
            ))
          ) : (
            <View style={styles.emptyBox}>
              <Text
                style={[
                  styles.emptyText,
                  { color: colors.muted, fontSize: 14 * textScale },
                ]}
              >
                {`No books found matching "${searchQuery}"`}
              </Text>
            </View>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },

  header: {
    paddingTop: 60,
    paddingBottom: 20,
    paddingHorizontal: 20,
    backgroundColor: "#ac3509",
    flexDirection: "row",
    alignItems: "center",
  },

  // ✅ Header logo area
  logoContainer: {
    flexDirection: "row",
    alignItems: "center",
  },

  // ✅ Home screen logo
  homeLogo: {
    width: 55,
    height: 55,
    marginRight: 14,
  },

  logo: {
    fontWeight: "900",
    color: "#fff",
  },

  tagline: {
    color: "#ffe4dc",
    marginTop: 2,
  },

  content: {
    padding: 20,
    paddingBottom: 40,
  },

  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 15,
  },

  horizontalScrollViewContainer: {
    marginBottom: 5,
  },

  horizontalScroll: {
    flexDirection: "row",
    paddingRight: 20,
    gap: CARD_GAP,
  },

  /* 🎯 Linear Scroll Bar Sheet Configurations */
  scrollbarContainer: {
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    marginBottom: 25,
  },

  scrollbarTrack: {
    width: SCROLLBAR_TRACK_WIDTH,
    height: 4,
    borderRadius: 2,
    position: "relative",
    overflow: "hidden",
  },

  scrollbarThumb: {
    width: SCROLLBAR_THUMB_WIDTH,
    height: "100%",
    borderRadius: 2,
    position: "absolute",
    left: 0,
    top: 0,
  },

  gridRow: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    width: "100%",
  },

  searchPanel: {
    borderRadius: 12,
    marginTop: 16,
    marginBottom: 16,
    padding: 16,
  },

  searchInput: {
    padding: 12,
    borderRadius: 10,
    borderWidth: 1,
  },

  emptyBox: {
    marginTop: 30,
    alignItems: "center",
    width: "100%",
  },

  emptyText: {
    textAlign: "center",
    fontStyle: "italic",
  },
});
