import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";

import ShutterButton from "../screens/image/ShutterButton";
import Gallery from "../screens/image/Gallery";

const Stack = createNativeStackNavigator();

const ImageRouter = ({ navigation }) => {
  return (
    <Stack.Navigator initialRouteName="Shutter Button">
      <Stack.Screen name="Shutter Button" component={ShutterButton} />
      <Stack.Screen name="Image Gallery" component={Gallery} />
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
