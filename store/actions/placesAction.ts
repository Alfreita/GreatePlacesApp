import * as FileSystem from "expo-file-system";
import { fetchPlaces, insert } from "../../helpers/db";
export const ADD_PLACES = "ADD_PLACES";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title: string, image: string,location:any) => {
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
export const loadPlaces = () => {
  return async (dipatch: any) => {
    try {
      const places: any = await fetchPlaces();
      dipatch({ type: SET_PLACES, places: places.rows._array });
    } catch (error) {}
  };
};
