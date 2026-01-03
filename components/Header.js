import React, { memo } from "react";
import { StyleSheet, View, Text, Pressable } from "react-native";

const DashedBorder = React.memo(() => {
  return (
    <View style={{ flexDirection: "row" }}>
      {Array.from({ length: 50 }).map((_, i) => (
        <View
          key={i}
          style={{
            width: 8,
            height: 0.8,
            backgroundColor: "#D2D2D2",
            marginRight: 4,
          }}
        />
      ))}
    </View>
  );
});

const Header = ({ title, rightPress, rightIcon, leftPress, leftIcon }) => {
  return (
    <View style={styles.header}>
      <Text style={styles.title} pointerEvents="none">
        {title}
      </Text>
      {leftPress && leftIcon && (
        <Pressable
          onPress={leftPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          {leftIcon}
        </Pressable>
      )}
      {rightPress && rightIcon && (
        <Pressable
          onPress={rightPress}
          style={({ pressed }) => pressed && styles.pressed}
        >
          {rightIcon}
        </Pressable>
      )}
      <View style={styles.dashedContainer}>
        <DashedBorder />
      </View>
    </View>
  );
};

export default memo(Header);

const styles = StyleSheet.create({
  header: {
    position: "relative",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    backgroundColor: "#fff",
    height: 60,
    width: "100%",
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 22,
    fontWeight: "700",
    position: "absolute",
    left: 0,
    right: 0,
    textAlign: "center",
  },
  pressed: {
    opacity: 0.5,
  },
  dashedContainer: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
  },
});
