import React, { useState } from "react";
import {
  FlatList,
  Image,
  Pressable,
  StyleSheet,
  Text,
  View,
} from "react-native";

const ImageCarousel = ({ userImages, selectThumbnail }) => {
  const [imageSelected, setImageSelected] = useState(null);

  return (
    <View style={container}>
      {userImages?.length ? (
        <FlatList
          horizontal
          data={userImages}
          renderItem={(item) => {
            return (
              <Pressable
                underlayColor="red"
                onPress={() => {
                  setImageSelected(item.index);
                  // console.log("SELECTED IMAGE", item);
                  selectThumbnail({ idx: item.index, selected: true });
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
