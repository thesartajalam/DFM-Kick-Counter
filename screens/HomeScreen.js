import { useCallback, useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";
import Header from "../components/Header";
import { useFocusEffect } from "@react-navigation/native";
import ArticleCard from "../components/ArticleCard";
import Button from "../components/Button";
import SessionItem from "../components/SessionItem";
import { loadSessions } from "../storage/sessions";

const HomeScreen = ({ navigation }) => {
  const [sessions, setSessions] = useState([]);
  useEffect(() => {
    navigation.setOptions({
      header: () => (
        <Header
          title="DFM (Kick Counter)"
          rightIcon={<Image source={require("../assets/Badge.png")} />}
          rightPress={() => {}}
          leftIcon={true}
          leftPress={true}
        />
      ),
    });
  }, []);

  useFocusEffect(
    useCallback(() => {
      async function fetchSessions() {
        const data = await loadSessions();
        setSessions(data);
      }
      fetchSessions();
    }, [])
  );

  // const handlePress = () => {
  //   navigation.navigate("Counter");
  // };

  const handlePress = useCallback(async () => {
    console.log("Record Fetal Movement Pressed");
    // await Image.prefetch(
    //   Image.resolveAssetSource(
    //     require("../assets/CounterScreenBackground.png").uri
    //   )
    // );
    navigation.navigate("Counter");
  }, [navigation]);

  const renderSessionItem = useCallback(
    ({ item }) => <SessionItem session={item} />,
    []
  );
  return (
    <View style={styles.container}>
      <ArticleCard />
      <Button
        buttonName="Record Fetal Movement"
        styleButton={{ width: "90%" }}
        onPress={handlePress}
      />
      <View style={{ flex: 1, width: "90%" }}>
        <Text style={styles.sectionTitle}>Past Records</Text>
        {sessions.length === 0 ? (
          <Text style={styles.emptyText}>
            No records yet. Start/Record your first session
          </Text>
        ) : (
          <FlatList
            style={{ flex: 1, paddingBottom: 30 }}
            data={sessions}
            keyExtractor={(item) => item.id}
            // renderItem={({ item }) => <SessionItem session={item} />}
            renderItem={renderSessionItem}
            showsVerticalScrollIndicator={false}
            removeClippedSubviews
            initialNumToRender={10}
            windowSize={5}
          />
        )}
      </View>
    </View>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 30,
    alignItems: "center",
    gap: 50,
    backgroundColor: "#fff",
  },
  sectionTitle: {
    fontSize: 16,
    color: "#000",
    fontWeight: "600",
    marginBottom: 10,
  },
  emptyText: {
    textAlign: "center",
    color: "#666",
    marginTop: 20,
  },
});
