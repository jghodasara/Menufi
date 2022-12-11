import { Text, StyleSheet, View, Image } from "react-native";
import React, { Component,useEffect } from "react";
import { useNavigation } from "@react-navigation/core";

const SplashScreen = () => {

  const navigation = useNavigation()
  
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate("LoginScreen");
    }, 3000);
  }, []);

    return (
      <View style={styles.container}>
        <Image
          style={{ width: 300, height: 300 }}
          source={require("./assets/splash.png")}
        ></Image>
      </View>
    );
  }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
});

export default SplashScreen
