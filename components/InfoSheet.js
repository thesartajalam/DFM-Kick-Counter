import { BlurView } from "expo-blur";
import React from "react";
import { Modal, View, Text, StyleSheet, Image, Pressable } from "react-native";

const STEPS = [
  {
    id: 1,
    parts: [
      { text: "Choose a time ", bold: true },
      {
        text: "when you are least distracted or when you typically feel the fetus move.",
        bold: false,
      },
    ],
  },
  {
    id: 2,
    parts: [
      { text: "Get comfortable. ", bold: true },
      { text: "Lie on your ", bold: false },
      { text: "left side", bold: true },
      { text: " or sit with your feet propped up.", bold: false },
    ],
  },
  {
    id: 3,
    parts: [{ text: "Place your hands on your belly.", bold: true }],
  },
  {
    id: 4,
    parts: [
      { text: "Start a timer ", bold: true },
      { text: "or watch the clock.", bold: false },
    ],
  },
  {
    id: 5,
    parts: [
      { text: "Count each kick. ", bold: true },
      { text: "Keep counting until you get to ", bold: false },
      {
        text: "10 kicks / flutters / swishes / rolls.",
        bold: true,
      },
    ],
  },
  {
    id: 6,
    parts: [
      { text: "Once you reach 10 kicks, ", bold: true },
      { text: "jot down how many minutes it took.", bold: false },
    ],
  },
];

const InfoSheet = ({ visible, onClose }) => {
  return (
    <Modal
      visible={visible}
      animationType="fade"
      transparent
      onRequestClose={onClose}
    >
      <BlurView style={styles.overlay} intensity={70} tint="dark">
        <Pressable onPress={onClose} style={styles.closeContainer}>
          <Text style={styles.closeIcon}>✕</Text>
        </Pressable>
        <View style={styles.sheet}>
          <View style={styles.sheetTitle}>
            <Image source={require("../assets/Footprints.png")} />
            <Text style={styles.sheetTitleText}>
              Steps to count fetal kicks
            </Text>
          </View>
          <View
            style={{
              maxHeight: "100%",
              borderRadius: 20,
              backgroundColor: "#ffffffff",
              overflow: "hidden",
            }}
          >
            {STEPS.map((step, stepIndex) => {
              const isEven = stepIndex % 2 === 0;

              return (
                <View
                  key={step.id}
                  style={[
                    styles.stepContainer,
                    isEven ? styles.whiteBg : styles.greyBg,
                  ]}
                >
                  <View
                    style={{ flexDirection: "row", alignItems: "flex-start" }}
                  >
                    <Text style={{ width: 20, fontWeight: "700" }}>
                      {stepIndex + 1}.
                    </Text>
                    <Text style={styles.step}>
                      {step.parts.map((part, index) => (
                        <Text
                          key={index}
                          style={part.bold ? styles.bold : null}
                        >
                          {part.text}
                        </Text>
                      ))}
                    </Text>
                  </View>
                </View>
              );
            })}
          </View>
        </View>
      </BlurView>
    </Modal>
  );
};

export default React.memo(InfoSheet);

const styles = StyleSheet.create({
  overlay: {
    flex: 1,
    // backgroundColor: "rgba(0,0,0,0.6)",
    justifyContent: "center",
    alignItems: "center",
  },

  sheet: {
    backgroundColor: "#rgba(239, 239, 239, 0.3)",
    borderRadius: 20,
    paddingHorizontal: 5,
    paddingVertical: 5,
    maxHeight: "52%",
    maxWidth: "95%",
  },

  sheetTitle: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#FFF",
    gap: 10,
    padding: 20,
    marginBottom: 5,
    borderRadius: 20,
  },

  sheetTitleText: {
    fontSize: 20,
    fontWeight: "bold",
    color: "#121212",
  },

  closeContainer: {
    alignSelf: "flex-end",
    backgroundColor: "rgba(239,239,239,0.2)",
    borderRadius: 22,
    height: 44,
    width: 44,
    marginRight: 20,
    marginBottom: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  closeIcon: {
    fontSize: 25,
  },

  stepContainer: {
    padding: 12,
  },

  whiteBg: {
    backgroundColor: "#FFFFFF",
  },

  greyBg: {
    backgroundColor: "#EFEFEF",
  },

  step: {
    fontSize: 14,
    color: "#333",
    lineHeight: 20,
  },

  bold: {
    fontWeight: "600",
  },
  pressed: {
    opacity: 0.7,
  },
});

const getSteps = (styles) => [
  {
    id: 1,
    text: (
      <>
        <Text style={styles.bold}>1. Choose a time </Text>
        when you are least distracted or when you typically feel the fetus move.
      </>
    ),
  },
  {
    id: 2,
    text: (
      <>
        <Text style={styles.bold}>2. Get comfortable. </Text>
        Lie on your <Text style={styles.bold}>left side</Text> or sit with your
        feet propped up.
      </>
    ),
  },
  {
    id: 3,
    text: (
      <>
        <Text style={styles.bold}>3. Place your hands on your belly.</Text>
      </>
    ),
  },
  {
    id: 4,
    text: (
      <>
        <Text style={styles.bold}>4. Start a timer </Text>
        or watch the clock.
      </>
    ),
  },
  {
    id: 5,
    text: (
      <>
        <Text style={styles.bold}>5. Count each kick. </Text>
        Keep counting until you get to{" "}
        <Text style={styles.bold}>10 kicks / flutters / swishes / rolls.</Text>
      </>
    ),
  },
  {
    id: 6,
    text: (
      <>
        <Text style={styles.bold}>6. Once you reach 10 kicks, </Text>
        jot down how many minutes it took.
      </>
    ),
  },
];
