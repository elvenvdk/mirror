import React, { useEffect, useState } from "react";
import {
  Alert,
  StyleSheet,
  Text,
  View,
  FlatList,
  Image,
  Pressable,
  SafeAreaView,
} from "react-native";
import GestureRecognizer, {
  swipeDirections,
} from "react-native-swipe-gestures";

import ImageCarousel from "../../common/ImageCarousel";

import { getImages } from "../../api/images";

const Gallery = () => {
  const [galleryImages, setGalleryImages] = useState([]);
  const [selectedThumbnailIdx, setSelectedThumbnailIdx] = useState(null);
  const [showImage, setShowImage] = useState(false);

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

  const onSelectImage = ({ idx, selected }) => {
    console.log({ idx, selected });
    setShowImage(selected);
    setSelectedThumbnailIdx(idx);
  };

  console.log({ GALLERY_IMAGES: galleryImages });

  return (
    <SafeAreaView style={galleryStyles.container}>
      {!showImage ? (
        <FlatList
          data={galleryImages}
          renderItem={(item) => {
            return (
              <Pressable
                onPress={() => {
                  onSelectImage({ idx: item.index, selected: true });
                }}
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
                    borderWidth: 1.5,
                    borderColor:
                      selectedThumbnailIdx === item.index ? "yellow" : "black",
                    marginRight: 2,
                  }}
                />
              </Pressable>
            );
          }}
          numColumns={3}
          keyExtractor={(item, index) => index.toString()}
          style={{ width: "100%" }}
        />
      ) : (
        <>
          <ImageCarousel
            userImages={galleryImages}
            selectThumbnail={({ idx, selected }) =>
              onSelectImage({ idx, selected })
            }
          />
          <GestureRecognizer
            style={{
              height: "100%",
              width: "100%",
              alignItems: "center",
              justifyContent: "center",
              padding: 0,
            }}
            onSwipeLeft={(state) => {
              if (selectedThumbnailIdx < galleryImages?.length - 1) {
                setSelectedThumbnailIdx(selectedThumbnailIdx + 1);
              }
            }}
            onSwipeRight={(state) => {
              if (selectedThumbnailIdx > 0) {
                setSelectedThumbnailIdx(selectedThumbnailIdx - 1);
              }
            }}
          >
            <Pressable
              style={galleryStyles.selectedImage}
              onLongPress={() => {
                Alert.alert("What do you want to do?", "Pick one", [
                  {
                    text: "Grid View",
                    onPress: () => {
                      setShowImage(false);
                    },
                  },
                  {
                    text: "Save to Library",
                    onPress: () => {
                      console.log("SAVED TO LIBRARY");
                      return;
                    },
                  },
                  {
                    text: "Cancel",
                    onPress: () => {
                      return;
                    },
                  },
                ]);
              }}
            >
              <Image
                style={galleryStyles.image}
                source={{ uri: galleryImages[selectedThumbnailIdx] }}
              />
            </Pressable>
          </GestureRecognizer>
        </>
      )}
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
  selectedImage: {
    position: "relative",
    bottom: 55,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "90%",
  },
  image: {
    height: "100%",
    width: "100%",
  },
});
