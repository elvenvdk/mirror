import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { useGlobal } from "reactn";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import AuthRouter from "./AuthRouter";
import ImageRouter from "./ImageRouter";

const Stack = createStackNavigator();

const AppRouter = ({ navigation }) => {
  const [user] = useGlobal("user");

  console.log({ USER: user });

  return (
    <NavigationContainer>
      {/* <Stack.Navigator>
        {!user?.UID ? (
          <Stack.Screen
            name="Auth"
            component={AuthRouter}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Home"
            component={ImageRouter}
            options={{ headerShown: false }}
          />
        )}
      </Stack.Navigator> */}

      <Stack.Navigator>
        {/* <Stack.Screen
          name="Auth"
          component={AuthRouter}
          options={{ headerShown: false }}
        /> */}
        <Stack.Screen
          name="Home"
          component={ImageRouter}
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
