import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";
import React, { useEffect } from "react";
import { useGlobal } from "reactn";
import { StyleSheet } from "react-native";
import BluetoothConnect from "../common/BluetoothConnect";
import Options from "../screens/Options/Options";
import UpdateEmail from "../screens/auth/UpdateEmail";
import UpdatePassword from "../screens/auth/UpdatePassword";

const Stack = createNativeStackNavigator();

const UserRouter = ({ navigation }) => {
  const [currentRoute, setCurrentRoute] = useGlobal("currentRoute");

  const route = useRoute();

  useEffect(() => {
    setCurrentRoute(route.name);
  }, []);

  return (
    <Stack.Navigator
      initialRouteName="Options"
      // screenOptions={{
      //   headerRight: () => <BluetoothConnect />,
      //   headerStyle: {
      //     height: 100,
      //   },
      // }}
    >
      <Stack.Screen
        name="Options"
        component={Options}
        options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Update Email"
        component={UpdateEmail}
        // options={{ headerShown: false }}
      />
      <Stack.Screen
        name="Update Password"
        component={UpdatePassword}
        // options={{ headerShown: false }}
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
