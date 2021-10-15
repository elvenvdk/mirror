import React from "react";
import { StyleSheet, Text, View } from "react-native";

const ShutterButton = () => {
  return (
    <View style={shutterButton.container}>
      <Text>Gallery</Text>
    </View>
  );
};

export default ShutterButton;

const shutterButton = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
