import { auth, db } from "../firebase";

import { setGlobal } from "reactn";

export const registerUser = async (email, password) => {
  try {
    // TODO email verification
    const userCredential = await auth.createUserWithEmailAndPassword(
      email,
      password
    );
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
      user: userCredential.user.uid,
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

export const updateUserEmail = async (email) => {
  try {
  } catch (error) {}
};

export const updateUserPassword = async (password) => {
  try {
  } catch (error) {}
};
