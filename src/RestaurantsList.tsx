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
import { useAppData } from "./provider/AppStateProvider";

const RestaurantsList = ({ data, onFavPress }) => {
  const navigation = useNavigation();
  const { activeUser } = useAppData();

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
    <TouchableOpacity
      onPress={() => {
        navigation.navigate("Menu", { restaurantId: data.type });
      }}
      style={[
        styles.container,
        {
          backgroundColor:
            activeUser.theme === "light" ? Colors.WHITE : Colors.PLACEHOLDER,
        },
      ]}
    >
      <Image
        style={{ width: "100%", height: "80%" }}
        source={getImage(data.type)}
        resizeMode={"cover"}
      />
      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          alignItems: "center",
          width: "90%",
          marginTop: 20,
        }}
      >
        <Text
          style={[
            styles.text,
            {
              color: activeUser.theme === "light" ? Colors.BLACK : Colors.WHITE,
            },
          ]}
        >
          {data.name}
        </Text>
        <TouchableOpacity
          onPress={() => {
            onFavPress(data, !data.isFav);
          }}
        >
          <Image
            source={
              data.isFav
                ? require("./assets/Home/favSelected.png")
                : require("./assets/Home/fav.png")
            }
            style={{ width: 25, height: 25 }}
          />
        </TouchableOpacity>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
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
  },
});

export default RestaurantsList;
