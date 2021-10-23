import { createNativeStackNavigator } from "@react-navigation/native-stack";
import React from "react";
import { StyleSheet } from "react-native";
import BluetoothConnect from "../common/BluetoothConnect";
import Options from "../screens/Options/Options";

const Stack = createNativeStackNavigator();

const UserRouter = ({ navigation }) => {
  return (
    <Stack.Navigator
      initialRouteName="Options"
      screenOptions={{
        tabBarShowLabel: false,
        headerRight: () => <BluetoothConnect />,
        headerStyle: {
          height: 100,
        },
      }}
    >
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ headerShown: false }}
      />
    </Stack.Navigator>
  );
};

const userRouterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default UserRouter;
