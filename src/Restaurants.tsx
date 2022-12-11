import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Platform,
} from "react-native";
import React, { Component } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";

const Restaurants = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.mainContainer}>
      <View style={[styles.subContainer]}>
        <View style={styles.logoContainer}>
          <View style={{ width: 25, height: 25 }} />

          <Text style={styles.profileText}>Restaurants</Text>
          <View style={{ width: 25, height: 25 }} />
        </View>
        <View style={styles.headerLine} />
      </View>

      <FlatList
        numColumns={2}
        contentContainerStyle={styles.contentContainer}
        style={styles.flatListStyle}
        showsVerticalScrollIndicator={false}
        data={[
          { title: "Mc Donalds" },
          { title: "A&W" },
          { title: "Subway" },
          { title: "Mucho Burrito" },
          { title: "Pizza Pizza" },
        ]}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() => {
              navigation.navigate("Menu");
            }}
            style={styles.container}
          >
            <Image
              style={{ width: "100%", height: "80%" }}
              source={
                item.title === "Mc Donalds"
                  ? require("./assets/McD.jpeg")
                  : item.title === "Subway"
                  ? require("./assets/subway.jpeg")
                  : item.title === "A&W"
                  ? require("./assets/AW.png")
                  : item.title === "Mucho Burrito"
                  ? require("./assets/muchoburrito.png")
                  : item.title === "Pizza Pizza"
                  ? require("./assets/pizza.png")
                  : null
              }
              resizeMode={"cover"}
            />
            <Text style={styles.text}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.BLUE_LIGHT,
    justifyContent: "center",
    marginTop: Platform.OS === "ios" ? 50 : 0,
  },
  subContainer: { flexDirection: "column", marginTop: 20 },
  logoContainer: {
    flexDirection: "row",
    width: Dimensions.get("screen").width,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileText: {
    fontSize: 20,
    color: Colors.BLACK,
    fontWeight: "bold",
  },
  headerLine: {
    backgroundColor: Colors.mediumGrey,
    width: Dimensions.get("screen").width,
    height: 0.5,
    marginTop: 10,
  },
  contentContainer: {
    justifyContent: "space-between",
    alignItems: "center",
    alignSelf: "center",
  },
  flatListStyle: {
    width: Dimensions.get("screen").width,
    marginStart: -7,
    marginBottom: 0,
  },
  container: {
    height: 300,
    width: Dimensions.get("screen").width / 2 - 20,
    alignItems: "center",
    flexDirection: "column",
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: Colors.WHITE,
    marginStart: 15,
    marginTop: 15,
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BLACK,
    marginTop: 20,
  },
});
