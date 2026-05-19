import { getBookById, getChapterById } from "../constants/books";
import { useDisplaySettings } from "../contexts/DisplaySettingsContext";
import { Stack, useLocalSearchParams, useRouter } from "expo-router";
import React, { useEffect, useRef, useState } from "react";
import {
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

export default function ReadingScreen() {
  const router = useRouter();
  const scrollViewRef = useRef<ScrollView>(null);
  const { id, chapter } = useLocalSearchParams<{
    id?: string;
    chapter?: string;
  }>();
  const { colors, textScale } = useDisplaySettings();
  const book = getBookById(id);
  const selectedChapter = getChapterById(book, chapter);
  const selectedChapterIndex = book.chapters.findIndex(
    (bookChapter) => bookChapter.id === selectedChapter.id,
  );
  const previousChapter = book.chapters[selectedChapterIndex - 1];
  const nextChapter = book.chapters[selectedChapterIndex + 1];
  const [zoom, setZoom] = useState(18);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [contentHeight, setContentHeight] = useState(0);
  const [scrollViewHeight, setScrollViewHeight] = useState(0);
  const [progressBarWidth, setProgressBarWidth] = useState(0);

  useEffect(() => {
    scrollViewRef.current?.scrollTo({ y: 0, animated: false });
    setScrollProgress(0);
  }, [selectedChapter.id]);

  const decreaseZoom = () =>
    setZoom((currentZoom) => Math.max(14, currentZoom - 2));
  const increaseZoom = () =>
    setZoom((currentZoom) => Math.min(28, currentZoom + 2));
  const openChapter = (chapterId: string) => {
    router.setParams({ id: book.id, chapter: chapterId });
  };

  const handleScroll = (event: any) => {
    const { y } = event.nativeEvent.contentOffset;
    const scrollableHeight = contentHeight - scrollViewHeight;
    const progress = scrollableHeight > 0 ? (y / scrollableHeight) * 100 : 0;
    setScrollProgress(Math.min(100, Math.max(0, progress)));
  };

  const handleSliderChange = (value: number) => {
    setScrollProgress(value);
    const scrollableHeight = contentHeight - scrollViewHeight;
    const targetY = (value / 100) * scrollableHeight;
    scrollViewRef.current?.scrollTo({ y: targetY, animated: false });
  };

  return (
    <View style={[styles.container, { backgroundColor: colors.background }]}>
      <Stack.Screen options={{ title: selectedChapter.title }} />

      <View style={[styles.controls, { backgroundColor: colors.surface }]}>
        <TouchableOpacity onPress={decreaseZoom} style={styles.btn}>
          <Text style={[styles.btnText, { fontSize: 14 * textScale }]}>A-</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.zoomText,
            { color: colors.muted, fontSize: 14 * textScale },
          ]}
        >
          {zoom}pt
        </Text>
        <TouchableOpacity onPress={increaseZoom} style={styles.btn}>
          <Text style={[styles.btnText, { fontSize: 14 * textScale }]}>A+</Text>
        </TouchableOpacity>
      </View>

      <View
        style={[styles.progressContainer, { backgroundColor: colors.surface }]}
      >
        <TouchableOpacity
          style={styles.progressBarContainer}
          onPress={(e) => {
            const { locationX } = e.nativeEvent;
            const progressPercentage = (locationX / progressBarWidth) * 100;
            handleSliderChange(Math.min(100, Math.max(0, progressPercentage)));
          }}
          onLayout={(e) => setProgressBarWidth(e.nativeEvent.layout.width)}
          activeOpacity={0.7}
        >
          <View
            style={[
              styles.progressBar,
              {
                width: `${scrollProgress}%`,
                backgroundColor: colors.primary,
              },
            ]}
          />
        </TouchableOpacity>
        <Text style={[styles.progressText, { color: colors.muted }]}>
          {Math.round(scrollProgress)}%
        </Text>
      </View>

      <ScrollView
        ref={scrollViewRef}
        contentContainerStyle={styles.textBody}
        onScroll={handleScroll}
        scrollEventThrottle={16}
        onContentSizeChange={(width, height) => setContentHeight(height)}
        onLayout={(e) => setScrollViewHeight(e.nativeEvent.layout.height)}
      >
        <Text
          style={[
            styles.bookTitle,
            { color: colors.text, fontSize: 22 * textScale },
          ]}
        >
          {book.title}
        </Text>
        <Text
          style={[
            styles.bookAuthor,
            { color: colors.muted, fontSize: 14 * textScale },
          ]}
        >
          by {book.author}
        </Text>
        <Text
          style={[
            styles.chapterTitle,
            { color: colors.primary, fontSize: 16 * textScale },
          ]}
        >
          Chapter {selectedChapterIndex + 1}: {selectedChapter.title}
        </Text>
        <Text
          style={[
            styles.storyText,
            {
              color: colors.text,
              fontSize: zoom * textScale,
              lineHeight: 32 * textScale,
            },
          ]}
        >
          {selectedChapter.content}
        </Text>

        <View style={styles.chapterControls}>
          {!nextChapter ? (
            <View style={styles.endChapterContainer}>
              <Text
                style={[
                  styles.noChapterText,
                  { color: colors.muted, fontSize: 14 * textScale },
                ]}
              >
                No more chapters to read
              </Text>
              <View style={styles.buttonRow}>
                <TouchableOpacity
                  disabled={!previousChapter}
                  onPress={() =>
                    previousChapter && openChapter(previousChapter.id)
                  }
                  style={[
                    styles.chapterBtn,
                    !previousChapter && styles.disabledBtn,
                  ]}
                >
                  <Text
                    style={[
                      styles.chapterBtnText,
                      { fontSize: 14 * textScale },
                    ]}
                  >
                    Previous
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => router.back()}
                  style={styles.chapterBtn}
                >
                  <Text
                    style={[
                      styles.chapterBtnText,
                      { fontSize: 14 * textScale },
                    ]}
                  >
                    Back to Details
                  </Text>
                </TouchableOpacity>
              </View>
            </View>
          ) : (
            <>
              <TouchableOpacity
                disabled={!previousChapter}
                onPress={() =>
                  previousChapter && openChapter(previousChapter.id)
                }
                style={[
                  styles.chapterBtn,
                  !previousChapter && styles.disabledBtn,
                ]}
              >
                <Text
                  style={[styles.chapterBtnText, { fontSize: 14 * textScale }]}
                >
                  Previous
                </Text>
              </TouchableOpacity>
              <TouchableOpacity
                disabled={!nextChapter}
                onPress={() => nextChapter && openChapter(nextChapter.id)}
                style={[styles.chapterBtn, !nextChapter && styles.disabledBtn]}
              >
                <Text
                  style={[styles.chapterBtnText, { fontSize: 14 * textScale }]}
                >
                  Next
                </Text>
              </TouchableOpacity>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1 },
  controls: {
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center",
    gap: 20,
    padding: 15,
  },
  btn: {
    backgroundColor: "#ac3509",
    padding: 10,
    borderRadius: 8,
    width: 50,
    alignItems: "center",
  },
  btnText: { color: "#fff", fontWeight: "bold" },
  zoomText: { fontWeight: "bold" },
  progressContainer: {
    paddingHorizontal: 15,
    paddingVertical: 10,
    flexDirection: "row",
    alignItems: "center",
    gap: 10,
  },
  progressBarContainer: {
    flex: 1,
    height: 6,
    borderRadius: 3,
    overflow: "hidden",
    backgroundColor: "#e0e0e0",
  },
  progressBar: {
    height: "100%",
    borderRadius: 3,
  },
  progressText: {
    fontWeight: "bold",
    minWidth: 40,
  },
  textBody: { padding: 25 },
  bookTitle: {
    fontWeight: "bold",
    marginBottom: 4,
  },
  bookAuthor: {
    marginBottom: 18,
  },
  chapterTitle: {
    fontWeight: "bold",
    marginBottom: 18,
  },
  storyText: { fontFamily: "serif" },
  chapterControls: {
    flexDirection: "row",
    gap: 12,
    marginTop: 30,
  },
  endChapterContainer: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
  },
  buttonRow: {
    flexDirection: "row",
    gap: 12,
    width: "100%",
    marginTop: 12,
  },
  noChapterText: {
    textAlign: "center",
    marginBottom: 16,
    fontStyle: "italic",
  },
  chapterBtn: {
    alignItems: "center",
    backgroundColor: "#ac3509",
    borderRadius: 10,
    flex: 1,
    padding: 14,
  },
  backBtn: {
    alignItems: "center",
    backgroundColor: "#ac3509",
    borderRadius: 10,
    padding: 14,
    width: "60%",
  },
  disabledBtn: {
    opacity: 0.35,
  },
  chapterBtnText: {
    color: "#fff",
    fontWeight: "bold",
  },
});
