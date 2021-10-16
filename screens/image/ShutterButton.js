import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

import ImageCarousel from "../../common/ImageCarousel";

const ShutterButton = () => {
  return (
    <View style={shutterbuttonStyles.container}>
      {/* <View>
        <Text>Images</Text>
      </View> */}
      <ImageCarousel />
      <TouchableOpacity style={shutterbuttonStyles.button}>
        <Text>Press Here</Text>
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
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "grey",
    height: "80%",
    width: "90%",
  },
  buttonText: {},
});
