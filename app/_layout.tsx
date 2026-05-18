import { useEffect, useState } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { Stack } from "expo-router";
import {
  DisplaySettingsProvider,
  useDisplaySettings,
} from "@/contexts/DisplaySettingsContext";
import { FavoritesProvider } from "@/contexts/FavoritesContext";

// ✅ Splash Screen Logo
const splashLogo = require("../assets/logo/splashscreenlogo.png");

export default function RootLayout() {
  return (
    <DisplaySettingsProvider>
      <FavoritesProvider>
        <RootStack />
      </FavoritesProvider>
    </DisplaySettingsProvider>
  );
}

function RootStack() {
  const { colors, textScale } = useDisplaySettings();
  const [showSplash, setShowSplash] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setShowSplash(false), 1800);

    return () => clearTimeout(timer);
  }, []);

  if (showSplash) {
    return (
      <View style={[styles.splash, { backgroundColor: colors.background }]}>
        {/* ✅ Splash Logo */}
        <Image
          source={splashLogo}
          style={styles.splashLogo}
          resizeMode="contain"
        />

        {/* ✨ Sophisticated Quote Design */}
        <View style={styles.quoteContainer}>
          {/* Decorative Quote Mark */}
          <Text style={[styles.quoteMark, { color: colors.primary }]}>“</Text>

          {/* Quote Text */}
          <Text
            style={[
              styles.splashQuote,
              { color: colors.muted, fontSize: 16 * textScale },
            ]}
          >
            Every story is a door waiting to open.
          </Text>

          {/* Decorative Underline */}
          <View
            style={[styles.quoteLine, { backgroundColor: colors.primary }]}
          />
        </View>
      </View>
    );
  }

  return (
    <Stack
      screenOptions={{
        headerStyle: { backgroundColor: "#ac3509" },
        headerTintColor: colors.primaryText,
        headerBackButtonDisplayMode: "minimal",
        contentStyle: { backgroundColor: colors.background },
      }}
    >
      <Stack.Screen name="(tabs)" options={{ headerShown: false }} />
      <Stack.Screen name="details" options={{ title: "Book Details" }} />
      <Stack.Screen name="chapters" options={{ title: "Chapters" }} />
      <Stack.Screen name="reading" options={{ title: "Now Reading" }} />
    </Stack>
  );
}

const styles = StyleSheet.create({
  splash: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
    padding: 32,
  },

  // ✅ Splash logo styling
  splashLogo: {
    width: 220,
    height: 220,
    marginBottom: 4,
  },

  /* ✨ Sophisticated Quote Container */
  quoteContainer: {
    alignItems: "center",
    marginTop: -6,
    paddingHorizontal: 24,
  },

  // ✨ Decorative quotation mark
  quoteMark: {
    fontSize: 42,
    fontWeight: "300",
    marginBottom: -12,
    opacity: 0.8,
  },

  // ✨ Quote text styling
  splashQuote: {
    lineHeight: 28,
    textAlign: "center",
    fontStyle: "italic",
    letterSpacing: 0.6,
  },

  // ✨ Decorative underline
  quoteLine: {
    width: 70,
    height: 2,
    borderRadius: 2,
    marginTop: 14,
    opacity: 0.7,
  },
});