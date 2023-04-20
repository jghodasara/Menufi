import React, { useEffect } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Image, Platform } from "react-native";
import Colors from "./common/Colors";
import Restaurants from "./Restaurants";
import Profile from "./Profile";
import { createStackNavigator } from "@react-navigation/stack";
import Menu from "./Menu";

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
          }
        },
        activeTintColor: Colors.YELLOW,
        inactiveTintColor: Colors.mediumGrey,
        tabBarLabelStyle: { marginTop: 20 },
        style: {
          borderTopLeftRadius: 30,
          borderTopRightRadius: 30,
          height: Platform.OS === "android" ? 80 : 100,
          elevation: 0,
          shadowColor: "#000000",
          shadowOffset: { width: 0, height: 10 }, // change this for more shadow
          shadowOpacity: 0.4,
          shadowRadius: 6,
          backgroundColor: "#FFFFFF",
        },
      })}
    >
      <Tab.Screen name="Home" component={Restaurant} />
      <Tab.Screen name="Profile" component={Profile} />
    </Tab.Navigator>
  );
}
