import * as FileSystem from "expo-file-system";
export const ADD_PLACES = "ADD_PLACES";
import { insert } from "../../helpers/db";

export const addPlace = (title: string, image: string) => {
  const fileName = image.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  return async (dispatch: any) => {
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });

      const dbResult: any = await insert(
        title,
        newPath,
        "dummy address",
        15.6,
        12.3
      );

      dispatch({
        type: ADD_PLACES,
        placeData: { id: dbResult.isertedId, title, image: newPath },
      });
    } catch (error) {
      console.log(error);
      throw error;
    }
  };
};
