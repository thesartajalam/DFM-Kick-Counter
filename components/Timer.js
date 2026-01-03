import { StyleSheet, View, Text } from "react-native";
import { formatTime } from "../utils/formatter";

const Timer = ({ seconds }) => {
  return (
    <View style={styles.rectangle1}>
      <View style={styles.rectangle2}>
        <View style={styles.rectangle3}>
          <Text style={styles.timerText}>{formatTime(seconds)}</Text>
        </View>
      </View>
    </View>
  );
};

export default Timer;

const styles = StyleSheet.create({
  rectangle1: {
    padding: 15,
    backgroundColor: "rgba(255,255,255,0.4)",
    width: "70%",
    alignSelf: "center",
    borderRadius: 100,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
    zIndex: 1,
  },
  rectangle2: {
    padding: 15,
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 80,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
    zIndex: 2,
  },
  rectangle3: {
    // marginTop: 40,
    // paddingHorizontal: 0,
    paddingVertical: 30,
    alignItems: "center",
    backgroundColor: "rgba(255,255,255,0.4)",
    borderRadius: 60,
    borderWidth: 3,
    borderColor: "rgba(255,255,255,0.8)",
    zIndex: 3,
  },

  timerText: {
    fontSize: 48,
    color: "#EC523D",
    fontWeight: "600",
  },
});
