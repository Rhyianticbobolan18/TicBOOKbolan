import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Switch,
  TouchableOpacity,
  Alert,
} from "react-native";
import { useDisplaySettings } from "@/contexts/DisplaySettingsContext";

export default function SettingsScreen() {
  const { colors, isDarkMode, largeText, setIsDarkMode, setLargeText, textScale } =
    useDisplaySettings();
  const [notifications, setNotifications] = useState(true);
  const [mockImportedBook, setMockImportedBook] = useState<string | null>(null);

  const handleImportBook = () => {
    const importedTitle = "Sample Imported PDF";

    setMockImportedBook(importedTitle);
    Alert.alert(
      "Import Book",
      `${importedTitle} was added as a prototype placeholder.`,
    );
  };

  const handleLogout = () => {
    Alert.alert("Logout", "Are you sure you want to sign out?", [
      { text: "Cancel", style: "cancel" },
      { text: "Logout", onPress: () => console.log("Logged out") },
    ]);
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Text
        style={[
          styles.header,
          { color: colors.primary, fontSize: 22 * textScale },
        ]}
      >
        App Settings
      </Text>

      <View style={[styles.settingItem, { borderBottomColor: colors.border }]}>
        <Text
          style={[
            styles.label,
            { color: colors.muted, fontSize: 16 * textScale },
          ]}
        >
          Push Notifications
        </Text>
        <Switch value={notifications} onValueChange={setNotifications} />
      </View>

      <View style={[styles.settingItem, { borderBottomColor: colors.border }]}>
        <Text
          style={[
            styles.label,
            { color: colors.muted, fontSize: 16 * textScale },
          ]}
        >
          Dark Mode
        </Text>
        <Switch value={isDarkMode} onValueChange={setIsDarkMode} />
      </View>

      <View style={[styles.settingItem, { borderBottomColor: colors.border }]}>
        <Text
          style={[
            styles.label,
            { color: colors.muted, fontSize: 16 * textScale },
          ]}
        >
          Accessibility: Large Text
        </Text>
        <Switch value={largeText} onValueChange={setLargeText} />
      </View>

      <Text
        style={[
          styles.statusText,
          { color: colors.muted, fontSize: 13 * textScale },
        ]}
      >
        {notifications
          ? "Notifications are currently enabled."
          : "Notifications are currently muted."}
      </Text>

      <View style={[styles.importSection, { borderBottomColor: colors.border }]}>
        <Text
          style={[
            styles.sectionTitle,
            { color: colors.primary, fontSize: 16 * textScale },
          ]}
        >
          Book Import
        </Text>
        <Text
          style={[
            styles.helperText,
            { color: colors.muted, fontSize: 13 * textScale },
          ]}
        >
          Import your own books to read within the app. (PDFs or many more
          formats)
        </Text>
        <TouchableOpacity style={styles.importBtn} onPress={handleImportBook}>
          <Text style={styles.importText}>Import PDF Book</Text>
        </TouchableOpacity>
        {mockImportedBook ? (
          <Text
            style={[
              styles.importStatus,
              { color: colors.muted, fontSize: 13 * textScale },
            ]}
          >
            Last imported: {mockImportedBook}
          </Text>
        ) : null}
      </View>

      <TouchableOpacity
        style={[styles.logoutBtn, { backgroundColor: colors.surface }]}
        onPress={handleLogout}
      >
        <Text style={styles.logoutText}>Log Out</Text>
      </TouchableOpacity>

      <Text
        style={[
          styles.footer,
          { color: colors.muted, fontSize: 12 * textScale },
        ]}
      >
        TicBOOK Version 1.0
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, padding: 25 },
  header: {
    fontWeight: "bold",
    marginBottom: 30,
  },
  settingItem: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 15,
    borderBottomWidth: 1,
  },
  label: {},
  sectionTitle: {
    fontWeight: "bold",
    marginBottom: 6,
  },
  statusText: {
    marginTop: 18,
  },
  helperText: {
    marginBottom: 12,
  },
  importSection: {
    borderBottomWidth: 1,
    paddingBottom: 22,
    paddingTop: 28,
  },
  importBtn: {
    alignItems: "center",
    backgroundColor: "#ac3509",
    borderRadius: 10,
    padding: 15,
  },
  importText: { color: "#fff", fontWeight: "bold" },
  importStatus: {
    marginTop: 12,
  },
  logoutBtn: {
    marginTop: 40,
    backgroundColor: "#f0eded",
    padding: 15,
    borderRadius: 10,
    alignItems: "center",
  },
  logoutText: { color: "#ac3509", fontWeight: "bold" },
  footer: {
    textAlign: "center",
    marginTop: "auto",
  },
});
