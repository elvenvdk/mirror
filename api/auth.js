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
    const user = auth().currentUser;
    console.log({ AUTH_CURRENT_USER: user });
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
    setGlobal({ user: {} });
    return true;
  } catch (error) {
    console.log({ SIGNIN_USER_ERROR: error });
    return { error };
  }
};

export const updateUserEmail = async (email) => {
  try {
    const user = auth().currentUser;
    await user.updateEmail(email);
    await db().collection("users").doc(user.uid).update({
      email,
    });
    return { msg: "Email successfully updated" };
  } catch (error) {
    console.log({ UPDATE_EMAIL_ERROR: error });
    return { error };
  }
};

export const updateUserPassword = async (password) => {
  try {
    const user = auth().currentUser;
    await user.updatePassword(password);
    return { msg: "Password successfully updated" };
  } catch (error) {
    console.log({ UPDATE_PW_EROR: error });
    return { error };
  }
};

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
