/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from "react";
import type { Node } from "react";
import { SafeAreaView, StyleSheet } from "react-native";
import SplashScreen from "./src/SplashScreen";
import Login from "./src/Login";
import SignUp from "./src/SignUp";
import Profile from "./src/Profile";
import Restaurants from "./src/Restaurants";
import Menu from "./src/Menu";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import HomeTabs from "./src/Tabs";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator;

const App: () => Node = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerShown: false,
          gestureEnabled: false,
          gestureDirection: "horizontal",
        }}
        initialRouteName={"SplashScreen"}
      >
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="LoginScreen" component={Login} />
        <Stack.Screen name="SignupScreen" component={SignUp} />
        <Stack.Screen name="Home" component={HomeTabs} />
        <Stack.Screen name="MenuScreen" component={Menu} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#000",
  },
});

export default App;
