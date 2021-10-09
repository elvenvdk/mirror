import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import ThemeButton from "../../common/ThemeButton";
import { StatusBar } from "expo-status-bar";

import { registerUser } from "../../api/auth";

const Registration = ({ navigation }) => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });

  const registrationHandler = async () => {
    const user = await registerUser(
      userCredentials.email,
      userCredentials.password
    );
    console.log({ user });
    if (user.error) {
      console.log(user.error);
    }
  };

  return (
    <View style={registrationStyles.container}>
      <Text style={registrationStyles.headerText}>Sign Up Here</Text>
      <TextInput
        style={registrationStyles.input}
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
        style={registrationStyles.input}
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
      <ThemeButton title="Signin" btnOnPress={registrationHandler} />

      <View style={registrationStyles.notRegisteredContainer}>
        <Text style={registrationStyles.notRegisteredText}>
          Already signed up?
        </Text>
        <Text
          style={registrationStyles.signupText}
          onPress={() => navigation.navigate("Login")}
        >
          Signin
        </Text>
      </View>
    </View>
  );
};

const registrationStyles = StyleSheet.create({
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

export default Registration;
