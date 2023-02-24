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
import React, { Component, useState } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";
import { signupWithEmailAndPassword } from "./services/FirebaseService";
import { isValidEmail, showToast } from "./utils/Utils";

const SignUp = () => {
  const navigation = useNavigation();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");

  const registerUser = async () => {
    if (fName === "") {
      showToast("Please enter first name");
    } else if (lName === "") {
      showToast("Please enter last name");
    } else if (email === "") {
      showToast("Please enter email Id");
    } else if (!isValidEmail(email)) {
      showToast("Please enter valid email Id");
    } else if (password === "") {
      showToast("Please enter password");
    } else {
      let response = await signupWithEmailAndPassword(email, password);
      if (response === true) {
        navigation.navigate("HomeScreen");
      }
    }
  };

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
          <TextInput
            value={fName}
            onChangeText={(text) => {
              setFName(text);
            }}
            placeholder="First Name"
            style={styles.textInput}
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>

        <View style={[styles.textInputContainer]}>
          <Image
            source={require("./assets/person.png")}
            style={styles.lnameIcon}
          />
          <TextInput
            value={lName}
            onChangeText={(text) => {
              setLName(text);
            }}
            placeholder="Last Name"
            style={styles.textInput2}
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Image
            source={require("./assets/email.png")}
            style={styles.emailIcon}
          />
          <TextInput
            value={email}
            onChangeText={(text) => {
              setEmail(text);
            }}
            placeholder="Email Id"
            style={styles.textInput2}
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>

        <View style={styles.textInputContainer}>
          <Image
            source={require("./assets/password.png")}
            style={styles.passwordIcon}
          />
          <TextInput
            value={password}
            onChangeText={(text) => {
              setPassword(text);
            }}
            placeholder="Password"
            secureTextEntry={true}
            style={styles.textInput2}
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            registerUser();
          }}
          style={styles.continueButtonContainer}
        >
          <Text style={styles.continueText}>Sign Up</Text>
        </TouchableOpacity>
        <Text style={styles.text}>
          Already have an account?{" "}
          <Text
            onPress={() => {
              navigation.navigate("LoginScreen");
            }}
            style={styles.signUpText}
          >
            Login!
          </Text>
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
    color: Colors.BLACK,
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
    color: Colors.BLACK,
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
