import storage from "@react-native-firebase/storage";
import { getGlobal } from "reactn";

export const getImages = async () => {
  const { user } = getGlobal();
  try {
    const storageRef = storage().ref();
    const imageListRef = await storageRef.child(user.imageBucket).listAll();
    const imageUrlPromises = imageListRef.items.map(async (url) => {
      // const xhr = new XMLHttpRequest();
      // xhr.responseType = "blob";
      // xhr.onload = (event) => {
      //   let blob = xhr.response;
      // };
      // return url;
      return url.getDownloadURL();
    });
    return Promise.all(imageUrlPromises);

    // console.log("ImageListRef", imageListRef);

    // const imageList = await imageListRef.listAll();
    // const urlPromises = imageList.items.map((imageRef) =>
    //   imageRef.getDownloadURL()
    // );
    // let imageArr = Promise.all(urlPromises);

    // return imageArr;
  } catch (error) {
    console.log({ error });
  }
};
