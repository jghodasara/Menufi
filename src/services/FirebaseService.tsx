import auth from "@react-native-firebase/auth";
import { showToast } from "../utils/Utils";

export const signupWithEmailAndPassword = async (email, password) => {
  try {
    let response = await auth().createUserWithEmailAndPassword(email, password);
    return true;
  } catch (e) {
    if (e.code === "auth/email-already-in-use") {
      showToast("This email address is already registered");
    }else if(e.code === "auth/weak-password"){
      showToast("Your password is too weak. Please try entering a strong password")
    }
    return false;
  }
};

export const loginWithEmailAndPassword = async (email, password) => {
  try {
    await auth().signInWithEmailAndPassword(email, password);
    return true;
  } catch (e) {
    if (e.code === "auth/user-not-found") {
      showToast("There is no account associated with this email Id");
    }else if(e.code === "auth/wrong-password"){
      showToast("Entered password is invalid");
    }
    return false;
  }
};
