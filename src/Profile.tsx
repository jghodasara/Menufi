import {
  Text,
  StyleSheet,
  View,
  TouchableOpacity,
  Image,
  Dimensions,
  ScrollView,
  Platform,
  SafeAreaView,
} from "react-native";
import React, { Component } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";

const Profile = () => {
  const navigation = useNavigation();
  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.YELLOW }} />
      <View style={styles.mainContainer}>
        <View style={[styles.subContainer]}>
          <View style={styles.header} />
          <View style={styles.logoContainer}>
            <View style={{ width: 25, height: 25 }} />

            <Text style={styles.profileText}>Profile</Text>
            <View style={{ width: 25, height: 25 }} />
          </View>
          <View style={styles.headerLine} />
        </View>

        <View style={styles.container}>
          <View style={styles.imageContainer}>
            <Image
              source={require("./assets/man.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
          <View style={styles.cardContainer}>
            <View style={styles.textContainer}>
              <Text style={styles.text}>First Name</Text>
              <Text style={styles.text}>Coding</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.textContainer}>
              <Text style={styles.text}>Last Name</Text>
              <Text style={styles.text}>Ninjas</Text>
            </View>
            <View style={styles.line} />

            <View style={styles.textContainerLast}>
              <Text style={styles.text}>Email Id</Text>
              <Text style={styles.text}>codingninjas@gmail.com</Text>
            </View>
          </View>

          <TouchableOpacity
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            style={styles.logoutContainer}
          >
            <View style={styles.logoutSubContainer}>
              <Text style={styles.logoutText}>Logout</Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default Profile;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: Colors.BLUE_LIGHT,
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
    marginTop: 15,
  },
  line: {
    backgroundColor: Colors.mediumGrey,
    width: Dimensions.get("screen").width - 32,
    height: 0.5,
    marginTop: 10,
  },
  container: {
    width: Dimensions.get("screen").width - 32,
    marginTop: 30,
    alignSelf: "center",
  },
  imageContainer: {
    width: 120,
    height: 120,
    alignSelf: "center",
    borderRadius: 100,
    backgroundColor: Colors.WHITE,
    marginBottom: 50,
  },
  cardContainer: {
    width: "100%",
    borderRadius: 30,
    shadowColor: "#000",
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    backgroundColor: Colors.WHITE,
    alignSelf: "center",
  },
  textContainer: {
    flexDirection: "row",
    marginBottom: 10,
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  text: { fontSize: 16, color: Colors.GRAY },
  textContainerLast: {
    flexDirection: "row",
    marginBottom: 20,
    marginTop: 20,
    justifyContent: "space-between",
    paddingHorizontal: 20,
  },
  logoutContainer: {
    backgroundColor: Colors.YELLOW,
    borderRadius: 30,
    flexDirection: "column",
    padding: 20,
    marginBottom: 20,
    width: Dimensions.get("screen").width - 32,
    marginTop: 40,
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  logoutSubContainer: {
    justifyContent: "center",
    alignItems: "center",
  },
  logoutText: { fontSize: 18, color: Colors.WHITE },
});
