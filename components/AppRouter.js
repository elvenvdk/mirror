import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import React from "react";
import { StyleSheet } from "react-native";
import { useGlobal } from "reactn";
import AuthRouter from "./AuthRouter";
import ImageRouter from "./ImageRouter";

const Stack = createStackNavigator();

const AppRouter = ({ navigation }) => {
  const [user] = useGlobal("user");

  console.log({ USER: user });

  return (
    <NavigationContainer>
      <Stack.Navigator>
        {!user?.uid ? (
          <Stack.Screen
            name="Auth"
            component={AuthRouter}
            options={{ headerShown: false }}
          />
        ) : (
          <Stack.Screen
            name="Main"
            component={ImageRouter}
            options={{ headerShown: false }}
          />
        )}
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
