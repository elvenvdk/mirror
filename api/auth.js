import { setGlobal, getGlobal } from "reactn";

import auth from "@react-native-firebase/auth";
import db from "@react-native-firebase/firestore";

export const registerUser = async (email, password) => {
  try {
    // TODO email verification
    const userCredential = await auth().createUserWithEmailAndPassword(
      email,
      password
    );

    try {
      await db()
        .collection("users")
        .doc(userCredential.user.uid)
        .set({
          email,
          uid: userCredential.user.uid,
          imageBucket: `${userCredential.user.uid}/images`,
          mirrorOwner: false,
          mirrorId: null,
        });
      const currentUser = await db()
        .collection("users")
        .doc(userCredential.user.uid)
        .get();
      console.log({ CURRENT_USER: currentUser.data() });
      setGlobal({ user: currentUser.data() });
    } catch (error) {
      throw error;
    }
  } catch (error) {
    console.log({ error });
    return { error };
  }
};

export const signinUser = async (email, password) => {
  try {
    const userCredential = await auth().signInWithEmailAndPassword(
      email,
      password
    );
    const currentUser = await db()
      .collection("users")
      .doc(userCredential.user.uid)
      .get();
    setGlobal({
      user: currentUser.data(),
    });
    return {
      msg: "User successfully signined-in",
      userCredential: currentUser.data().uid,
    };
  } catch (error) {
    console.log({ SIGNIN_USER_ERROR: error });
    return { error };
  }
};

export const signoutUser = async () => {
  try {
    await auth().signOut();
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
    const user = await db().collection("users").doc(userUID).get();
    console.log("USER DATA: ", user.data());
    return user.data();
  } catch (error) {
    console.log({ GET_USER_ERROR: error });
  }
};
