import React, { createContext, useContext, useMemo, useState } from "react";

type DisplayColors = {
  background: string;
  surface: string;
  card: string;
  primary: string;
  primaryText: string;
  text: string;
  muted: string;
  border: string;
};

type DisplaySettingsContextValue = {
  isDarkMode: boolean;
  largeText: boolean;
  colors: DisplayColors;
  textScale: number;
  setIsDarkMode: (value: boolean) => void;
  setLargeText: (value: boolean) => void;
};

const DisplaySettingsContext =
  createContext<DisplaySettingsContextValue | undefined>(undefined);

export function DisplaySettingsProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [largeText, setLargeText] = useState(false);

  const value = useMemo<DisplaySettingsContextValue>(() => {
    const colors: DisplayColors = {
      background: isDarkMode ? "#1b1c1c" : "#fcf9f8",
      surface: isDarkMode ? "#292a2a" : "#f0eded",
      card: isDarkMode ? "#242424" : "#fff",
      primary: isDarkMode ? "#ffb59f" : "#ac3509",
      primaryText: "#fff",
      text: isDarkMode ? "#fff" : "#1b1c1c",
      muted: isDarkMode ? "#d8c3bc" : "#59413a",
      border: isDarkMode ? "#5f4037" : "#e0bfb6",
    };

    return {
      isDarkMode,
      largeText,
      colors,
      textScale: largeText ? 1.18 : 1,
      setIsDarkMode,
      setLargeText,
    };
  }, [isDarkMode, largeText]);

  return (
    <DisplaySettingsContext.Provider value={value}>
      {children}
    </DisplaySettingsContext.Provider>
  );
}

export function useDisplaySettings() {
  const context = useContext(DisplaySettingsContext);

  if (!context) {
    throw new Error(
      "useDisplaySettings must be used inside DisplaySettingsProvider",
    );
  }

  return context;
}
