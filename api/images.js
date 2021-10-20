import { storage } from "../firebase";
import { getGlobal } from "reactn";

export const getImages = async () => {
  const { user } = getGlobal();
  try {
    const storageRef = storage.ref();
    const imageListRef = storageRef.child(user.imageBucket);

    const imageList = await imageListRef.listAll();
    const urlPromises = imageList.items.map((imageRef) =>
      imageRef.getDownloadURL()
    );
    let imageArr = Promise.all(urlPromises);
    return imageArr;
  } catch (error) {
    console.log({ error });
  }
};
