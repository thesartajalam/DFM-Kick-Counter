import { Asset } from "expo-asset";
import { StyleSheet } from "react-native";
import AppNavigator from "./navigation/AppNavigator";
import { useEffect } from "react";
import { StatusBar } from "expo-status-bar";

export default function App() {
  useEffect(() => {
    Asset.loadAsync([require("./assets/CounterScreenBackground.png")]);
  }, []);
  return (
    <>
      <StatusBar style="dark" />
      <AppNavigator />
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
