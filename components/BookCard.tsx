import React from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
} from "react-native";
import type { ImageSourcePropType } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";

// Props exactly as you had them
type BookCardProps = {
  title: string;
  author: string;
  cover?: ImageSourcePropType;
  status?: string;
  isFavorite?: boolean;
  onFavoritePress?: () => void;
  onPress: () => void;
};

// Calculate grid width dynamically (2 items per row)
const { width } = Dimensions.get("window");
const CARD_WIDTH = (width - 60) / 2;

export default function BookCard({
  title,
  author,
  cover,
  status,
  isFavorite = false,
  onFavoritePress,
  onPress,
}: BookCardProps) {
  const { colors, textScale } = useDisplaySettings();

  return (
    <TouchableOpacity style={styles.card} onPress={onPress} activeOpacity={0.8}>
      {/* BIG COVER CONTAINER */}
      <View
        style={[styles.coverContainer, { backgroundColor: colors.surface }]}
      >
        {cover ? (
          <Image source={cover} style={styles.innerCover} />
        ) : (
          <View style={styles.placeholderCover}>
            <Text style={[styles.coverText, { fontSize: 14 * textScale }]}>
              COVER
            </Text>
          </View>
        )}

        {/* ABSOLUTE POSITIONED FAVORITE BUTTON (Top Right of Cover) */}
        {onFavoritePress ? (
          <TouchableOpacity
            accessibilityLabel={
              isFavorite ? "Remove from favorites" : "Add to favorites"
            }
            style={styles.favoriteButton}
            onPress={(event) => {
              event.stopPropagation(); // Prevents clicking the card when tapping the heart
              onFavoritePress();
            }}
          >
            <Ionicons
              color={isFavorite ? colors.primary : "#fff"}
              name={isFavorite ? "heart" : "heart-outline"}
              size={24 * textScale}
              style={styles.heartShadow}
            />
          </TouchableOpacity>
        ) : null}
      </View>

      {/* BOOK INFO SECTION */}
      <View style={styles.info}>
        <Text
          style={[
            styles.title,
            { color: colors.text, fontSize: 15 * textScale },
          ]}
          numberOfLines={2}
        >
          {title}
        </Text>
        <Text
          style={[
            styles.author,
            { color: colors.muted, fontSize: 13 * textScale },
          ]}
          numberOfLines={1}
        >
          {author}
        </Text>

        {/* STATUS TEXT (e.g., "Night reading ready") */}
        {status ? (
          <Text
            style={[
              styles.status,
              { color: colors.primary, fontSize: 11 * textScale },
            ]}
            numberOfLines={1}
          >
            {status}
          </Text>
        ) : null}
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  card: {
    width: CARD_WIDTH,
    marginBottom: 20,
    backgroundColor: "transparent",
  },
  coverContainer: {
    width: "100%",
    aspectRatio: 2 / 3, // Pro book shape
    borderRadius: 12,
    padding: 6,
    elevation: 4,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.15,
    shadowRadius: 5,
    position: "relative", // Required for absolute positioning the heart
  },
  innerCover: {
    flex: 1,
    borderRadius: 8,
    width: "100%",
    height: "100%",
    resizeMode: "cover",
  },
  placeholderCover: {
    flex: 1,
    backgroundColor: "#ac3509", // Primary Warm Orange
    borderRadius: 8,
    justifyContent: "center",
    alignItems: "center",
  },
  coverText: {
    color: "#fff",
    fontWeight: "bold",
    letterSpacing: 0.5,
  },
  favoriteButton: {
    position: "absolute",
    top: 12,
    right: 12,
    backgroundColor: "rgba(0,0,0,0.25)", // Subtle dark circle behind the heart
    borderRadius: 20,
    padding: 4,
    zIndex: 10,
  },
  heartShadow: {
    textShadowColor: "rgba(0, 0, 0, 0.4)",
    textShadowOffset: { width: 0, height: 1 },
    textShadowRadius: 2,
  },
  info: {
    marginTop: 10,
    paddingHorizontal: 2,
  },
  title: {
    fontWeight: "bold",
    lineHeight: 20,
  },
  author: {
    marginTop: 2,
  },
  status: {
    fontWeight: "600",
    marginTop: 4,
  },
});
