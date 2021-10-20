import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  FlatList,
} from "react-native";

import ImageCarousel from "../../common/ImageCarousel";

import { getImages } from "../../api/images";

const ShutterButton = () => {
  const [images, setImages] = useState([]);

  const fetchImages = async () => {
    const userImages = await getImages();
    setImages(userImages);
    if (userImages.error) {
      console.log({ USER_IMAGES_ERROR: userImages.error });
    }
  };
  useEffect(() => {
    fetchImages();
  }, []);

  console.log({ USER_IMAGES: images });

  return (
    <View style={shutterbuttonStyles.container}>
      <View>
        <Text>Images</Text>
      </View>
      <ImageCarousel userImages={images} />
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
