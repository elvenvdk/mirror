import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

import { signinUser } from "../../api/auth";

const Login = () => {
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
      console.log(user.error);
    }
  };

  return (
    <View style={styles.container}>
      <Text>Signin Here</Text>
      <TextInput
        style={styles.input}
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
        style={styles.input}
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
      <Button title="Submit" onPress={() => signinHandler()} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 2,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    fontSize: 18,
  },
  input: {
    width: "95%",
    height: 50,
    textAlign: "center",
    marginTop: 20,
    fontSize: 18,
    backgroundColor: "#dbdbdb",
  },
});

export default Login;
