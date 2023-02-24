import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import Colors from "./common/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";

const Menu = () => {
  const navigation = useNavigation();
  const { params } = useRoute();

  console.log("Parameter received from restaurant screen", params.restaurantId);

  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.YELLOW }} />
      <View style={styles.mainContainer}>
        <View style={[styles.subContainer]}>
          <View style={styles.header} />
          <View style={styles.logoContainer}>
            <TouchableOpacity
              onPress={() => {
                navigation.goBack();
              }}
            >
              <Image
                source={require("./assets/backWhite.png")}
                style={{ width: 30, height: 30 }}
              />
            </TouchableOpacity>

            <Text style={styles.profileText}>Menu</Text>
            <View style={{ width: 25, height: 25 }} />
          </View>
          <View style={styles.headerLine} />
        </View>
        <FlatList
          horizontal={false}
          contentContainerStyle={styles.contentContainer}
          style={styles.flatListStyle}
          showsVerticalScrollIndicator={false}
          data={[
            { title: "Egg Burger", price: "2.00" },
            { title: "French Fries", price: "5.00" },
            { title: "Chocolate Shake", price: "4.00" },
            { title: "Burrito", price: "6.00" },
            { title: "Iced Coffee", price: "7.00" },
            { title: "Flurry", price: "5.00" },
            { title: "Nuggets", price: "6.00" },
            { title: "Spicy Chicken Burger", price: "12.00" },
          ]}
          renderItem={({ item, index }) => (
            <TouchableOpacity style={styles.container}>
              <View style={styles.flatListSubContainer}>
                <Image
                  style={styles.image}
                  source={
                    item.title === "Egg Burger"
                      ? require("./assets/menu/eggBurger.jpeg")
                      : item.title === "French Fries"
                      ? require("./assets/menu/fries.jpeg")
                      : item.title === "Chocolate Shake"
                      ? require("./assets/menu/chocolateShake.jpeg")
                      : item.title === "Burrito"
                      ? require("./assets/menu/burrito.jpeg")
                      : item.title === "Iced Coffee"
                      ? require("./assets/menu/coffee.jpeg")
                      : item.title === "Flurry"
                      ? require("./assets/menu/flurry.jpeg")
                      : item.title === "Nuggets"
                      ? require("./assets/menu/Nuggets.jpeg")
                      : item.title === "Spicy Chicken Burger"
                      ? require("./assets/menu/spicyChicken.jpeg")
                      : null
                  }
                  resizeMode={"cover"}
                />
                <Text style={styles.text}>{item.title}</Text>
              </View>
              <Text style={styles.text}>$ {item.price}</Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default Menu;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.BLUE_LIGHT,
    justifyContent: "center",
    paddingTop: 0,
  },
  header: {
    width: Dimensions.get("screen").width,
    height: 50,
    backgroundColor: Colors.YELLOW,
    position: "absolute",
  },
  subContainer: { flexDirection: "column", paddingTop: 10 },
  logoContainer: {
    flexDirection: "row",
    width: Dimensions.get("screen").width,
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 16,
  },
  profileText: {
    fontSize: 20,
    color: Colors.WHITE,
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
    width: Dimensions.get("screen").width - 20,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "space-between",
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
    padding: 20,
  },
  flatListSubContainer: { flexDirection: "row", alignItems: "center" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    color: Colors.BLACK,
    marginStart: 20,
  },
  image: { width: 70, height: 70 },
});
