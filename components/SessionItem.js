import { StyleSheet, View, Text } from "react-native";
import { formatDate, formatTime } from "../utils/formatter";
import React from "react";

const SessionItem = ({ session }) => {
  console.log(session);
  return (
    <View style={styles.container}>
      <Text style={styles.date}>{formatDate(session.createdAt)}</Text>

      <Text style={styles.time}>{formatTime(session.duration)}</Text>
    </View>
  );
};

export default React.memo(SessionItem);

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 14,
    paddingHorizontal: 16,
    backgroundColor: "#fff",
    borderRadius: 12,
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "#EFEFEF",
  },
  date: {
    fontSize: 14,
    color: "#121212",
    fontWeight: "500",
  },
  time: {
    fontSize: 14,
    color: "#121212",
    fontWeight: "600",
  },
});
