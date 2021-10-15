import { auth, db } from "../firebase";
import firebase from "firebase";
import { setGlobal, getGlobal } from "reactn";
require("firebase/firestore");

export const registerUser = async (email, password) => {
  try {
    // TODO email verification
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
    console.log("REGISTERATION UID: ", userCredential.user.uid);
    console.log("UID CONFIRMED...");

    try {
      await db.collection("users").doc(userCredential.user.uid).set({
        email,
        uid: userCredential.user.uid,
      });
    } catch (error) {
      throw error;
    }

    setGlobal({
      user: { UID: userCredential.user.uid, email: userCredential.user.email },
    });
    return { msg: "User registration successful", userCredential };
  } catch (error) {
    console.log({ error });
    return { error };
  }
};

export const signinUser = async (email, password) => {
  try {
    const userCredential = await auth.signInWithEmailAndPassword(
      email,
      password
    );
    setGlobal({
      user: { UID: userCredential.user.uid, email: userCredential.user.email },
    });
    return {
      msg: "User successfully signined-in",
      userCredential: userCredential.user.uid,
    };
  } catch (error) {
    console.log({ SIGNIN_USER_ERROR: error });
    return { error };
  }
};

export const signoutUser = async () => {
  try {
    await auth.signOut();
    return true;
  } catch (error) {
    console.log({ SIGNIN_USER_ERROR: error });
    return { error };
  }
};

export const updateUserEmail = async (email) => {
  try {
  } catch (error) {}
};

export const updateUserPassword = async (password) => {};

export const getUser = async () => {
  const { userUID } = getGlobal();
  console.log("USER UID: ", userUID);
  try {
    const user = await db.collection("users").doc(userUID).get();
    console.log("USER DATA: ", user.data());
    return user.data();
  } catch (error) {
    console.log({ GET_USER_ERROR: error });
  }
};
