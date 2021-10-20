import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";

import { getImages } from "../../api/images";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);

  const fetchImages = async () => {
    try {
      const userImages = await getImages();
      setGalleryImages(userImages);
    } catch (error) {
      console.log({ IMAGE_GALLERY_ERROR: userImages?.error });
    }
  };

  useEffect(() => {
    fetchImages();
  }, []);

  console.log({ GALLERY_IMAGES: galleryImages });

  return (
    <SafeAreaView style={galleryStyles.container}>
      <FlatList
        data={galleryImages}
        renderItem={(item) => {
          return (
            <Pressable
              style={{
                margin: 1,
              }}
            >
              <Image
                source={{ uri: item.item }}
                style={{
                  justifyContent: "center",
                  alignItems: "center",
                  height: 136,
                  width: 136,
                }}
              />
            </Pressable>
          );
        }}
        numColumns={3}
        keyExtractor={(item, index) => index.toString()}
        style={{ width: "100%" }}
      />
    </SafeAreaView>
  );
};

export default Gallery;

const galleryStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    width: "100%",
  },
});
