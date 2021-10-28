import React, { useEffect } from "react";
import { StyleSheet } from "react-native";
import { useGlobal } from "reactn";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { useRoute } from "@react-navigation/native";

import BluetoothConnect from "../common/BluetoothConnect";

import SettingsButton from "../common/SettingsButton";
import BackBtn from "../common/BackBtn";

import TabsRouter from "./TabsRouter";
import Options from "./OptionsRouter";

const Stack = createNativeStackNavigator();

const ImageRouter = ({ navigation }) => {
  const [currentRoute, setCurrentRoute] = useGlobal("currentRoute");
  const route = useRoute();

  useEffect(() => {
    setCurrentRoute(route.name);
  }, []);

  console.log({ ROUTE_NAME: currentRoute });

  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerRight: () => <BluetoothConnect />,
        headerStyle: {
          height: 100,
        },
        headerLeft: () =>
          currentRoute === "Settings" ? <BackBtn /> : <SettingsButton />,
        headerStyle: {
          height: 100,
        },
      }}
    >
      <Stack.Screen name="Home" component={TabsRouter} />
      <Stack.Screen name="Settings" component={Options} />
    </Stack.Navigator>
  );
};

const ImageRouterStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default ImageRouter;
