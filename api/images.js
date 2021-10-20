import storage from "@react-native-firebase/storage";
import { getGlobal } from "reactn";

export const getImages = async () => {
  const { user } = getGlobal();
  try {
    const storageRef = storage().ref();
    const imageListRef = await storageRef.child(user.imageBucket).listAll();
    const imageUrlPromises = imageListRef.items.map(async (url) => {
      return url.getDownloadURL();
    });
    return Promise.all(imageUrlPromises);
  } catch (error) {
    console.log({ error });
  }
};
