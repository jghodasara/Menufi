import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component, useEffect } from "react";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppData } from "./provider/AppStateProvider";

const SplashScreen = () => {
  const navigation = useNavigation();
  const { activeUser, setActiveUser } = useAppData();

  useEffect(() => {
    AsyncStorage.getItem("isLoggedIn").then((res) => {
      if (res !== null && res === "true") {
        setTimeout(() => {
          AsyncStorage.getItem("activeUserData").then((res) => {
            if (res !== null) {
              let data = JSON.parse(res);
              setActiveUser({ email: data.email, theme: data.theme });
              navigation.navigate("HomeScreen");
            }
          });
        }, 3000);
      } else {
        setTimeout(() => {
          AsyncStorage.getItem("activeUserData").then((res) => {
            if (res !== null) {
              let data = JSON.parse(res);
              setActiveUser({ email: data.email, theme: data.theme });
              navigation.navigate("LoginScreen");
            } else {
              setActiveUser({ email: "", theme: "light" });
              navigation.navigate("LoginScreen");
            }
          });
        }, 3000);
      }
    });
  }, []);

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 300, height: 300 }}
        source={require("./assets/splash.png")}
      ></Image>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen;
