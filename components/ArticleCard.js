import { Image, ImageBackground, StyleSheet, Text, View } from "react-native";
import BookmarkButton from "./BookmarkButton";
import { memo } from "react";

const ArticleCard = () => {
  return (
    <ImageBackground
      source={require("../assets/ArticleCardBackground.jpg")}
      style={styles.outerContainer}
      resizeMode="cover"
      imageStyle={{ height: "100%", width: "100%", opacity: 0.9 }}
    >
      <View style={styles.content}>
        <View style={styles.top}>
          <View style={styles.leapAndArtcles}>
            <Image source={require("../assets/Leap.png")} style={styles.leap} />
            <Text style={styles.articlesText}>Articles</Text>
          </View>
          <BookmarkButton />
        </View>
        <Text style={styles.dfmText}>DFM(fetal movement)</Text>
      </View>
    </ImageBackground>
  );
};

export default memo(ArticleCard);

const styles = StyleSheet.create({
  outerContainer: {
    height: "20%",
    width: "90%",
    borderRadius: 20,
    overflow: "hidden",
  },
  content: {
    flex: 1,
    padding: 20,
    justifyContent: "space-between",
  },
  top: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  leapAndArtcles: {
    flexDirection: "row",
  },
  leap: {
    height: 24,
    width: 48,
  },
  articlesText: {
    fontSize: 14,
    fontWeight: "bold",
    color: "#121212",
  },
  dfmText: {
    fontSize: 16,
    color: "#fff",
    fontWeight: "bold",
  },
});
