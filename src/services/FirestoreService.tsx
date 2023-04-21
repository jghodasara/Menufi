import firestore from "@react-native-firebase/firestore";
import { showToast } from "../utils/Utils";
import { UserData } from "../types/types";
import { useAppData } from "../provider/AppStateProvider";

export const getRestaurantsFromFirestore = async (email) => {
  let restaurantsArray = [];
  try {
    return await firestore()
      .collection("restaurants")
      .get()
      .then(async (querySnapshot) => {
        let favRestaurants = [];
        return await firestore()
          .collection("favorite")
          .where("email", "==", email)
          .get()
          .then((favSnap) => {
            if (favSnap.empty) {
              querySnapshot.forEach((documentSnapshot) => {
                let restaurantData = documentSnapshot.data();
                restaurantData.isFav = false;
                restaurantsArray.push(restaurantData);
              });
            } else {
              querySnapshot.forEach((documentSnapshot) => {
                let restaurantData = documentSnapshot.data();
                let isFavRest = false;
                let docId = "";
                favSnap.forEach((fav) => {
                  let favId = fav.data().id;
                  if (restaurantData.id === favId) {
                    isFavRest = true;
                    docId = fav.data().docId;
                  }
                });
                if (isFavRest) {
                  restaurantData.isFav = true;
                  restaurantData.docId = docId;
                } else {
                  restaurantData.isFav = false;
                }
                restaurantsArray.push(restaurantData);
              });
            }

            return restaurantsArray;
          });
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

export const getUserData = async (email): Promise<UserData | undefined> => {
  let userData: UserData = {};
  try {
    return await firestore()
      .collection("users")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          let data = documentSnapshot.data();
          data.id = documentSnapshot.id;
          userData = data;
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

export const addToFav = async (id, name, type, email) => {
  try {
    let docId = stringGen();
    return firestore()
      .collection("favorite")
      .doc(docId)
      .set({
        id: id,
        name: name,
        docId: docId,
        type: type,
        email: email,
      })
      .then(() => {
        console.log("Fav added!");
        return docId;
      });
  } catch (e) {
    showToast("Something went wrong");
    return null;
  }
};

export const removeFromFav = async (docId) => {
  console.log("DOC ID", docId);
  try {
    return firestore()
      .collection("favorite")
      .doc(docId)
      .delete()
      .then(() => {
        console.log("Fav removed!");
        return true;
      });
  } catch (e) {
    showToast("Something went wrong");
    return false;
  }
};

export const getFavoriteRestaurants = async (email) => {
  let restaurantArray = [];
  try {
    return await firestore()
      .collection("favorite")
      .where("email", "==", email)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((documentSnapshot) => {
          let data = documentSnapshot.data();
          data.isFav = true;
          restaurantArray.push(data);
        });
        return restaurantArray;
      });
  } catch (e) {
    showToast("Something went wrong");
    return restaurantArray;
  }
};

const stringGen = (): string => {
  var text = "";
  var possible =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < 11; i++)
    text += possible.charAt(Math.floor(Math.random() * possible.length));

  return text;
};
