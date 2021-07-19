import * as FileSystem from "expo-file-system";
export const ADD_PLACES = "ADD_PLACES";

export const addPlace = async (title: string, image: string) => {
  return async (dispatch: any) => {
    const fileName = image.split("/").pop();
    const newPath = FileSystem.documentDirectory + fileName;
    try {
      await FileSystem.moveAsync({
        from: image,
        to: newPath,
      });
    } catch (error) {
      console.log(error);
      throw error;
    }

    dispatch({ type: ADD_PLACES, placeData: { title, newPath } });
  };
};
