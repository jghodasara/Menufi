import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  FlatList,
  Platform,
  StatusBar,
  SafeAreaView,
} from "react-native";
import React, { Component, useEffect, useState } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";
import { getRestaurantsFromFirestore } from "./services/FirestoreService";
import { useAppData } from "./provider/AppStateProvider";

const Restaurants = () => {
  const navigation = useNavigation();
  const [restaurantsData, setRestaurantsData] = useState([]);
  const { activeUser } = useAppData();
  useEffect(() => {
    getRestaurantsList();
  }, []);

  const getRestaurantsList = async () => {
    let restaurants = await getRestaurantsFromFirestore();
    if (restaurants !== undefined && restaurants.length > 0) {
      console.log("REST", restaurants);
      setRestaurantsData(restaurants);
    }
  };

  const getImage = (type) => {
    switch (type) {
      case "mc": {
        return require("./assets/McD.jpeg");
      }
      case "mb": {
        return require("./assets/muchoburrito.png");
      }
      case "subway": {
        return require("./assets/subway.jpeg");
      }
      case "pizza": {
        return require("./assets/pizza.png");
      }
      case "aw": {
        return require("./assets/AW.png");
      }
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.YELLOW }} />
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor:
              activeUser.theme === "light" ? Colors.BLUE_LIGHT : Colors.BLACK,
          },
        ]}
      >
        <View style={[styles.subContainer]}>
          <View style={styles.header} />
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
          data={restaurantsData}
          renderItem={({ item, index }) => (
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("Menu", { restaurantId: item.type });
              }}
              style={[
                styles.container,
                {
                  backgroundColor:
                    activeUser.theme === "light"
                      ? Colors.WHITE
                      : Colors.PLACEHOLDER,
                },
              ]}
            >
              <Image
                style={{ width: "100%", height: "80%" }}
                source={getImage(item.type)}
                resizeMode={"cover"}
              />
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
              >
                {item.name}
              </Text>
            </TouchableOpacity>
          )}
        />
      </View>
    </>
  );
};

export default Restaurants;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",

    justifyContent: "center",
    paddingTop: 0,
  },
  header: {
    width: Dimensions.get("screen").width,
    height: 50,
    backgroundColor: Colors.YELLOW,
    position: "absolute",
  },
  subContainer: {
    flexDirection: "column",
    paddingTop: 10,
  },
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
    marginTop: 15,
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
    marginStart: 15,
    marginTop: 15,
    overflow: "hidden",
  },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginTop: 20,
  },
});
