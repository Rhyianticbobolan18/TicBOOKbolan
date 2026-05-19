import { useDisplaySettings } from "../../contexts/DisplaySettingsContext";
import { Ionicons } from "@expo/vector-icons";
import { Tabs } from "expo-router";

export default function TabLayout() {
  const { colors } = useDisplaySettings();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: colors.primary,
        tabBarInactiveTintColor: colors.muted,
        tabBarStyle: {
          backgroundColor: colors.background,
          borderTopColor: colors.border,
          borderTopWidth: 1,
          paddingBottom: 8,
          paddingTop: 8,
          height: 70,
        },
        tabBarLabelStyle: {
          fontSize: 12,
          fontWeight: "600",
          marginTop: 4,
        },
        headerStyle: { backgroundColor: "#ac3509" },
        headerTintColor: "#ffffff",
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: "Home",
          headerShown: false,
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "home" : "home-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="favorites"
        options={{
          title: "Favorites",
          headerTitle: "Liked Books",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "heart" : "heart-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: "Settings",
          tabBarIcon: ({ focused, color }) => (
            <Ionicons
              name={focused ? "settings" : "settings-outline"}
              size={28}
              color={color}
            />
          ),
        }}
      />
    </Tabs>
  );
}
