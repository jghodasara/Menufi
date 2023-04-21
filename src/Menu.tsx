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
import React, { Component, useEffect, useState } from "react";
import Colors from "./common/Colors";
import { useNavigation, useRoute } from "@react-navigation/core";
import { getMenuOfRestaurant } from "./services/FirestoreService";
import { useAppData } from "./provider/AppStateProvider";

const Menu = () => {
  const navigation = useNavigation();
  const { params } = useRoute();
  const [menuData, setMenuData] = useState([]);
  const { activeUser } = useAppData();

  useEffect(() => {
    getMenu();
  }, []);

  const getMenu = async () => {
    let menu = await getMenuOfRestaurant(params.restaurantId);
    if (menu !== undefined && menu.length > 0) {
      setMenuData(menu);
    }
  };

  const getImage = (type) => {
    switch (type) {
      case "1": {
        return require("./assets/menu/CheeseBurger.jpeg");
      }
      case "2": {
        return require("./assets/menu/chocolateShake.jpeg");
      }
      case "3": {
        return require("./assets/menu/coffee.jpeg");
      }
      case "4": {
        return require("./assets/menu/DoubleChicken.jpeg");
      }
      case "5": {
        return require("./assets/menu/eggBurger.jpeg");
      }
      case "6": {
        return require("./assets/menu/fries.jpeg");
      }
      case "7": {
        return require("./assets/menu/flurry.jpeg");
      }
      case "8": {
        return require("./assets/menu/hotdog.jpeg");
      }
      case "9": {
        return require("./assets/menu/Nuggets.jpeg");
      }
      case "10": {
        return require("./assets/menu/onionRings.jpeg");
      }
      case "11": {
        return require("./assets/menu/ques.jpeg");
      }
      case "12": {
        return require("./assets/menu/spicyChicken.jpeg");
      }
      case "13": {
        return require("./assets/menu/burrito.jpeg");
      }
      case "14": {
        return require("./assets/menu/frings.jpeg");
      }
      case "15": {
        return require("./assets/menu/nachos.jpeg");
      }
      case "16": {
        return require("./assets/menu/rotiWrap.jpeg");
      }
      case "17": {
        return require("./assets/menu/tacos.jpeg");
      }
      case "18": {
        return require("./assets/menu/FourCheesePizza.jpeg");
      }
      case "19": {
        return require("./assets/menu/ItalianPizza.jpeg");
      }
      case "20": {
        return require("./assets/menu/VeggiesPizza.jpeg");
      }
      case "21": {
        return require("./assets/menu/PeperroniPizza.jpeg");
      }
      case "22": {
        return require("./assets/menu/ques.jpeg");
      }
      case "23": {
        return require("./assets/menu/ChickenSub.jpeg");
      }
      case "24": {
        return require("./assets/menu/ChickenBaconSub.png");
      }
      case "25": {
        return require("./assets/menu/HamAndBacon.jpeg");
      }
      case "26": {
        return require("./assets/menu/TeriyakiChickenSub.jpeg");
      }
      case "27": {
        return require("./assets/menu/Veggie.png");
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
          data={menuData}
          renderItem={({ item, index }) => (
            <TouchableOpacity
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
              <View style={styles.flatListSubContainer}>
                <Image
                  style={styles.image}
                  source={getImage(item.id)}
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
              </View>
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
                {item.price}
              </Text>
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
    marginStart: 15,
    marginTop: 15,
    overflow: "hidden",
    padding: 20,
  },
  flatListSubContainer: { flexDirection: "row", alignItems: "center" },
  text: {
    fontSize: 18,
    fontWeight: "bold",
    marginStart: 20,
  },
  image: { width: 70, height: 70 },
});
