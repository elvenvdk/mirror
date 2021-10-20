import React, { useEffect, useState } from "react";
import {
  Image,
  StyleSheet,
  Text,
  View,
  FlatList,
  Pressable,
} from "react-native";

const ImageCarousel = ({ userImages }) => {
  // console.log("USER IMAGES FROM CAROUSEL", userImages);
  const [images, setImages] = useState(userImages);
  const [imageSelected, setImageSelected] = useState(null);

  return (
    <View style={container}>
      {userImages?.length ? (
        <FlatList
          horizontal
          data={userImages}
          renderItem={(item, index) => {
            console.log("ITEM IN FLATLIST ", item.item);
            return (
              <Pressable
                underlayColor="red"
                onPress={() => {
                  console.log("Pressed!", item.index);
                  setImageSelected(item.index);
                }}
              >
                <Image
                  source={{ uri: item.item }}
                  style={{
                    height: 100,
                    width: 100,
                    borderWidth: 1.5,
                    borderColor:
                      imageSelected === item.index ? "yellow" : "black",
                    marginRight: 2,
                  }}
                />
              </Pressable>
            );
          }}
          keyExtractor={(item) => item}
        />
      ) : (
        // <Text style={noImagesText}>Almost There...</Text>
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
  },
  noImagesText: {
    color: "#ffffff",
  },
  thumbnail: {
    marginRight: 2,
  },
});
const { container, noImagesText } = imageCarouselStyles;
export default ImageCarousel;
