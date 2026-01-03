import { Pressable, Text, StyleSheet, View } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { memo, useState } from "react";

const BookmarkButton = ({ initialSaved = false, onToggle }) => {
  const [saved, setSaved] = useState(initialSaved);

  function handlePress() {
    const newValue = !saved;
    setSaved(newValue);
    onToggle?.(newValue);
  }

  return (
    <Pressable
      onPress={handlePress}
      style={({ pressed }) => [styles.container, pressed && styles.pressed]}
    >
      <Ionicons
        name={saved ? "bookmark" : "bookmark-outline"}
        size={16}
        color="#000"
      />
      <Text style={styles.text}>{saved ? "Saved" : "Save"}</Text>
    </Pressable>
  );
};

export default memo(BookmarkButton);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,

    backgroundColor: "#fff",
    paddingHorizontal: 14,
    paddingVertical: 6,
    borderRadius: 20,

    elevation: 3,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 4,
    shadowOffset: { width: 0, height: 2 },
  },
  text: {
    fontSize: 14,
    fontWeight: "500",
  },
  pressed: {
    opacity: 0.7,
  },
});
