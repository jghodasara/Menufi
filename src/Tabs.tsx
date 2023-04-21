import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform } from "react-native";
import Colors from "./common/Colors";
import Restaurants from "./Restaurants";
import Profile from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./Menu";
import Favorite from "./Favorites";

const Tab = createBottomTabNavigator();

const RestaurantStack = createStackNavigator();

function Restaurant() {
  return (
    <RestaurantStack.Navigator
      screenOptions={{ headerShown: false }}
      initialRouteName={"RestaurantScreen"}
    >
      <RestaurantStack.Screen name="RestaurantScreen" component={Restaurants} />
      <RestaurantStack.Screen name="Menu" component={Menu} />
    </RestaurantStack.Navigator>
  );
}

export default function HomeTabs() {
  return (
    <Tab.Navigator
      initialRouteName={"Home"}
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused, color, size }) => {
          // return tab icons
          if (route.name === "Home") {
            return (
              <Image
                style={{ width: 30, height: 30, marginTop: 20 }}
                source={
                  focused
                    ? require("./assets/Home/HomeSelected.png")
                    : require("./assets/Home/Home.png")
                }
              />
            );
          } else if (route.name === "Profile") {
            return (
              <Image
                style={{ width: 30, height: 30, marginTop: 20 }}
                source={
                  focused
                    ? require("./assets/Home/profileSelected.png")
                    : require("./assets/Home/profile.png")
                }
              />
            );
          } else if (route.name === "Favorite") {
            return (
              <Image
                style={{ width: 25, height: 25, marginTop: 20 }}
                source={
                  focused
                    ? require("./assets/Home/favSelected.png")
                    : require("./assets/Home/fav.png")
                }
              />
            );
          }
        },
        activeTintColor: Colors.YELLOW,
        inactiveTintColor: Colors.mediumGrey,
        tabBarLabelStyle: { color: Colors.BLACK, marginTop: 20 },
      })}
    >
      <Tab.Screen name="Favorite" component={Favorite} />
      <Tab.Screen name="Home" component={Restaurant} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
