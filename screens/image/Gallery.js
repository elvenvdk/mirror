import React from "react";
import { StyleSheet, Text, View } from "react-native";

const Gallery = () => {
  return (
    <View style={galleryStyles.container}>
      <Text>Gallery</Text>
    </View>
  );
};

export default Gallery;

const galleryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
