import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Alert } from "react-native";
import ThemeButton from "../../common/ThemeButton";

import { signinUser } from "../../api/auth";

const Login = ({ navigation }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const signinHandler = async () => {
    const user = await signinUser(
      userCredentials.email,
      userCredentials.password
    );
    console.log({ user });
    if (user.error) {
      Alert.alert("Authentication Error", "Incorrect usename or password");
    }
  };

  return (
    <View style={loginStyles.container}>
      <Text style={loginStyles.headerText}>Signin Here</Text>
      <TextInput
        style={loginStyles.input}
        placeholder="Email"
        autoCapitalize="none"
        textContentType="emailAddress"
        onChangeText={(text) =>
          setUserCredentials({
            ...userCredentials,
            email: text,
          })
        }
      />
      <TextInput
        style={loginStyles.input}
        placeholder="Password"
        textContentType="password"
        secureTextEntry={true}
        autoCapitalize="none"
        onChangeText={(text) => {
          setUserCredentials({
            ...userCredentials,
            password: text,
          });
        }}
      />
      <ThemeButton title="Signin" btnOnPress={signinHandler} />

      <View style={loginStyles.notRegisteredContainer}>
        <Text style={loginStyles.notRegisteredText}>Not registered?</Text>
        <Text
          style={loginStyles.signupText}
          onPress={() => navigation.navigate("Registration")}
        >
          Signup
        </Text>
      </View>
    </View>
  );
};

const loginStyles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  headerText: {
    fontSize: 20,
    fontWeight: "600",
  },
  input: {
    width: "95%",
    height: 50,
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    backgroundColor: "#dbdbdb",
  },
  notRegisteredContainer: {
    flexDirection: "row",
  },
  notRegisteredText: {
    fontSize: 18,
  },
  signupText: {
    fontSize: 18,
    color: "#B3630D",
    marginLeft: 2,
  },
});

export default Login;
