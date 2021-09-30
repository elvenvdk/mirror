import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Registration from "../screens/auth/Registration";
import Login from "../screens/auth/Login";

const Stack = createNativeStackNavigator();

const AuthRouter = ({ navigation }) => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Registration" component={Registration} />
      <Stack.Screen name="Login" component={Login} />
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default AuthRouter;
