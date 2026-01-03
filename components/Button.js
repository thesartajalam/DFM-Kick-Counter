import { memo } from "react";
import { StyleSheet, Pressable, Text } from "react-native";

const Button = ({ buttonName, styleButton, styleText, onPress }) => {
  return (
    <Pressable
      style={({ pressed }) => [
        styles.buttonContainer,
        styleButton,
        pressed && styles.pressed,
      ]}
      onPress={onPress}
    >
      <Text style={[styles.buttonText, styleText]}>{buttonName}</Text>
    </Pressable>
  );
};

export default memo(Button);

const styles = StyleSheet.create({
  buttonContainer: {
    borderWidth: 1,
    borderColor: "#000",
    borderRadius: 30,
    paddingVertical: 14,
    alignItems: "center",
    backgroundColor: "#fff",
  },

  buttonText: {
    fontSize: 16,
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.5,
  },
});
