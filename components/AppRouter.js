import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthRouter from "./AuthRouter";

import { FIREBASE_CLIENT_EMAIL } from "@env";

const Stack = createStackNavigator();

const AppRouter = ({ navigation }) => {
  console.log("CLIENT_EMAIL ", FIREBASE_CLIENT_EMAIL);
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Auth"
          component={AuthRouter}
          options={{ headerShown: false }}
        />
      </Stack.Navigator>
    </NavigationContainer>
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

export default AppRouter;
