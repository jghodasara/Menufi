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

const App: () => Node = () => {
  return (
    <SafeAreaView style={styles.container}>
      {/* Uncomment the below screens to check the UI of each screen one by one */}
      <SplashScreen />
      {/* <Login /> */}
      {/* <SignUp /> */}
      {/* <Profile /> */}
      {/* <Restaurants /> */}
      {/* <Menu /> */}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default App;
