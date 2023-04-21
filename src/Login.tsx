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
import { isValidEmail, showToast } from "./utils/Utils";
import { loginWithEmailAndPassword } from "./services/FirebaseService";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useAppData } from "./provider/AppStateProvider";

const Login = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const { activeUser, setActiveUser } = useAppData();

  const login = async () => {
    if (email === "") {
      showToast("Please enter email Id");
    } else if (!isValidEmail(email)) {
      showToast("Please enter valid email Id");
    } else if (password === "") {
      showToast("Please enter password");
    } else {
      let response = await loginWithEmailAndPassword(email, password);
      if (response === true) {
        if (activeUser.theme !== undefined) {
          AsyncStorage.setItem(
            "activeUserData",
            JSON.stringify({ email: email, theme: activeUser.theme })
          );
          setActiveUser({ email: email, theme: activeUser.theme });
          AsyncStorage.setItem("isLoggedIn", "true");
          setEmail("");
          setPassword("");
          navigation.navigate("HomeScreen");
        } else {
          AsyncStorage.setItem(
            "activeUserData",
            JSON.stringify({ email: email, theme: "light" })
          );
          setActiveUser({ email: email, theme: "light" });
          AsyncStorage.setItem("isLoggedIn", "true");
          navigation.navigate("HomeScreen");
        }
      }
    }
  };

  return (
    <View
      style={[
        styles.container,
        {
          backgroundColor:
            activeUser.theme === "light" ? Colors.BLUE_LIGHT : Colors.BLACK,
        },
      ]}
    >
      <Image
        style={{ width: 300, height: 300 }}
        source={require("./assets/splash.png")}
      />
      <ScrollView style={styles.scrollViewContainer}>
        <View style={styles.header}>
          <Text
            style={[
              styles.loginText2,
              {
                color:
                  activeUser.theme === "light" ? Colors.BLACK : Colors.WHITE,
              },
            ]}
          >
            Login to Account
          </Text>
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
            placeholder="Enter your email Id"
            style={[
              styles.textInput,
              {
                color:
                  activeUser.theme === "light" ? Colors.BLACK : Colors.WHITE,
                backgroundColor:
                  activeUser.theme === "light"
                    ? Colors.WHITE
                    : Colors.PLACEHOLDER,
              },
            ]}
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
            placeholder="Enter password"
            secureTextEntry={true}
            style={[
              styles.passwordInput,
              {
                color:
                  activeUser.theme === "light" ? Colors.BLACK : Colors.WHITE,
                backgroundColor:
                  activeUser.theme === "light"
                    ? Colors.WHITE
                    : Colors.PLACEHOLDER,
              },
            ]}
            placeholderTextColor={Colors.mediumGrey}
          />
        </View>
        <TouchableOpacity
          onPress={() => {
            login();
          }}
          style={styles.continueButtonContainer}
        >
          <Text style={styles.continueText}>Login</Text>
        </TouchableOpacity>
        <Text
          style={[
            styles.text,
            {
              color: activeUser.theme === "light" ? Colors.BLACK : Colors.WHITE,
            },
          ]}
        >
          Don't have an account?{" "}
          <Text
            onPress={() => {
              navigation.navigate("SignupScreen");
            }}
            style={styles.signUpText}
          >
            Sign Up!
          </Text>
        </Text>
      </ScrollView>
    </View>
  );
};

export default Login;

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
    marginTop: -30,
  },
  loginImage: { width: 230, height: 150, marginTop: 40, alignSelf: "center" },
  header: {
    paddingVertical: 40,
    paddingHorizontal: 20,
    alignItems: "center",
  },
  loginText2: {
    fontSize: 28,
    color: Colors.BLACK,
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
    top: 20,
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
  passwordInput: {
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
    justifyContent: "center",
    alignItems: "center",
  },
  signUpText: {
    fontWeight: "bold",
    color: Colors.YELLOW,
    alignSelf: "center",
    justifyContent: "center",
    alignItems: "center",
  },
});
