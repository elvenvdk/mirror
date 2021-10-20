import React, { useEffect, useState } from "react";
import { StyleSheet, Text, View } from "react-native";

import Carousel from "react-native-snap-carousel";

const ImageCarousel = ({ userImages }) => {
  const [images, setImages] = useState(userImages);

  const renderItem = ({ item, idx }) => (
    <View>
      <Text>{item.title}</Text>
    </View>
  );

  return (
    <View style={container}>
      {userImages?.length ? (
        <Carousel
          data={userImages}
          renderItem={renderItem()}
          layout={"stack"}
          layoutCardOffset={"18"}
        />
      ) : (
        <Text style={noImagesText}>No Images Yet...</Text>
      )}
    </View>
  );
};

const imageCarouselStyles = StyleSheet.create({
  container: {
    justifyContent: "center",
    alignItems: "center",
    height: "15%",
    width: "90%",
    marginBottom: 10,
    borderWidth: 0.5,
    borderColor: "grey",
    backgroundColor: "#423A42",
  },
  noImagesText: {
    color: "#ffffff",
  },
});
const { container, noImagesText } = imageCarouselStyles;
export default ImageCarousel;
