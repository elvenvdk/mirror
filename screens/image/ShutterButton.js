import React, { useEffect, useState } from "react";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Pressable,
  Image,
  Alert,
} from "react-native";
import { getImages } from "../../api/images";
import ImageCarousel from "../../common/ImageCarousel";

const ShutterButton = () => {
  const [images, setImages] = useState([]);
  const [selectedThumbIdx, setSelectedThumbIdx] = useState(null);
  const [isThumbnailSelected, setIsThumbnailSelected] = useState(false);

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

  const onSelectImage = ({ idx, selected }) => {
    console.log({ idx, selected });
    setIsThumbnailSelected(selected);
    setSelectedThumbIdx(idx);
  };

  console.log({ SELECTED_IMAGE: images[selectedThumbIdx] });

  return (
    <View style={shutterbuttonStyles.container}>
      <ImageCarousel
        userImages={images}
        selectThumbnail={({ idx, selected }) =>
          onSelectImage({ idx, selected })
        }
      />
      {!isThumbnailSelected ? (
        <TouchableOpacity style={shutterbuttonStyles.button}>
          <Text>Press Here</Text>
        </TouchableOpacity>
      ) : (
        <Pressable
          style={shutterbuttonStyles.selectedImage}
          onPressIn={() => {
            Alert.alert("What do you want to do?", "Pick one", [
              {
                text: "Shutter",
                onPress: () => {
                  setIsThumbnailSelected(false);
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
            style={shutterbuttonStyles.image}
            source={{ uri: images[selectedThumbIdx] }}
          />
        </Pressable>
      )}
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
  selectedImage: {
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    height: "80%",
    width: "90%",
  },
  image: {
    height: 600,
    width: 350,
  },
  buttonText: {},
});
