import * as FileSystem from "expo-file-system";
import { fetchPlaces, insert } from "../../helpers/db";
import vars from "../../env";
export const ADD_PLACES = "ADD_PLACES";
export const SET_PLACES = "SET_PLACES";

export const addPlace = (title: string, image: string, location: any) => {
  const fileName = image.split("/").pop();
  const newPath = FileSystem.documentDirectory + fileName;

  return async (dispatch: any) => {
    try {
      const response = await fetch(
        `https://maps.google.com/maps/api/geocode/json?latlng=${location.lat},${location.lng}&key=${vars.googleAPIKey}`
      );
      if (!response.ok) {
        throw new Error("error fetching google api");
      }

      const resData = await response.json();
      if (!resData.results) {
        throw new Error("error fetching google api");
      }
      const address = resData.results[0].formatted_address;
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });

      const dbResult: any = await insert(
        title,
        newPath,
        address,
        location.lat,
        location.lng
      );

      dispatch({
        type: ADD_PLACES,
        placeData: {
          id: dbResult.isertedId,
          title,
          image: newPath,
          address,
          coords: { lat: location.lat, lng: location.lng },
        },
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
