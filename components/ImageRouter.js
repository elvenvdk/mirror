import React from "react";
import { StyleSheet, Text, View } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import ShutterButton from "../screens/image/ShutterButton";
import Gallery from "../screens/image/Gallery";

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const ImageRouter = ({ navigation }) => {
  return (
    <Tab.Navigator initialRouteName="Shutter Button">
      <Tab.Screen name="Shutter Button" component={ShutterButton} />
      <Tab.Screen name="Image Gallery" component={Gallery} />
    </Tab.Navigator>
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
