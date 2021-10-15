import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const ShutterButton = () => {
  return (
    <View style={shutterbuttonStyles.container}>
      <TouchableOpacity style={shutterbuttonStyles.button}>
        <Text>Gallery</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ShutterButton;

const shutterbuttonStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  button: {
    backgroundColor: "grey",
    height: "80%",
    width: "90%",
  },
});
