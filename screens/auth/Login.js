import React, { useState } from "react";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";

const Login = () => {
  const [userCredentials, setUserCredentials] = useState({
    email: "",
    password: "",
  });
  return (
    <View style={styles.container}>
      <Text>Signin Here</Text>
      <TextInput
        style={styles.input}
        placeholder="Email"
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
        onChangeText={(text) => {
          setUserCredentials({
            ...userCredentials,
            password: text,
          });
        }}
      />
      <Button title="Submit" />
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
