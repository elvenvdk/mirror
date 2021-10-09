import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateEmail,
  updatePassword,
} from "firebase/auth";

import { setGlobal } from "reactn";

export const registerUser = async (email, password) => {
  const auth = getAuth();
  try {
    // TODO email verification
    const userCredential = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    setGlobal({ user: userCredential.user });
    return { msg: "User registration successful" };
  } catch (error) {
    console.log({ error });
    return { error };
  }
};

export const signinUser = async (email, password) => {
  const auth = getAuth();
  console.log({ auth });
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password
    );
    setGlobal({
      user: userCredential.user,
    });
    return { msg: "User successfully signined-in", userCredential };
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
