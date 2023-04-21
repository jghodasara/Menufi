import firestore from "@react-native-firebase/firestore";
import { showToast } from "../utils/Utils";

export const getRestaurantsFromFirestore = async () => {
  let restaurantsArray = [];
  try {
    return await firestore()
      .collection("restaurants")
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          restaurantsArray.push(documentSnapshot.data());
        });
        return restaurantsArray;
      });
  } catch (e) {
    showToast("Something went wrong");
  }
};

export const getMenuOfRestaurant = async (type) => {
  let menuArray = [];
  try {
    return await firestore()
      .collection("menu")
      .where("type", "==", type)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          menuArray.push(documentSnapshot.data());
        });
        return menuArray;
      });
  } catch (e) {
    showToast("Something went wrong");
  }
};

export const saveUser = async (fName, lName, password, email) => {
  try {
    return firestore()
      .collection("users")
      .add({
        fName: fName,
        lName: lName,
        password: password,
        email: email,
      })
      .then(() => {
        console.log("User added!");
        return true;
      });
  } catch (e) {
    showToast("Something went wrong");
    return false;
  }
};

export const getUserData = async (email) => {
  let userData = [];
  try {
    return await firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          let data = documentSnapshot.data();
          data.id = documentSnapshot.id;
          userData.push(data);
        });
        return userData;
      });
  } catch (e) {
    showToast("Something went wrong");
    return userData;
  }
};

export const updateUser = async (fName, lName, id) => {
  try {
    return await firestore()
      .collection("users")
      .doc(id)
      .update({
        fName: fName,
        lName: lName,
      })
      .then(() => {
        console.log("User Updated!");
        return true;
      });
  } catch (e) {
    showToast("Something went wrong");
    return false;
  }
};
