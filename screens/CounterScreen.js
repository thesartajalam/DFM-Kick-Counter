import { useCallback, useEffect, useLayoutEffect, useState } from "react";
import {
  ImageBackground,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { v4 as uuidv4 } from "uuid";

import { saveSession } from "../storage/sessions";
import Header from "../components/Header";
import Button from "../components/Button";
import Timer from "../components/Timer";
import InfoBubble from "../components/InfoBubble";
import InfoSheet from "../components/InfoSheet";

const CounterScreen = ({ navigation }) => {
  const [seconds, setSeconds] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [infoVisible, setInfoVisible] = useState(false);

  const handleBack = useCallback(() => {
    navigation.goBack();
  }, [navigation]);

  const handleToggle = useCallback(() => {
    setIsRunning((prev) => !prev);
  }, []);

  const handleSave = useCallback(async () => {
    const session = {
      id: uuidv4(),
      duration: seconds,
      createdAt: new Date().toISOString(),
    };

    await saveSession(session);
    navigation.goBack();
  }, [seconds, navigation]);

  const openInfo = useCallback(() => {
    setInfoVisible(true);
  }, []);

  const closeInfo = useCallback(() => {
    setInfoVisible(false);
  }, []);

  useLayoutEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title="Record DFM"
          leftPress={handleBack}
          leftIcon={<Ionicons name="arrow-back" size={24} color="#000" />}
          rightPress={openInfo}
          rightIcon={
            <Ionicons
              name="information-circle-outline"
              size={24}
              color="#000"
            />
          }
        />
      ),
    });
  }, [navigation, handleBack, openInfo]);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setSeconds((prev) => prev + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [isRunning]);

  const controlIcon = isRunning ? "square" : "play";

  return (
    <ImageBackground
      style={styles.container}
      source={require("../assets/CounterScreenBackground.png")}
      resizeMode="cover"
      imageStyle={styles.bgImage}
    >
      <View>
        <InfoBubble />
        <Timer seconds={seconds} />
      </View>

      <Pressable
        onPress={handleToggle}
        style={[styles.controlButton, !isRunning && styles.playAdjust]}
      >
        <Ionicons name={controlIcon} size={42} color="#000" />
      </Pressable>

      <View>
        <Button
          buttonName="Save"
          styleButton={styles.saveButton}
          onPress={handleSave}
        />

        <Pressable>
          <Text style={styles.helpText}>
            What if I'm not getting{"\n"}enough kicks
          </Text>
        </Pressable>
      </View>

      <InfoSheet visible={infoVisible} onClose={closeInfo} />
    </ImageBackground>
  );
};

export default CounterScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "space-between",
    paddingBottom: 50,
  },

  bgImage: {
    opacity: 0.3,
  },

  controlButton: {
    marginTop: 40,
    alignSelf: "center",
    width: 72,
    height: 72,
    borderRadius: 36,
    backgroundColor: "#FFFFFF",
    justifyContent: "center",
    alignItems: "center",
  },

  playAdjust: {
    paddingLeft: 5,
  },

  saveButton: {
    width: "90%",
    alignSelf: "center",
  },

  helpText: {
    marginTop: 20,
    textAlign: "center",
    textDecorationLine: "underline",
    color: "#000",
    fontSize: 16,
  },
});
