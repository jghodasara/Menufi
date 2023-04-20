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
  TextInput,
} from "react-native";
import React, { Component, useEffect, useState, useContext } from "react";
import Colors from "./common/Colors";
import { useNavigation } from "@react-navigation/core";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getUserData, updateUser } from "./services/FirestoreService";
import { showToast } from "./utils/Utils";
import { AppStateContext, useAppData } from "./provider/AppStateProvider";
import { firebase } from "@react-native-firebase/auth";

const Profile = () => {
  const navigation = useNavigation();
  const [fName, setFName] = useState("");
  const [lName, setLName] = useState("");
  const [email, setEmail] = useState("");
  const [id, setId] = useState("");
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { activeUser, setActiveUser } = useAppData();

  useEffect(() => {
    setSelectedIndex(activeUser.theme === "light" ? 0 : 1);
    getUserInfo();
  }, []);

  const getUserInfo = async () => {
    let userData = await getUserData(activeUser.email);
    console.log("USER DATA", userData);
    if (userData.length > 0) {
      setFName(userData[0].fName);
      setLName(userData[0].lName);
      setEmail(userData[0].email);
      setId(userData[0].id);
    }
  };

  return (
    <>
      <SafeAreaView style={{ backgroundColor: Colors.YELLOW }} />
      <View
        style={[
          styles.mainContainer,
          {
            backgroundColor:
              activeUser.theme === "light" ? Colors.BLUE_LIGHT : Colors.BLACK,
          },
        ]}
      >
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
          <View
            style={[
              styles.imageContainer,
              {
                backgroundColor:
                  activeUser.theme === "light"
                    ? Colors.BLUE_LIGHT
                    : Colors.BLACK,
              },
            ]}
          >
            <Image
              source={require("./assets/man.png")}
              style={{ width: 120, height: 120 }}
            />
          </View>
          <View
            style={[
              styles.cardContainer,
              {
                backgroundColor:
                  activeUser.theme === "light"
                    ? Colors.WHITE
                    : Colors.PLACEHOLDER,
              },
            ]}
          >
            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
              >
                First Name
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
                onChangeText={(text) => {
                  setFName(text);
                }}
                value={fName}
              />
              {/* <Text style={styles.text}>Coding</Text> */}
            </View>
            <View style={styles.line} />

            <View style={styles.textContainer}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
              >
                Last Name
              </Text>
              <TextInput
                style={[
                  styles.input,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
                onChangeText={(text) => {
                  setLName(text);
                }}
                value={lName}
              />
            </View>
            <View style={styles.line} />

            <View style={styles.textContainerLast}>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
              >
                Email Id
              </Text>
              <Text
                style={[
                  styles.text,
                  {
                    color:
                      activeUser.theme === "light"
                        ? Colors.BLACK
                        : Colors.WHITE,
                  },
                ]}
              >
                {email}
              </Text>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              width: "100%",
              justifyContent: "space-around",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(0);
                  setActiveUser({ email: activeUser.email, theme: "light" });
                  AsyncStorage.setItem(
                    "activeUserData",
                    JSON.stringify({ email: activeUser.email, theme: "light" })
                  );
                }}
                style={styles.radioButton}
              >
                <View
                  style={[
                    styles.radioButtonIcon,
                    {
                      backgroundColor:
                        selectedIndex === 0 ? Colors.mediumGrey : Colors.WHITE,
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(0);
                  setActiveUser({ email: activeUser.email, theme: "light" });
                  AsyncStorage.setItem(
                    "activeUserData",
                    JSON.stringify({ email: activeUser.email, theme: "light" })
                  );
                }}
              >
                <Text
                  style={[
                    styles.radioButtonText,
                    {
                      color:
                        activeUser.theme === "light"
                          ? Colors.BLACK
                          : Colors.WHITE,
                    },
                  ]}
                >
                  Light
                </Text>
              </TouchableOpacity>
            </View>
            <View style={styles.radioButtonContainer}>
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(1);
                  setActiveUser({ email: activeUser.email, theme: "dark" });
                  AsyncStorage.setItem(
                    "activeUserData",
                    JSON.stringify({ email: activeUser.email, theme: "dark" })
                  );
                }}
                style={styles.radioButton}
              >
                <View
                  style={[
                    styles.radioButtonIcon,
                    {
                      backgroundColor:
                        selectedIndex === 1 ? Colors.mediumGrey : Colors.WHITE,
                    },
                  ]}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => {
                  setSelectedIndex(1);
                  setActiveUser({ email: activeUser.email, theme: "dark" });
                  AsyncStorage.setItem(
                    "activeUserData",
                    JSON.stringify({ email: activeUser.email, theme: "dark" })
                  );
                }}
              >
                <Text
                  style={[
                    styles.radioButtonText,
                    {
                      color:
                        activeUser.theme === "light"
                          ? Colors.BLACK
                          : Colors.WHITE,
                    },
                  ]}
                >
                  Dark
                </Text>
              </TouchableOpacity>
            </View>
          </View>

          <View
            style={{
              flexDirection: "row",
              justifyContent: "space-between",
              alignItems: "center",
              marginTop: 40,
            }}
          >
            <TouchableOpacity
              onPress={async () => {
                let response = await updateUser(fName, lName, id);
                if (response) {
                  showToast("Profile updated successfully");
                } else {
                  showToast("Something went wrong");
                }
              }}
              style={styles.saveContainer}
            >
              <View style={styles.logoutSubContainer}>
                <Text style={styles.saveText}>Save</Text>
              </View>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => {
                firebase.auth().signOut();
                AsyncStorage.setItem("isLoggedIn", "false");
                navigation.navigate("LoginScreen");
              }}
              style={[
                styles.logoutContainer,
                {
                  backgroundColor:
                    activeUser.theme === "light"
                      ? Colors.WHITE
                      : Colors.PLACEHOLDER,
                },
              ]}
            >
              <View style={styles.logoutSubContainer}>
                <Text
                  style={[
                    styles.logoutText,
                    {
                      color:
                        activeUser.theme === "light"
                          ? Colors.BLACK
                          : Colors.WHITE,
                    },
                  ]}
                >
                  Logout
                </Text>
              </View>
            </TouchableOpacity>
          </View>
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
  saveContainer: {
    backgroundColor: Colors.YELLOW,
    borderRadius: 30,
    flexDirection: "column",
    padding: 20,
    width: "47%",
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
  saveText: { fontSize: 18, color: Colors.WHITE },
  logoutContainer: {
    borderRadius: 30,
    flexDirection: "column",
    padding: 20,
    width: "47%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.1,
    shadowRadius: 5,
  },
  logoutText: { fontSize: 18, color: Colors.WHITE },
  input: {
    borderWidth: 0,
    fontSize: 16,
    color: Colors.BLACK,
  },
  radioButtonContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginRight: 45,
  },
  radioButton: {
    height: 20,
    width: 20,
    backgroundColor: Colors.WHITE_100,
    borderRadius: 10,
    borderWidth: 1,
    borderColor: Colors.WHITE_200,
    alignItems: "center",
    justifyContent: "center",
  },
  radioButtonIcon: {
    height: 14,
    width: 14,
    borderRadius: 7,
    backgroundColor: Colors.mediumGrey,
  },
  radioButtonText: {
    fontSize: 16,
    marginLeft: 16,
  },
});
