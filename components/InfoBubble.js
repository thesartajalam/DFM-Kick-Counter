import React from "react";
import { StyleSheet, View, Text } from "react-native";

const InfoBubble = () => {
  return (
    <View style={styles.bubbleContainer}>
      <Text style={styles.bubbleText}>Stop recording after{"\n"}10 kicks</Text>
      <View style={styles.bubble} />
    </View>
  );
};

export default React.memo(InfoBubble);

const styles = StyleSheet.create({
  bubbleContainer: {
    marginBottom: 20,
    position: "relative",
    marginTop: 100,
    backgroundColor: "rgba(255,255,255,0.9)",
    paddingVertical: 16,
    paddingHorizontal: 50,
    borderRadius: 14,
    alignSelf: "center",
  },

  bubbleText: {
    textAlign: "center",
    fontWeight: "700",
    fontSize: 18,
    color: "#000",
  },
  bubble: {
    position: "absolute",
    bottom: -20,
    alignSelf: "center",
    width: 0,
    height: 0,
    backgroundColor: "transparent",
    borderLeftWidth: 20,
    borderRightWidth: 20,
    borderTopWidth: 20,
    borderLeftColor: "transparent",
    borderRightColor: "transparent",
    borderTopColor: "rgba(255,255,255,0.9)",
  },
});
