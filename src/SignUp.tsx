import {
  Text,
  StyleSheet,
  View,
  Image,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  TextInput,
  Platform,
} from "react-native";
import React, { Component } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";

const SignUp = () => {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <Image
        style={{ width: 250, height: 150, marginTop: -30 }}
        source={require("./assets/MenuFi.png")}
      />
      <View
        style={{
          width: "100%",
          height: 0.2,
          backgroundColor: Colors.mediumGrey,
          marginTop: -20,
        }}
      ></View>
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text style={styles.loginText2}>Create an Account</Text>
        </View>

        <View style={styles.textInputContainer}>
          <Image
            source={require("./assets/person.png")}
            style={styles.fnameIcon}
          />
          <TextInput placeholder="First Name" style={styles.textInput} />
        </View>

        <View style={[styles.textInputContainer]}>
          <Image
            source={require("./assets/person.png")}
            style={styles.lnameIcon}
          />
          <TextInput placeholder="Last Name" style={styles.textInput2} />
        </View>

        <View style={styles.textInputContainer}>
          <Image
            source={require("./assets/email.png")}
            style={styles.emailIcon}
          />
          <TextInput placeholder="Email Id" style={styles.textInput2} />
        </View>

        <View style={styles.textInputContainer}>
          <Image
            source={require("./assets/password.png")}
            style={styles.passwordIcon}
          />
          <TextInput
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput2}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            navigation.navigate("Home");
          }}
          style={styles.continueButtonContainer}
        >
          <Text style={styles.continueText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Already have an account?{" "}
          <TouchableOpacity
            style={{
              justifyContent: "center",
              alignItems: "center",
            }}
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
          >
            <Text style={styles.signUpText}>Login!</Text>
          </TouchableOpacity>
        </Text>
      </ScrollView>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.BLUE_LIGHT,
    marginTop: Platform.OS === "ios" ? 50 : 0,
  },
  scrollViewContainer: {
    flexDirection: "column",
    alignSelf: "flex-start",
    paddingHorizontal: 16,
    width: "100%",
    marginTop: 0,
  },
  loginImage: { width: 230, height: 150, marginTop: 40, alignSelf: "center" },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  loginText2: {
    fontSize: 28,
    color: Colors.BLACK_200,
    fontWeight: "bold",
  },
  textInputContainer: { flexDirection: "row" },
  emailIcon: {
    width: 27,
    height: 18,
    marginStart: 10,
    position: "absolute",
    left: 10,
    zIndex: 4,
    top: 40,
  },
  passwordIcon: {
    width: 30,
    height: 15,
    marginStart: 10,
    position: "absolute",
    left: 10,
    zIndex: 4,
    top: 42,
  },
  fnameIcon: {
    width: 30,
    height: 20,
    marginStart: 10,
    position: "absolute",
    left: 10,
    zIndex: 4,
    top: 20,
  },
  lnameIcon: {
    width: 30,
    height: 20,
    marginStart: 10,
    position: "absolute",
    left: 10,
    zIndex: 4,
    top: 40,
  },
  textInput2: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    paddingStart: 60,
    marginTop: 20,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  textInput: {
    width: "100%",
    height: 60,
    backgroundColor: Colors.WHITE,
    borderRadius: 50,
    paddingStart: 60,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  continueButtonContainer: {
    width: "100%",
    height: 60,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: Colors.YELLOW,
    borderRadius: 50,
    zIndex: 2,
    marginTop: 50,
    shadowOffset: {
      width: 0,
      height: 5,
    },
    shadowRadius: 4,
    shadowOpacity: 0.06,
  },
  continueText: {
    color: Colors.WHITE,
    fontSize: 18,
    fontWeight: "bold",
  },
  text: {
    fontSize: 16,
    alignSelf: "center",
    color: Colors.BLACK,
    marginTop: 30,
  },
  signUpText: { fontWeight: "bold", color: Colors.YELLOW },
});
